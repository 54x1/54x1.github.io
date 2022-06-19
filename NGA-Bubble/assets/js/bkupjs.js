// NGA JS
var ngaObjsArray = [];
$(document).ready(function() {
  //who did the most in sydney based on prints
  // alert("test");
  //https://www.youtube.com/watch?v=TOJ9yjvlapY
  // https://observablehq.com/@d3/bar-chart-race
  // https://www.youtube.com/playlist?list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p
  //https://observablehq.com/@d3/zoomable-circle-packing


  // issues
  // this search query {https://stc-api-prod.azurewebsites.net/stcapi/service/ngacd/search?searchTerm=sculpture%20garden&pageSize=1&startIndex=0}
  //type?
  //"John Olsen" = [12].type = complete series/set/portfolio/album/book for valuation

  var city = 'perth';
  var circleData = {
    "name": "" +city.charAt(0).toUpperCase()+city.substring(1)+ "",
    "children": [
      {
        "name": ""+city.charAt(0).toUpperCase()+city.substring(1)+" Drawings",
         "children" :[]
       }
     ]
  };
  var circleData2 = [];
  var creatorsArray = [];
  var creatorsCounts = [];
  var filteredArray = [];
  var filteredCircleData = [];
  console.log("creatorsArray");
  console.log(creatorsArray);
  console.log("circleData");
  console.log(circleData2);
  console.log("creatorsCounts");
  console.log(creatorsCounts);


  // function getNgaUrl (ngaObjs, name){
  //
  //       ngaObjs.forEach(function(d){
  //               // console.log("dVal");
  //               // console.log(d.name);
  //               // console.log(d.count);
  //               ngaObjsArray.push({name: name, type: d.creatorsFacet, typeCount: d.count});
  //       });
  //     }

  //get json url request
  var ngaUrl1 = 'https://stc-api-prod.azurewebsites.net/stcapi/service/ngacd/search?advSearch=%7B%0A%20%20%22objectTypeFacet%22%3A%20%22drawings%22%2C%0A%20%20%22placeOfCreationFacet%22%3A%20%22%' + city + '%22%0A%7D&pageSize=50&startIndex=1&searchTerm=' + city + '';
  $.getJSON(ngaUrl1, function(ngaFuncData) {
    console.log("data");
      console.log(ngaFuncData);
    var ngaObjs = ngaFuncData.payLoad.items;
    ngaObjs.forEach(function(d) {
      var dCreators = d.creators;
      creatorsArray.push(dCreators);



    });
    //create an array that counts how many times that artist is mentioned
    creatorsCounts.push(creatorsArray.forEach(function(x) {
      creatorsCounts[x] = (creatorsCounts[x] || 0) + 1;
    }));






    // make nested array omg super hard

    for (var [key, value] of Object.entries(creatorsCounts)) {
  a = [];
        b = {name: key,
          children: [{name: key, value: value}]
        }
          a.push(b);
          a.forEach(function (d){
          filteredArray.push(d);
      });
      filteredArray = circleData.children[0].children;
      circleData2.push(filteredArray);
}
    console.log("filteredArray");
    console.log(filteredArray);
console.log("circleData");
console.log(circleData);



    const svg = d3.select('svg');

  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const color = d3.interpolateSpectral;

  const format = d3.format(',d');

  const pack = (data) =>
    d3.pack().size([width, height]).padding(3)(
      d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value)
    );

  // ----------------------------------------

  let idCount = 1;

  const render = (svg, { root }) => {
    let focus = root;

    let view;

    svg
      .attr(
        'viewBox',
        `-${width / 2} -${height / 2} ${width} ${height}`
      )
      .style('display', 'block')
      .style('margin', '0 -14px')
      .style('background', color(0))
      .style('cursor', 'pointer')
      .on('click', () => zoom(root));

    const node = svg
      .append('g')
      .attr('id', idCount - 1)
      .selectAll('circle')
      .data(root.descendants().slice(1))
      .join('circle')
      .attr('fill', (d) =>
        d.children ? color(d.depth) : 'white'
      )
      .attr('pointer-events', (d) =>
        !d.children ? 'none' : null
      )
      .on('mouseover', function () {
        d3.select(this).attr('stroke', '#000');
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', null);
      })
      .on(
        'click',
        (d) =>
          focus !== d && (zoom(d), d3.event.stopPropagation())
      );

    const label = svg
      .append('g')
      .attr('id', idCount - 1 + 'point')
      .style('font', '20px sans-serif')
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(root.descendants())
      .join('text')
      .style('fill-opacity', (d) =>
        d.parent === root ? 1 : 0
      )
      .style('display', (d) =>
        d.parent === root ? 'inline' : 'none'
      )
      .text((d) => d.data.name);

    zoomTo([root.x, root.y, root.r * 4]);

    function zoomTo(v) {
      const k = width / v[2];

      view = v;

      label.attr(
        'transform',
        (d) =>
          `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
      );
      node.attr(
        'transform',
        (d) =>
          `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
      );
      node.attr('r', (d) => d.r * k);
    }

    function zoom(d) {

      focus = d;

      const transition = svg
        .transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween('zoom', (d) => {
          const i = d3.interpolateZoom(view, [
            focus.x,
            focus.y,
            focus.r * 4,
          ]);
          return (t) => zoomTo(i(t));
        });

      label
        .filter(function (d) {
          return (
            d.parent === focus ||
            this.style.display === 'inline'
          );
        })
        .transition(transition)
        .style('fill-opacity', (d) =>
          d.parent === focus ? 1 : 0
        )
        .on('start', function (d) {
          if (d.parent === focus)
            this.style.display = 'inline';
        })
        .on('end', function (d) {
          if (d.parent !== focus) this.style.display = 'none';
        });
    }
  };
const dd = {
    "name": "Perth",
    "children": [
        {
            "name": "Perth Drawings",
            "children": [
                {
                    "name": "Brian Blanchflower",
                    "children": [
                        {
                            "name": "Brian Blanchflower",
                            "value": [
                                31
                            ]
                        }
                    ]
                },
                {
                    "name": "Grahame King",
                    "children": [
                        {
                            "name": "Grahame King",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Joan Campbell",
                    "children": [
                        {
                            "name": "Joan Campbell",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Joseph Hamblin",
                    "children": [
                        {
                            "name": "Joseph Hamblin",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Ted Snell",
                    "children": [
                        {
                            "name": "Ted Snell",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Carlier Makigawa",
                    "children": [
                        {
                            "name": "Carlier Makigawa",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "James W. Linton",
                    "children": [
                        {
                            "name": "James W. Linton",
                            "value": [
                                3
                            ]
                        }
                    ]
                },
                {
                    "name": "Kevin Gordon",
                    "children": [
                        {
                            "name": "Kevin Gordon",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Dianne Jones",
                    "children": [
                        {
                            "name": "Dianne Jones",
                            "value": [
                                5
                            ]
                        }
                    ]
                },
                {
                    "name": "Horace Samson",
                    "children": [
                        {
                            "name": "Horace Samson",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Frank Mills",
                    "children": [
                        {
                            "name": "Frank Mills",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "George Pitt Morison",
                    "children": [
                        {
                            "name": "George Pitt Morison",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Shane Pickett",
                    "children": [
                        {
                            "name": "Shane Pickett",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Edith Trethowan",
                    "children": [
                        {
                            "name": "Edith Trethowan",
                            "value": [
                                4
                            ]
                        }
                    ]
                },
                {
                    "name": "John Beard",
                    "children": [
                        {
                            "name": "John Beard",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Helen Creeth,May Creeth",
                    "children": [
                        {
                            "name": "Helen Creeth,May Creeth",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "James A. Linton",
                    "children": [
                        {
                            "name": "James A. Linton",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "Matthew Hunt",
                    "children": [
                        {
                            "name": "Matthew Hunt",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Matthew Hunt,Robert Cook",
                    "children": [
                        {
                            "name": "Matthew Hunt,Robert Cook",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "David Hay",
                    "children": [
                        {
                            "name": "David Hay",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Paul Uhlmann",
                    "children": [
                        {
                            "name": "Paul Uhlmann",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Karl Wiebke",
                    "children": [
                        {
                            "name": "Karl Wiebke",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Lesley Duxbury",
                    "children": [
                        {
                            "name": "Lesley Duxbury",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Miriam Stannage",
                    "children": [
                        {
                            "name": "Miriam Stannage",
                            "value": [
                                4
                            ]
                        }
                    ]
                },
                {
                    "name": "Vaclovas Ratas",
                    "children": [
                        {
                            "name": "Vaclovas Ratas",
                            "value": [
                                6
                            ]
                        }
                    ]
                },
                {
                    "name": "Memnuna Vila-Bogdanich",
                    "children": [
                        {
                            "name": "Memnuna Vila-Bogdanich",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "Elise Blumann",
                    "children": [
                        {
                            "name": "Elise Blumann",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Henri van Raalte",
                    "children": [
                        {
                            "name": "Henri van Raalte",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "Louis Kahan",
                    "children": [
                        {
                            "name": "Louis Kahan",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Howard Taylor",
                    "children": [
                        {
                            "name": "Howard Taylor",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "A. B. Webb",
                    "children": [
                        {
                            "name": "A. B. Webb",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "Sally Morgan,Magic Signs",
                    "children": [
                        {
                            "name": "Sally Morgan,Magic Signs",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Harald Vike",
                    "children": [
                        {
                            "name": "Harald Vike",
                            "value": [
                                2
                            ]
                        }
                    ]
                },
                {
                    "name": "Jeremy Kirwan-Ward",
                    "children": [
                        {
                            "name": "Jeremy Kirwan-Ward",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Geoffrey Summerhayes",
                    "children": [
                        {
                            "name": "Geoffrey Summerhayes",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Herbert McClintock",
                    "children": [
                        {
                            "name": "Herbert McClintock",
                            "value": [
                                3
                            ]
                        }
                    ]
                },
                {
                    "name": "Susan Watkins",
                    "children": [
                        {
                            "name": "Susan Watkins",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "James Peele",
                    "children": [
                        {
                            "name": "James Peele",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "James Ashton",
                    "children": [
                        {
                            "name": "James Ashton",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Christel van Der Laan",
                    "children": [
                        {
                            "name": "Christel van Der Laan",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "Mark Levinson",
                    "children": [
                        {
                            "name": "Mark Levinson",
                            "value": [
                                1
                            ]
                        }
                    ]
                },
                {
                    "name": "James C. Taylor",
                    "children": [
                        {
                            "name": "James C. Taylor",
                            "value": [
                                2
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
const ddd = {
    name: 'top',
    children: [
      {
        name: 'A',
        'children': [
          {
            name: 'AChild',
            children: [{ name: 'AGrandChild', value: 234 }],
          },
        ],
      },
      {
        name: 'B',
        children: [
          {
            name: 'BChild',
            children: [{ name: 'BGrandChild', value: 234 }],
          },
        ],
      },
    ],
  };
console.log("org-ddd");
  console.log(ddd);

const data = circleData;
console.log("circleDataz");
console.log(circleData);
  // mergeTree

  const mergeTree = (array) => {
    const newTree = {
      name: 'newNode',
      children: [],
    };

    array.forEach((elem, i) => {
      newTree.children.push(elem);
    });

    return newTree;
  };

  const dataStack = [];
  dataStack.push(data);
  const root = pack(data);

  render(svg, { root: root });


    });





//end of document
});

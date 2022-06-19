// NGA JS
var ngaObjsArray = [];
$(document).ready(function() {

var city = 'Melbourne';
  loadit(city);
var getCitys = ['Sydney', 'Brisbane', 'Hobart', 'Melbourne', 'Perth'];
var sortedCity = getCitys.sort();

    var cityBtn = $('.citys');
    for (var i = 0; i < $(sortedCity).length; i++) {
           var cityBtnContent = "<button id='cityBtn' value=" + getCitys[i] + " class='button'>" + getCitys[i]+ "</button>";
           $(cityBtn).append(cityBtnContent);
       }




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

      $(document).on('click', '#cityBtn', function() {
          $('.svg-container svg').html("");
              $("svg").hide();
                $(".loading").show();
           city = $(this).attr("value");
            loadit(city);
            city = '';
      });
function loadit(city){
  $('.city').hide();
  var circleData = {
    "name": "" +city.charAt(0).toUpperCase()+city.substring(1)+ "",
    "children": [
      {
        "name": ""+city.charAt(0).toUpperCase()+city.substring(1)+" Drawing Artists",
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
  var ngaUrl1 = 'https://stc-api-prod.azurewebsites.net/stcapi/service/ngacd/search?advSearch=%7B%0A%20%20%22objectTypeFacet%22%3A%20%22drawings%22%2C%0A%20%20%22placeOfCreationFacet%22%3A%20%22%' + city + '%22%0A%7D&pageSize=99999999&startIndex=0&searchTerm=' + city + '';
  $.getJSON(ngaUrl1, function(ngaFuncData) {
    }).always(function(ngaFuncData) {

          $(".loading").hide();
          $('.city').show();
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

  const color = d3.scaleOrdinal(d3.schemeGreys);

  const format = d3.format(',d');

  const pack = (data) =>
    d3.pack().size([width, height]).padding(3)(
      d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value)
    );

  // ----------------------------------------

  var n = [];
  var n2 = [];

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
      .style('margin', '0px')
      .style('background', color(0))
      .style('cursor', 'pointer')
      .data(root.descendants())
      .on('click', function(d) {
        zoom(root);
console.log('2');

//filter null and non relevant results
if (n[0] != null && n[0] != ''+city+' Drawing Artists'){
  //open artist in new window
  //change the request to allow for two tabs to be called at once might have pop up bug issue?
            window.open('https://searchthecollection.nga.gov.au/results?keyword='+n[0]+'', 'firstWindow');
            if (n[1] != null){
                    window.open('https://searchthecollection.nga.gov.au/results?keyword='+n[1]+'', 'secondWindow');
                    }

            console.log(n[1]);
}

// if (n[0] == 'Brisbane Drawing Artists'){
//
// }

     });

    const node = svg
      .append('g')
      .attr('id', idCount - 1)
      .selectAll('circle')
      .data(root.descendants().slice(1))
      .join('circle')
      .attr('fill', (d) =>
        d.children ? color(d.depth) : 'white'
      )
      .attr('value', function(d){return d.data.name})
      .attr('pointer-events', (d) =>
        !d.children ? 'none' : null
      )
      .on('mouseover', function () {
        d3.select(this).attr('stroke', '#a38d65');
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', null);
      })
      .on(
        'click',
        function (d){
          focus !== d && (zoom(d), d3.event.stopPropagation());
          console.log('1');
            console.log($(this).attr('value'));

            //refresh the name array before starting
            n = [];
            n2 = [];
            var name = $(this).attr('value');

            //has name then push to n array
            if (name != null){
                var filteredNames =  name.split(',');
                console.log(filteredNames);
                      n.push(filteredNames[0]);
                      if (filteredNames[1] != null){
                        n.push(filteredNames[1]);
                      }
            }
            console.log(n);
            // console.log(n2);
        });

      const label = svg
      .append('g')
      .attr('id', idCount - 1 + 'point')
      .style('font', '20px sans-serif')
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .attr('value', 'name2')
      .selectAll('text')
      .data(root.descendants())
      .join('text')
      .style('fill-opacity', (d) =>
        d.parent === root ? 1 : 0
      )
      .style('display', (d) =>
        d.parent === root ? 'inline' : 'none'
      ).style('fill', "#a38d65")
      .text(function (d) {
        var name = d.data.name;

        if (d.data.value == null){
          return ""+name+"";
        }else{
          if (d.data.value > 1){
            return ""+name+": "+""+d.data.value + ' Drawings'}
            else{return ""+d.data.name+": "+""+d.data.value + ' Drawing'}"";
          }


});

    zoomTo([root.x, root.y, root.r * 2.7]);

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
            focus.r * 2.7,
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
        ).attr('value', function(d){return d.data.name})
        .on('start', function (d) {
          if (d.parent === focus)
            this.style.display = 'inline';
        })
        .on('end', function (d) {
          if (d.parent !== focus) this.style.display = 'none';
        });
    }
  };

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


}


//end of document
});

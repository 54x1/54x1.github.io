$(document).ready(function() {

  var search = locationIp(ipD);
  var date;
  var dY;
  var nY;
  var input = $("#searchInput");
  var inputD = $("#searchDate");
  var ipD;
  $('.popDates').toggleClass('loaded');

  $(document).ready(function() {

    var search = locationIp(ipD);
    var date;
    var dY;
    var nY;
    var input = $("#searchInput");
    var inputD = $("#searchDate");
    var ipD;
    $('.popDates').toggleClass('loaded');


    $(window).on('load', function() {

      setTimeout(function() {


        var input = '';
        var date = '';
        var inputD = '';
        // alert('here');
        funcSearch(input, inputD, date, dY);

      }, 350);
    });

    function getWarMemDate(inputD, input, date) {
      var date = $("#searchDate").val();
      console.log("date");
      // alert("date: "+date);

      funcSearch(input, date, dY);

    }
    // press enter on append search date
    $('body').on('keypress', '#searchDate', function(e) {
      if (e.which == 13) {
        getWarMemDate(inputD, input, date);
      }
    });

    function locationIp() {
      var ipUrl = 'http://ipinfo.io';
      $.get(ipUrl, function(ipDate) {
        // $(".location").html("Location</br><h4><span class='spanLocation'>"+ipDate.city + ", </span>" + ipDate.region+"</h4>");
        ipD = ipDate.city;
      }, "jsonp").fail(function() {
        // get ip request fail use cbr as dummy
        ipD = 'Canada';
      });

      return ipD;
    }
    locationIp(ipD);
    // press search icon
    $("#search>.material-icons").click(function() {
      funcSearch(input, inputD, date, dY);

    });
    // press appended search icon
    $(document).on('click', '#searchD>.material-icons', function() {
      funcSearch(input, inputD, date, dY);
    });
    // press enter to search
    $(input).keypress(function(e) {
      if (e.which == 13) {
        // e.preventDefault();


        console.log($(input).val());

        $('.sYear').html('<div class="input-field sDate"><input id="searchDate" type="search" placeholder="Search year: 1914"><label id="searchD" class="label-icon" for="search"><i class="material-icons">search</i></label><i class="material-icons">close</i></div>');
        funcSearch(input, inputD, date, dY);
      }
    });

    function funcSearch(input, inputD, date, dY) {
      console.log("date");
      var date = $("#searchDate").val();
      console.log("inputD");
      var inputD = $("#searchDate").val();
      // alert("date: "+date);
      console.log("search");
      var input = $("#searchInput").val();
      console.log(locationIp(ipD));
      // alert('funcSearch');
      var search = $('#searchInput').val();
      if (search == '') {

        // alert('here');
        aWarMem(search, date, dY);
      } else {
        var search = $(input).val();
        aWarMem(search, date, dY);

      }


      function cclick() {
        // read more / read less function
        function readMore() {
          $('.tabcontent').on('click', '#read-more', function() {
            $(this).parent().find('.desc').toggleClass('desc-active');
            if ($(this).parent().find('.desc').hasClass('desc-active')) {
              $(this).parent().find('.btn').text('read less');
            } else {
              $(this).parent().find('.btn').text('read more');
            }

          });
        }

        readMore();

        // idea from https://stackoverflow.com/questions/11645081/how-to-build-simple-tabs-with-jquery
        // start addclass inactive
        $('#tabs .dDown').addClass('inactive');



        $('.dDown').click(function() {
          var val = $(this).attr('value');
          $('.tabcontent').hide();
          // when this tab click has class inactive remove it and fade in tab content
          if ($(this).hasClass('inactive')) {
            $('#tabs .dDown').addClass('inactive');
            $(this).removeClass('inactive');

            $('#active-' + val).fadeIn('slow');
          } else {
            $('#tabs .dDown').addClass('inactive');
            $('#active-' + val).fadeOut('slow');
          }
          $('.dDown').click(function() {
            sndVal = $(this).attr('value');
            if (sndVal != val) {
              $('.dDownContent-' + val).hide();
            }
          });
          console.log("val");
          console.log(val);

        });
      }


      function aWarMem(search, date, dY) {
console.log('function aWarMem here')
        var date = $('#searchDate').val();
        var search = $('#searchInput').val();
        if (search == '') {
          search = locationIp(ipD);
          date = '';
        } else {
          search = $('#searchInput').val();
          date = $('#searchDate').val();
        }
        fetch('https://qjeqzny91m.execute-api.ap-southeast-2.amazonaws.com/alpha?q=*' + search + '*&fq=' + date +  '&wt=json&start=-0&rows=150', {
          headers: new Headers({
            'X-Api-Key': 'AYNgg1v9Nm3VhoZFX0Bve65FNQJiBqCJ6dNonCWr'
          })
        }).then(response => response.json()).then(data => {
          console.log("data");
          console.log(data);
          var dLength = data.response.docs.length;
          console.log("dLength");
          console.log(dLength);
          // var arrD = [];
          var dImgYearsArray = [];
          var dImgTitleArray = [];
          var dImgDateArray = [];
          var dImgArray = [];
          var dImgDesArray = [];
          if (dLength > 0) {
            for (var i = 0; i < dLength; i++) {
              // console.log(data.response.docs[i].has_public_image);
              var dataImg = data.response.docs[i].has_public_image;

              if (dataImg == false || dataImg == null) {
                console.log("No Image Avaliable");
                console.log("No Image Results");
              } else {
                var dImgTitle = data.response.docs[i].title;
                var dImgCollect = data.response.docs[i].accession_number;
                var dImgId = data.response.docs[i].mediakey[0];
                var dImgYears = data.response.docs[i].conflict_search;
                var dImgDate = data.response.docs[i].date_made;
                var dImgDes = data.response.docs[i].description;
                if (dImgDate == null) {
                  var dImgDate = 'No Date';
                } else {
                  dImgDate = data.response.docs[i].date_made;
                }

                console.log("dImgDate");
                console.log(dImgDate);
                console.log("dImgYears");
                console.log(dImgYears);

                var dImgStringLen = dImgYears.length;
                console.log(dImgStringLen);
                // var dImgDateSplit = dImgYears.split(":");

                console.log(dImgYears);


                for (var x = 0; x < dImgStringLen; x++) {
                  var dImgString = dImgYears[x];
                  var dImgStringSplit = dImgString.split(":");
                  //               for (var y = 0; y < dImgStringSplit.length; y++) {
                  //               }
                  console.log("" + dImgStringSplit[1] + "");
                }
                var char = dImgStringSplit[1];

                // chnage the - blank to Present
                function charFunc(char) {

                  var lastChar = char.substr(char.length - 1);
                  if (lastChar == "-") {
                    var addPres = char.concat("Present");
                    char = addPres;
                  } else {
                    char
                  }
                  return char;
                }
                charFunc(char);
                console.log(dImgStringLen);

                console.log("dImgTitle");
                console.log(dImgTitle);
                var dImg = 'https://s3-ap-southeast-2.amazonaws.com/awm-media/collection/' + dImgCollect + '/screen/' + dImgId + '.JPG';
                console.log("dImg");
                console.log(dImg);
                console.log("dImgDate");
                console.log(dImgDate);
                dImgYearsArray.push("" + charFunc(char) + "");
                dImgTitleArray.push("" + dImgTitle + "");
                dImgArray.push("" + dImg + "");
                dImgDateArray.push("" + dImgDate + "");
                dImgDesArray.push("" + dImgDes + "");
                console.log("dImgYearsArray");
                console.log(dImgYearsArray);
                var dYears = dImgYearsArray.sort().reverse();
                console.log("dYears");
                console.log($(dYears).length);
                var dYearsLength = $(dYears).length;
                dY = [...new Set(dYears)];
                console.log("dY" + dY);

                function pDates(dY, dYearsLength, dImgTitleArray, dImgArray, dImgDateArray, dImgDesArray, search) {
                  // alert('hered');
                  var search = $("#searchInput").val();
                  if (search == '') {
                    locationIp(ipD);
                    // alert(ipD);
                    search = ipD;
                    // alert('here');
                  } else {
                    // alert('else');
                    search = $("#searchInput").val();
                    // alert(search);
                  }
                  $('.popDates').html('<h4 class="popDates title-h4">Popular dates for location: "' + search + '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="divider"></div><div class="content"><div class="row"></div></div>');
                  var dateLength = dY.length;
                  $('#dates').append("<div class='row'><div id='tabs' class='row'></div></div>");
                  for (var i = 0; i < dateLength; i++) {
                    $('#dates>.row>.row').append('<div value=' + [i] + ' id="dDown-' + [i] + '" class="tablinks dDown sMax waves-effect light-blue darken-4 btn-large">' + dY[i] + '</div>').hide().fadeIn(100);
                    console.log("dYearsLength");
                    console.log(dYearsLength);
                    //
                    // for (var o = 0; o < dYearsLength; o++) {
                    //
                    $('.content>.row').append('<div id="active-' + [i] + '" class="col m12 l6 tabcontent dDownContent-' + [i] + '"><h5 class="title-h5 dDownImg center-align">' + dImgTitleArray[i] + '</h5><img class="dDownImg" src="' + dImgArray[i] + '" alt="' + dImgTitleArray[i] + '""><h5 class="date-made">Description</br></h5><h6 class="made desc">"' + dImgDesArray[i] + '"</h6><h6 class="waves-effect light-blue accent-4 btn" id="read-more">Read more</h6><h5 class="date-made">Date Made</br></h5><h6 class="made">' + dImgDateArray[i] + '</h6></div>');
                    //
                    // }
                  }
                }
                pDates(dY, dYearsLength, dImgTitleArray, dImgArray, dImgDateArray, dImgDesArray);

                cclick();

              }
            }
            // pDatesNma(nY, search);
          } else {
            $('.sYear').html("");
            if (date == null) {
              date = '';
            }
            $('.popDates').html('<h4 class="popDates">No results for: "' + search + ' ' + date + '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="content"></div>')
            $('.sDate').html("");
          }

        }).catch(error => console.error(error));


      }
    }
    // below was the attempt to use NMA api
    function pDatesNma(nY, search) {
      setTimeout(function() {
        var date = $('#searchDate').val();
        var search = $('#searchInput').val();
        var nmaKey = 'GLmHbFQn9N3i797zq9tpOd6JkulDUBcK';
        var nmaUrl;
        var nmaImgArray = [];
        var nmaIssuedArray = [];
        if (search == '') {
          search = locationIp(ipD);
          nmaUrl = 'https://data.nma.gov.au/object?limit=5&text=' + search + '&apikey=' + nmaKey + '';
        } else {
          search = $('#searchInput').val();
          date = $('#searchDate').val();
          nmaUrl = 'https://data.nma.gov.au/object?limit=5&text=' + search + '&text="' + date + '"&apikey=' + nmaKey + '';
        }



        console.log("nmaUrl");
        console.log(nmaUrl);
        $.get(nmaUrl, function(nmaData) {
          console.log("nmaData");
          console.log(nmaData);


          console.log(nmaData.data[0]);
          var nmaLength = nmaData.data.length;
          console.log("nmaLength");
          console.log(nmaLength);
          for (var i = 0; i < nmaLength; i++) {

            if (nmaData.data[i].id == true || nmaData.data[i].id != null) {
              console.log("issued");
              console.log(nmaData.data[i]._meta.issued);
              var nmaIssued = nmaData.data[i]._meta.issued;
              var nmaIssuedString = nmaIssued.slice(0, 4);
              console.log(nmaIssuedString);

              nmaIssuedArray.push(nmaIssuedString);
              // console.log(dImgYearsArray);
              var nmaYears = nmaIssuedArray.sort();
              console.log("nmaYears");
              console.log($(nmaYears).length);
              var nmaYearsLength = $(nmaYears).length;
              var nY = [...new Set(nmaYears)];
              console.log("nY");
              console.log(nY);




              nmaImgUrl = 'https://data.nma.gov.au/media/' + nmaData.data[i].id + '&apikey=' + nmaKey + '';
              console.log("nmaImgUrl");
              console.log(nmaImgUrl);

              $.get(nmaImgUrl, function(nmaDataDate) {
                console.log("datanma");
                console.log(nmaDataDate);

                var nmaImg = nmaDataDate.data[0].hasVersion[1].identifier;
                nmaImgArray.push("" + nmaImg + "");
                console.log("nmaImgArray");
                console.log(nmaImgArray.length);
                for (var i = 0; i < nmaImgArray.length; i++) {
                  $('.content>.row').append('<div id="active-' + [i] + '" class="col m12 l6 tabcontent dDownContent-' + [i] + '"><h5 class="title-h5 dDownImg center-align">' + [i] + '</h5><img class="dDownImg" src="' + nmaImgArray[i] + '" alt="' + [i] + '""><h5 class="date-made">Description</br></h5><h6 class="made desc">"' + [i] + '"</h6><h6 class="waves-effect light-blue accent-4 btn" id="read-more">Read more</h6><h5 class="date-made">Date Made</br></h5><h6 class="made">' + [i] + '</h6></div>');
                }

                // $('#dates').append("<div class='row'><div id='tabs' class='row'></div></div>");
                var nYLength = nY.length;
                console.log("nYLength");
                console.log(nYLength);
                for (var q = 0; q < nYLength; q++) {
                  $('#dates>.row>.row').append('<div value="nma-' + [q] + '" id="dDown-' + [q] + '" class="tablinks dDown sMax waves-effect light-blue darken-4 btn-large">' + nY[q] + '</div>').hide().fadeIn(100);
                  //   console.log("dYearsLength");
                  // console.log(dYearsLength);
                  //
                  // for (var o = 0; o < dYearsLength; o++) {
                  //
                  // $('.content>.row').append('<div id="active-'+[i]+'" class="col m12 l6 tabcontent dDownContent-'+[i]+'"><h5 class="title-h5 dDownImg center-align">' + dImgTitleArray[i] + '</h5><img class="dDownImg" src="' + dImgArray[i] + '" alt="' + dImgTitleArray[i] + '""><h5 class="date-made">Description</br></h5><h6 class="made desc">"'+dImgDesArray[i]+'"</h6><h6 class="waves-effect light-blue accent-4 btn" id="read-more">Read more</h6><h5 class="date-made">Date Made</br></h5><h6 class="made">' + dImgDateArray[i] + '</h6></div>');
                  //
                  // }
                }
              }).fail(function() {
                // alert('here');
              });
            }

          }

          //   for (var a = 0; a < 5; a++) {
          //   $('#dates>.row>.row').append('<div value=' + [a] + ' id="dDown-' + [a] + '" class="tablinks dDown sMax waves-effect light-blue darken-4 btn-large">' + nY[a] + '</div>').hide().fadeIn(100);
          //
          // }

        });


      }, 550);
      // alert('hered');
      //   var search = $("#searchInput").val();
      // if (search == ''){
      //   locationIp(ipD);
      //   // alert(ipD);
      //   search = ipD;
      //   // alert('here');
      // }else{
      //   // alert('else');
      //     search = $("#searchInput").val();
      //     // alert(search);
      // }
      // $('.popDates').html('<h4 class="popDates title-h4">Popular dates for location: "' + search + '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="divider"></div><div class="content"><div class="row"></div></div>');


    }
  });

  $(window).on('load', function() {

    setTimeout( function() {


    var input = '';
    var date = '';
    var inputD = '';
    // alert('here');
  funcSearch(input, inputD, date, dY);

},350);
});
  function getWarMemDate(inputD, input, date){
  var date = $("#searchDate").val();
    console.log("date");
    // alert("date: "+date);

          funcSearch(input, date, dY);

  }
// press enter on append search date
  $('body').on('keypress', '#searchDate', function(e) {
    if (e.which == 13) {
getWarMemDate(inputD, input, date);
    }
  });
  function locationIp(){
    var ipUrl = 'http://ipinfo.io';
    $.get(ipUrl, function (ipDate) {
      // $(".location").html("Location</br><h4><span class='spanLocation'>"+ipDate.city + ", </span>" + ipDate.region+"</h4>");
      ipD = ipDate.city;
  }, "jsonp").fail(function(){
    // get ip request fail use cbr as dummy
  ipD = 'Canada';
  });

  return ipD;
  }
  locationIp(ipD);
// press search icon
  $("#search>.material-icons").click(function() {
    funcSearch(input, inputD, date, dY);

  });
// press appended search icon
  $(document).on('click', '#searchD>.material-icons', function(){
    funcSearch(input, inputD, date, dY);
  });
// press enter to search
  $(input).keypress(function(e) {
    if (e.which == 13) {
      // e.preventDefault();


      console.log($(input).val());

      $('.sYear').html('<div class="input-field sDate"><input id="searchDate" type="search" placeholder="Search year: 1914"><label id="searchD" class="label-icon" for="search"><i class="material-icons">search</i></label><i class="material-icons">close</i></div>');
      funcSearch(input, inputD, date, dY);
    }
  });

  function funcSearch(input, inputD, date, dY) {
    console.log("date");
    var date = $("#searchDate").val();
    console.log("inputD");
    var inputD = $("#searchDate").val();
    // alert("date: "+date);
    console.log("search");
    var input = $("#searchInput").val();
    console.log(locationIp(ipD));
    // alert('funcSearch');
  var search = $('#searchInput').val();
    if (search == '') {

// alert('here');
      aWarMem(search, date, dY);
    } else {
      var search = $(input).val();
      aWarMem(search, date, dY);

}


      function cclick() {
        // read more / read less function
        function readMore(){
$('.tabcontent').on('click','#read-more',function(){
  $(this).parent().find('.desc').toggleClass('desc-active');
  if ($(this).parent().find('.desc').hasClass('desc-active')){
      $(this).parent().find('.btn').text('read less');
  }else{
      $(this).parent().find('.btn').text('read more');
  }

});
          }

readMore();

        // idea from https://stackoverflow.com/questions/11645081/how-to-build-simple-tabs-with-jquery
        // start addclass inactive
        $('#tabs .dDown').addClass('inactive');



        $('.dDown').click(function() {
          var val = $(this).attr('value');
            $('.tabcontent').hide();
            // when this tab click has class inactive remove it and fade in tab content
          if ($(this).hasClass('inactive')) {
            $('#tabs .dDown').addClass('inactive');
            $(this).removeClass('inactive');

            $('#active-' + val).fadeIn('slow');
          }else{
            $('#tabs .dDown').addClass('inactive');
            $('#active-' + val).fadeOut('slow');
          }
          $('.dDown').click(function(){
             sndVal = $(this).attr('value');
            if (sndVal != val){
              $('.dDownContent-'+val).hide();
            }
          });
          console.log("val");
          console.log(val);

        });
      }


      function aWarMem(search, date, dY) {

var date = $('#searchDate').val();
var search = $('#searchInput').val();
if (search == '') {
search = locationIp(ipD);
date = '';
}else{
search = $('#searchInput').val();
date = $('#searchDate').val();
}
        fetch('https://qjeqzny91m.execute-api.ap-southeast-2.amazonaws.com/alpha?q=*' + search + '*&fq=' + date + '&wt=json', {
          headers: new Headers({
            'X-Api-Key': 'AYNgg1v9Nm3VhoZFX0Bve65FNQJiBqCJ6dNonCWr'
          })
        }).then(response => response.json()).then(data => {
          console.log("data");
          console.log(data);
          var dLength = data.response.docs.length;
          console.log("dLength");
            console.log(dLength);
          // var arrD = [];
          var dImgYearsArray = [];
          var dImgTitleArray = [];
          var dImgDateArray = [];
          var dImgArray = [];
          var dImgDesArray = [];
          if (dLength > 0){
          for (var i = 0; i < dLength; i++) {
            // console.log(data.response.docs[i].has_public_image);
            var dataImg = data.response.docs[i].has_public_image;

            if (dataImg == false || dataImg == null) {
              console.log("No Image Avaliable");
              console.log("No Image Results");
            } else {
              var dImgTitle = data.response.docs[i].title;
              var dImgCollect = data.response.docs[i].accession_number;
              var dImgId = data.response.docs[i].mediakey[0];
              var dImgYears = data.response.docs[i].conflict_search;
              var dImgDate = data.response.docs[i].date_made;
              var dImgDes = data.response.docs[i].description;
if (dImgDate == null){
var dImgDate = 'No Date';
}else{
  dImgDate = data.response.docs[i].date_made;
}

              console.log("dImgDate");
              console.log(dImgDate);
              console.log("dImgYears");
              console.log(dImgYears);

              var dImgStringLen = dImgYears.length;
                            console.log(dImgStringLen);
              // var dImgDateSplit = dImgYears.split(":");

              console.log(dImgYears);


              for (var x = 0; x < dImgStringLen; x++) {
                var dImgString = dImgYears[x];
                var dImgStringSplit = dImgString.split(":");
                //               for (var y = 0; y < dImgStringSplit.length; y++) {
                //               }
                console.log("" + dImgStringSplit[1] + "");
              }
              var char = dImgStringSplit[1];

              // chnage the - blank to Present
              function charFunc(char) {

                var lastChar = char.substr(char.length - 1);
                if (lastChar == "-") {
                  var addPres = char.concat("Present");
                  char = addPres;
                } else {
                  char
                }
                return char;
              }
              charFunc(char);
              console.log(dImgStringLen);

              console.log("dImgTitle");
              console.log(dImgTitle);
              var dImg = 'https://s3-ap-southeast-2.amazonaws.com/awm-media/collection/' + dImgCollect + '/screen/' + dImgId + '.JPG';
              console.log("dImg");
              console.log(dImg);
              console.log("dImgDate");
              console.log(dImgDate);
              dImgYearsArray.push("" + charFunc(char) + "");
              dImgTitleArray.push("" + dImgTitle + "");
              dImgArray.push("" + dImg + "");
              dImgDateArray.push("" + dImgDate + "");
              dImgDesArray.push("" + dImgDes + "");
              console.log("dImgYearsArray");
              console.log(dImgYearsArray);
              var dYears = dImgYearsArray.sort().reverse();
              console.log("dYears");
          console.log($(dYears).length);
          var dYearsLength = $(dYears).length;
              dY = [...new Set(dYears)];
              console.log("dY" + dY);

              function pDates(dY, dYearsLength, dImgTitleArray, dImgArray, dImgDateArray, dImgDesArray,search) {
                  // alert('hered');
                var search = $("#searchInput").val();
              if (search == ''){
                locationIp(ipD);
                // alert(ipD);
                search = ipD;
                // alert('here');
              }else{
                // alert('else');
                  search = $("#searchInput").val();
                  // alert(search);
              }
                $('.popDates').html('<h4 class="popDates title-h4">Popular dates for location: "' + search + '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="divider"></div><div class="content"><div class="row"></div></div>');
                var dateLength = dY.length;
                $('#dates').append("<div class='row'><div id='tabs' class='row'></div></div>");
                for (var i = 0; i < dateLength; i++) {
                $('#dates>.row>.row').append('<div value=' + [i] + ' id="dDown-' + [i] + '" class="tablinks dDown sMax waves-effect light-blue darken-4 btn-large">' + dY[i] + '</div>').hide().fadeIn(100);
                console.log("dYearsLength");
              console.log(dYearsLength);
//
// for (var o = 0; o < dYearsLength; o++) {
//
  $('.content>.row').append('<div id="active-'+[i]+'" class="col m12 l6 tabcontent dDownContent-'+[i]+'"><h5 class="title-h5 dDownImg center-align">' + dImgTitleArray[i] + '</h5><img class="dDownImg" src="' + dImgArray[i] + '" alt="' + dImgTitleArray[i] + '""><h5 class="date-made">Description</br></h5><h6 class="made desc">"'+dImgDesArray[i]+'"</h6><h6 class="waves-effect light-blue accent-4 btn" id="read-more">Read more</h6><h5 class="date-made">Date Made</br></h5><h6 class="made">' + dImgDateArray[i] + '</h6></div>');
//
                // }
              }
              }
              pDates(dY, dYearsLength, dImgTitleArray, dImgArray, dImgDateArray, dImgDesArray);

              cclick();

            }
          }
          // pDatesNma(nY, search);
        }else{
          $('.sYear').html("");
          if (date == null){
            date = '';
          }
          $('.popDates').html('<h4 class="popDates">No results for: "' + search +' '+ date+ '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="content"></div>')
    $('.sDate').html("");
        }

        }).catch(error => console.error(error));


      }
    }
// below was the attempt to use NMA api
    function pDatesNma(nY, search) {
      setTimeout( function() {
              var date = $('#searchDate').val();
              var search = $('#searchInput').val();
              var nmaKey = 'GLmHbFQn9N3i797zq9tpOd6JkulDUBcK';
              var nmaUrl;
           var nmaImgArray = [];
           var nmaIssuedArray = [];
              if (search == '') {
              search = locationIp(ipD);
                   nmaUrl = 'https://data.nma.gov.au/object?limit=5&text='+search+'&apikey='+nmaKey+'';
              }else{
              search = $('#searchInput').val();
              date = $('#searchDate').val();
               nmaUrl = 'https://data.nma.gov.au/object?limit=5&text='+search+'&text="'+date+'"&apikey='+nmaKey+'';
              }



                        console.log("nmaUrl");
                                          console.log(nmaUrl);
                        $.get(nmaUrl, function(nmaData){
                console.log("nmaData");
                console.log(nmaData);


                          console.log(nmaData.data[0]);
                        var nmaLength = nmaData.data.length;
                          console.log("nmaLength");
                        console.log(nmaLength);
                                  for (var i = 0; i < nmaLength; i++) {

                        if (nmaData.data[i].id == true || nmaData.data[i].id != null){
                          console.log("issued");
                console.log(nmaData.data[i]._meta.issued);
                var nmaIssued = nmaData.data[i]._meta.issued;
                var nmaIssuedString = nmaIssued.slice(0, 4);
                console.log(nmaIssuedString);

      nmaIssuedArray.push(nmaIssuedString);
                // console.log(dImgYearsArray);
                var nmaYears = nmaIssuedArray.sort();
                console.log("nmaYears");
                console.log($(nmaYears).length);
                var nmaYearsLength = $(nmaYears).length;
                var nY = [...new Set(nmaYears)];
                console.log("nY");
                console.log(nY);




                        nmaImgUrl = 'https://data.nma.gov.au/media/'+nmaData.data[i].id+'&apikey='+nmaKey+'';
                        console.log("nmaImgUrl");
                        console.log(nmaImgUrl);

                            $.get(nmaImgUrl, function (nmaDataDate) {
                              console.log("datanma");
                           console.log(nmaDataDate);

                           var nmaImg = nmaDataDate.data[0].hasVersion[1].identifier;
                           nmaImgArray.push("" + nmaImg + "");
                           console.log("nmaImgArray");
                           console.log(nmaImgArray.length);
      for (var i = 0; i < nmaImgArray.length; i++){
                           $('.content>.row').append('<div id="active-'+[i]+'" class="col m12 l6 tabcontent dDownContent-'+[i]+'"><h5 class="title-h5 dDownImg center-align">' + [i] + '</h5><img class="dDownImg" src="' + nmaImgArray[i]+ '" alt="' + [i] + '""><h5 class="date-made">Description</br></h5><h6 class="made desc">"'+[i]+'"</h6><h6 class="waves-effect light-blue accent-4 btn" id="read-more">Read more</h6><h5 class="date-made">Date Made</br></h5><h6 class="made">' + [i] + '</h6></div>');
      }

      // $('#dates').append("<div class='row'><div id='tabs' class='row'></div></div>");
      var nYLength = nY.length;
        console.log("nYLength");
          console.log(nYLength);
      for (var q = 0; q < nYLength; q++) {
      $('#dates>.row>.row').append('<div value="nma-' + [q] + '" id="dDown-' + [q] + '" class="tablinks dDown sMax waves-effect light-blue darken-4 btn-large">' + nY[q] + '</div>').hide().fadeIn(100);
    //   console.log("dYearsLength");
    // console.log(dYearsLength);
//
// for (var o = 0; o < dYearsLength; o++) {
//
// $('.content>.row').append('<div id="active-'+[i]+'" class="col m12 l6 tabcontent dDownContent-'+[i]+'"><h5 class="title-h5 dDownImg center-align">' + dImgTitleArray[i] + '</h5><img class="dDownImg" src="' + dImgArray[i] + '" alt="' + dImgTitleArray[i] + '""><h5 class="date-made">Description</br></h5><h6 class="made desc">"'+dImgDesArray[i]+'"</h6><h6 class="waves-effect light-blue accent-4 btn" id="read-more">Read more</h6><h5 class="date-made">Date Made</br></h5><h6 class="made">' + dImgDateArray[i] + '</h6></div>');
//
      // }
    }
                      }).fail(function(){
                        // alert('here');
                      });
                    }

                        }

                        //   for (var a = 0; a < 5; a++) {
                        //   $('#dates>.row>.row').append('<div value=' + [a] + ' id="dDown-' + [a] + '" class="tablinks dDown sMax waves-effect light-blue darken-4 btn-large">' + nY[a] + '</div>').hide().fadeIn(100);
                        //
                        // }

                  });


      }, 550);
        // alert('hered');
    //   var search = $("#searchInput").val();
    // if (search == ''){
    //   locationIp(ipD);
    //   // alert(ipD);
    //   search = ipD;
    //   // alert('here');
    // }else{
    //   // alert('else');
    //     search = $("#searchInput").val();
    //     // alert(search);
    // }
      // $('.popDates').html('<h4 class="popDates title-h4">Popular dates for location: "' + search + '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="divider"></div><div class="content"><div class="row"></div></div>');


    }
});

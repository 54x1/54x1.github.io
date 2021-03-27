$(document).ready(function() {

  var search = locationIp(ipD);
  var date;
  var dY;
  var input = $("#searchInput");
  var inputD = $("#searchDate");
  var ipD;
  $('.popDates').toggleClass('loaded');


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
  ipD = 'Canberra';
  });

  return ipD;
  }
  locationIp(ipD);

  $("#search>.material-icons").click(function() {
    funcSearch(input, inputD, date, dY);

  });

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
// // var search = '
// alert('here');
      aWarMem(search, date, dY);
    } else {
      var search = $(input).val();
      aWarMem(search, date, dY);

}

      function cclick() {
        // https://stackoverflow.com/questions/11645081/how-to-build-simple-tabs-with-jquery
        // start addclass inactive
        $('#tabs .dDown').addClass('inactive');
        // close tab content when click on x
        // $('.exit').click(function() {
        //   $('.dDownContent').hide();
        // });

        $('.dDown').click(function() {
          var val = $(this).attr('value');
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
          // when this tab click has class inactive remove it and fade in tab content

        });
      }


      function aWarMem(search, date, dY) {

var date = $('#searchDate').val();
var search = $('#searchInput').val();
if (search == '') {
search = 'Canberra';
date = '';
}else{
search = $('#searchInput').val();
}

      var nmaKey = 'GLmHbFQn9N3i797zq9tpOd6JkulDUBcK';
          var nmaUrl = 'https://data.nma.gov.au/media?text='+search+'&text="'+date+'"&apikey='+nmaKey+'';
          console.log(nmaUrl);
          $.get(nmaUrl, function(data){
  console.log("data.data.id");
  console.log(data);
            console.log(data.data[0]);
          var nmaLength = data.data.length;
            console.log("nmaLength");
          console.log(nmaLength);
                    for (var i = 0; i < nmaLength; i++) {
          if (data.data[i].id == true || data.data[i].id != null){


          nmaImgUrl = 'https://data.nma.gov.au/media/'+data.data[i].id+'&apikey='+nmaKey+'';
          console.log("nmaImgUrl");
          console.log(nmaImgUrl);
              $.get(nmaImgUrl, function (nmaData) {
                console.log("datanma");
             console.log(nmaData);
             console.log(nmaData.data[0].hasVersion[0].identifier)
        }).fail(function(){
          alert('here');
        });
      }
          }

    });

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
              // var dImgTitle = data.response.docs[i].title;
              var dImgYears = data.response.docs[i].conflict_search;
              var dImgDate = data.response.docs[i].date_made;


              console.log("dImgDate");
              console.log(dImgDate);
              console.log("dImgYears" + dImgYears);
              console.log("dImgYears");
              console.log(dImgYears.length);
              var dImgStringLen = dImgYears.length;
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


              var dImg = 'https://s3-ap-southeast-2.amazonaws.com/awm-media/collection/' + dImgCollect + '/screen/' + dImgId + '.JPG';
              console.log("dImg");
              console.log(dImg);

              dImgYearsArray.push("" + charFunc(char) + "");
              dImgTitleArray.push("" + dImgTitle + "");
              dImgArray.push("" + dImg + "");
              dImgDateArray.push("" + dImgDate + "");
              console.log("dImgYearsArray");
              console.log(dImgYearsArray);
              var dYears = dImgYearsArray.sort().reverse();
              console.log("dYears");
          console.log($(dYears).length);
          var dYearsLength = $(dYears).length;
              dY = [...new Set(dYears)];
              console.log("dY" + dY);

              function pDates(dY, dYearsLength, dImgTitleArray, dImgArray, dImgDateArray, search) {
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
                $('.popDates').html('<h4 class="popDates">Popular dates for location: "' + search + '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="divider"></div><div class="content"><div class="row"></div></div>');
                var dateLength = dY.length;
                $('#dates').append("<div class='row'><div id='tabs' class='row'></div></div>");
                for (var i = 0; i < dateLength; i++) {
                $('#dates>.row>.row').append('<div value=' + [i] + ' id="dDown-' + [i] + '" class="tablinks dDown sMax waves-effect light-blue darken-4 btn-large">' + dY[i] + '</div>').hide().fadeIn(100);
                console.log("dYearsLength");
              console.log(dYearsLength);
//
// for (var o = 0; o < dYearsLength; o++) {
//
  $('.content>.row').append('<div id="active-'+[i]+'" class="col s12 m6 tabcontent dDownContent-'+[i]+'"><h5 class="center-align">' + dImgTitleArray[i] + '</h5><img class="dDownImg" src="' + dImgArray[i] + '" alt=' + dImgTitleArray[i] + '><h6>Date Made: ' + dImgDateArray[i] + '</h6></div>');
//
                // }
              }
              }
              pDates(dY, dYearsLength, dImgTitleArray, dImgArray, dImgDateArray)
              cclick();

            }
          }
        }else{
          $('.sYear').html("");
          $('.popDates').html('<h4 class="popDates">No results for: "' + search + '"</h4><div class="divider"></div><div class="section" id="dates"></div><div class="divider"></div><div class="content"></div>')
    $('.sDate').html("");
        }
        }).catch(error => console.error(error));
      }
    }




  // https://commons.m.wikimedia.org/wiki/File:Australia_States_Map_-_Colours_with_White_Borders.svg
  // opencagedata version
  // function getLocationName(latLongCod) {
  //
  //     var apiKey = 'a631a0342e234bbf9b71c66189029ccc';
  //     var geocodeUrl = 'http://api.opencagedata.com/geocode/v1/json?q=' + latLongCod + '&key=' + apiKey;
  //
  //     $.get(geocodeUrl, function (locationData) {
  //
  //         console.log(locationData.results[0]);
  //
  //         var locData = locationData.results[0].components;
  // if (locData.territory == null){
  //         console.log('here');
  //         $.get("http://ipinfo.io", function (response) {
  //           $(".location").html(response.city + ", " + response.region);;
  //       }, "jsonp");
  //       }else{
  //           var locString = locData.suburb + ", " + locData.territory;
  //                   var location = locString;
  //                   //add to body
  //                   $(".location").html(location);
  //
  //       }
  //
  //     });
  //
  // };
});

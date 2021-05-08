// mid way through my product aniem database got an update to v4 which made searching for everything way easier v3.4
// bug with searching prev data
$(document).ready(function() {

    //https://venturo.org/
    // week 10
    //AniDistro is a company partnered with all major anime streaming platform which allows the control of quality in downloads.
    // trust and reliable | address emotional issues | list what im designing for | why do they want anidistro


    var customSeasons = ['winter', 'spring', 'summer', 'fall'];
    var winter = [1, 2, 3];
    var spring = [4, 5, 6];
    var summer = [7, 8, 9];
    var fall = [10, 11, 12];
    var customMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    function funcGenres(getAnimeGenresData) {

        var genreBtnMobile = $(".genres-mobile");
        console.log(getAnimeGenresData);
        for (var i = 0; i < $(getAnimeGenresData.data).length; i++) {
            $(genreBtnMobile).append("<option id=" + getAnimeGenresData.data[i].mal_id + " value=" + getAnimeGenresData.data[i].mal_id + " class='button'>" + getAnimeGenresData.data[i].name + "</option>");
        }

    }
    // load genres
    function getAnimeGenres() {
        var getAnimeGenresUrl = "https://api.jikan.moe/v4/genres/anime";
        $.getJSON(getAnimeGenresUrl, function(getAnimeGenresData) {
            console.log(getAnimeGenresData);
            funcGenres(getAnimeGenresData);
            var genreBtn = $(".genres");
            var genreBtnMobile = $(".genres-mobile");
            var genresArray = [];
            var genresIdArray;
            console.log(genresArray);
            for (var i = 0; i < $(getAnimeGenresData.data).length; i++) {
                var genreBtnContent = "<button id=" + getAnimeGenresData.data[i].mal_id + " value=" + getAnimeGenresData.data[i].mal_id + " class='button'>" + getAnimeGenresData.data[i].name + "</button>";
                // var genreBtnMobileContnet = "<option value="+getAnimeGenresData.data[i].mal_id+" class='button'>"+getAnimeGenresData.data[i].name+"</option>"
                genresArray.push(getAnimeGenresData.data[i].name);

                $(genreBtn).append(genreBtnContent);
                // $(genreBtnMobile).append(genreBtnMobileContnet);
            }
        });

    }
    getAnimeGenres();
    // var genres = ['Action', 'Adventure', 'Cars', 'Comedy', 'Dementia', 'Demons', 'Mystery', 'Drama', 'Ecchi', 'Fantasy', 'Game', 'Hentai', 'Historical', 'Horror', 'Kids', 'Magic', 'Martial Arts', 'Mecha', 'Music', 'Parody', 'Samurai', 'Romance', 'School', 'Sci Fi', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Space', 'Sports', 'Super Power', 'Vampire', 'Yaoi', 'Yuri', 'Harem', 'Slice Of Life', 'Supernatural', 'Military', 'Police', 'Psychological', 'Thriller', 'Seinen', 'Josei'];


    $('.genres-mobile option').each(function() {
        if ($(this).is(':selected')) {
            var genreVal2 = $(this).val();
            searchGenres(genreVal2);
        }
    });

    $('.genres-mobile').click(function() {
        var genreVal2 = $(this).val();
        searchGenres(genreVal2);

    });


    $(document).on('click', '.genres .button', function() {
        $(".loading").show();
        $(this).each(function() {
            var genreVal = $(this).val();
            if (genreVal == 12 | genreVal == 33 | genreVal == 34) {
                $(".content-anime").html("<h2 class='center-align'>Items Not Found</h2>");
            } else {

                var genreVal = $(this).val();
                // alert(genreVal);
                searchGenres(genreVal);
            }
            // $('#'+genreVal+'').css({"background-color": "#fff", "color" : "#a38d65", "border-color" : "#a38d65"});
            // alert(genreVal);


        });

    });




    function searchGenres(genreVal, page) {


        var page = 1;
        // alert(page);
        // https://api.jikan.moe/v4/anime?genres=1&page=2
        // var searchGenreUrl = "https://api.jikan.moe/v4/anime?genres=" + genreVal + "&page=" + page + "&limit=31";
        var searchGenreUrl = "https://api.jikan.moe/v4/anime?genres=" + genreVal + "&limit=31";
        //
        $.getJSON(searchGenreUrl, function(searchGenreData) {
            console.log("searchGenreData");
            console.log(searchGenreUrl);
              console.log(searchGenreData);
            var getAnimeGenresUrl = "https://api.jikan.moe/v4/genres/anime";
            $.getJSON(getAnimeGenresUrl, function(getAnimeGenresData) {
                console.log("getAnimeGenresData");
                console.log(getAnimeGenresData);

                var contentAnime = $(".content-anime");
                // for (var i = 0; i < $(getAnimeGenresData.data).length; i++){
                $(contentAnime).html("<h2 class='center-align'>" + getAnimeGenresData.data[--genreVal].name + "</h2>");
                // }

                for (var i = 0; i < $(searchGenreData.data).length; i++) {
                  if (searchGenreData.data[i].title_english != null) {
                      var searchAnimeName = searchGenreData.data[i].title_english;
                  } else {
                      var searchAnimeName = searchGenreData.data[i].title;
                      // alert(searchAnimeName);
                  }
                    $(contentAnime).append('<div class="col s12 m6 l4 xl3 animeImgWrapper"><div value="' + searchGenreData.data[i].mal_id + '" class="title">' + searchAnimeName + '</div><img class="animeImg" src=' + searchGenreData.data[i].images.jpg.large_image_url + ' value="' + searchGenreData.data[i].mal_id + '" alt="' + searchAnimeName + '"></div>');

                }

            });
        });
    }


    $(document).on('click', '.animeImgWrapper-season', function() {

    });


    // https://stackoverflow.com/questions/9827095/is-it-possible-to-use-jquery-on-and-hover
    $(document).on({
        mouseenter: function() {
            $(this).parent().find('.title').css({
                "opacity": "1"
            });
            // alert("hoevr");
            $(this).css({
                "box-shadow": "0 1px 3px #000",
                "cursor": "pointer",
                "filter": "blur(0.75px) brightness(0.65)"
            });

        },
        mouseleave: function() {
            $(this).parent().children('.title').css({
                "opacity": "0"
            });
            $(this).css({
                "box-shadow": "none",
                "cursor": "pointer",
                "filter": "none"
            });

        }
    }, ".animeImg");
    $(document).on({
        mouseenter: function() {
            $(this).parent().find('.animeImg').css({
                "box-shadow": "0 1px 3px #000",
                "cursor": "pointer",
                "filter": "blur(0.75px) brightness(0.65)"
            });
            $(this).css({
                "opacity": "1"
            });
        },
        mouseleave: function() {
            $(this).parent().find('.animeImg').css({
                "box-shadow": "none",
                "cursor": "pointer",
                "filter": "none"
            });
            $(this).css({
                "opacity": "0"
            });
        }
    }, ".title");




    $(document).on('click', '.animeImg, .title, .modal-related .button', function() {

      $('.modal-content').empty();
        $(".loading").show();
        $(this).each(function() {
            $('.overlay-modal').addClass("modal-overlay");
            $(".modal, .modal-content").fadeIn();
            // get myanimelist id
            var searchAnimeId = $(this).attr("value");
            var relatedTitle = $(this).text();
            console.log("searchAnimeId");
            console.log(searchAnimeId);


            var searchProviderAUId = 'https://api.jikan.moe/v4/anime/' + searchAnimeId + '';
            $.getJSON(searchProviderAUId, function(searchProviderAUIdData) {
                $(".loading").fadeOut(250);

                console.log("searchProviderAUIdData1");
                console.log(searchProviderAUIdData);
                // get english name


                if (searchProviderAUIdData.data.title_english != null) {
                    var searchAnimeName = searchProviderAUIdData.data.title_english;
                } else {
                    var searchAnimeName = searchProviderAUIdData.data.title;
                }
                var searchAnimeImg = searchProviderAUIdData.data.images.jpg.large_image_url;
                var searchAnimeSynopsis = searchProviderAUIdData.data.synopsis;
                var searchAnimeEpisodes = searchProviderAUIdData.data.episodes;
                var searchAnimeScore = searchProviderAUIdData.data.score;
                var searchAnimeScoredBy = searchProviderAUIdData.data.scored_by;

                if (searchProviderAUIdData.data.season != null) {
                    var searchAnimeAiredSeasonCom = ', ';
                    var searchAnimeAiredSeason = searchProviderAUIdData.data.season;
                } else {
                    var searchAnimeAiredSeasonCom = ', ';
                    var searchAnimeAiredMonth = searchProviderAUIdData.data.aired.prop.from.month;
                    console.log(searchAnimeAiredMonth);
                    // var searchAnimeAiredMonth = 'true';
                    console.log(fall.includes(searchAnimeAiredMonth));
                    switch (true) {
                        case (winter.includes(searchAnimeAiredMonth)):
                            console.log('winter');
                            var searchAnimeAiredSeason = 'winter';
                            break;
                        case (spring.includes(searchAnimeAiredMonth)):
                            console.log('spring');
                            var searchAnimeAiredSeason = 'spring';
                            break;
                        case (summer.includes(searchAnimeAiredMonth)):
                            console.log('summer');
                            var searchAnimeAiredSeason = 'summer';
                            break;
                        case (fall.includes(searchAnimeAiredMonth)):
                            console.log('fall');
                            var searchAnimeAiredSeason = 'fall';
                            break;
                        default:
                            console.log('winter');
                            var searchAnimeAiredSeason = 'Fall';

                    }
                }
                var searchAnimeAiredYear = searchProviderAUIdData.data.aired.prop.from.year;
                var searchAnimeType = searchProviderAUIdData.data.type;



                // searchSeasonFunc2(searchAnimeAiredYear, searchAnimeAiredSeason);
                // searchSeasonFunc(searchAnimeAiredYear, searchAnimeAiredSeason);
                if (searchProviderAUIdData.data.trailer.embed_url != null) {
                    var searchAnimeTrailer = searchProviderAUIdData.data.trailer.embed_url;
                } else {
                    var searchAnimeTrailer = 'none';
                }
                var searchAnimeProducers = [];
                var searchAnimeProducersId = [];
                var searchAnimeLicensors = [];
                var searchAnimeLicensorsId = [];
                var searchAnimeGenres = [];
                var searchAnimeGenresId = [];
                var searchAnimeStudios = [];
                var searchAnimeStudiosId = [];
                var searchAnimeRelations = [];
                var searchAnimeRelationsId = [];
                var searchRelationsDataEntry = [];

                for (var p = 0; p < $(searchProviderAUIdData.data.genres).length; p++) {
                    searchAnimeGenres.push(searchProviderAUIdData.data.genres[p].name);
                }
                for (var s = 0; s < $(searchAnimeGenres).length; s++) {
                    searchAnimeGenresId.push(searchProviderAUIdData.data.genres[s].mal_id);
                }
                for (var i = 0; i < $(searchProviderAUIdData.data.producers).length; i++) {

                    searchAnimeProducers.push(searchProviderAUIdData.data.producers[i].name);
                    searchAnimeProducersId.push(searchProviderAUIdData.data.producers[i].mal_id);
                }
                for (var o = 0; o < $(searchProviderAUIdData.data.licensors).length; o++) {
                    searchAnimeLicensors.push(searchProviderAUIdData.data.licensors[o].name);
                    searchAnimeLicensorsId.push(searchProviderAUIdData.data.licensors[o].mal_id);
                }
                for (var a = 0; a < $(searchProviderAUIdData.data.studios).length; a++) {
                    searchAnimeStudios.push(searchProviderAUIdData.data.studios[a].name);
                    searchAnimeStudiosId.push(searchProviderAUIdData.data.studios[a].mal_id);
                }
                // search where to stream database with english name
                // searchSeasonFunc(searchAnimeAiredYear, searchAnimeAiredSeason);





                        var searchProviderAUId2 = 'https://streamdata.malupdaterosx.moe/lookup/au/' + searchAnimeId + '';
                $.getJSON(searchProviderAUId2, function(searchProviderAUId2Data) {



                    $(document).on('click', '.premiered', function() {

                        $(".content-anime").empty();
                    });
                }).always(function(searchProviderAUId2Data) {
                  var searchRelations = "https://api.jikan.moe/v4/anime/" + searchAnimeId + "/relations";
          $.getJSON(searchRelations, function(searchRelationsData) {

            console.log("searchRelationsData");
            console.log(searchRelationsData);
          // get data length
         // loop data
        // for each data entry get length
        console.log("searchRelationsDataEntry");
        console.log(searchRelationsDataEntry);
          for (var i = 0; i < $(searchRelationsData.data).length; i++){
           searchRelationsDataEntry.push(searchRelationsData.data[i].entry.length);
         }
        for (var o = 0; o < $(searchRelationsDataEntry).length; o++){
          for (var p = 0; p < searchRelationsDataEntry[o]; p++){
        if (searchRelationsData.data[o].entry[p].type == 'anime'){
          console.log(searchRelationsData.data[o].entry[p].mal_id);
          console.log(searchRelationsData.data[o].entry[p].name);
            $('.modal-related').append("<button class='button' value='"+ searchRelationsData.data[o].entry[p].mal_id+ "'>" + searchRelationsData.data[o].entry[p].name + "</button>");
        }
        }
        }


          }).always(function(searchRelationsData) {


             if (searchAnimeRelations !== 'undefined' && searchAnimeRelations < 0 ){
                searchAnimeRelations.push(searchAnimeName);
                searchAnimeRelationsId.push(searchAnimeId);
              }
          });
                    aniContent(searchAnimeName, searchAnimeRelations, searchAnimeRelationsId, searchRelationsDataEntry, searchProviderAUId2Data, searchAnimeImg, searchAnimeSynopsis, searchAnimeEpisodes, searchAnimeScore, searchAnimeScoredBy, searchAnimeAiredSeason, searchAnimeAiredYear, searchAnimeType, searchAnimeTrailer, searchAnimeStudios, searchAnimeStudiosId, searchAnimeProducers, searchAnimeProducersId, searchAnimeLicensors, searchAnimeLicensorsId, searchAnimeAiredSeasonCom, searchAnimeGenres, searchAnimeGenresId);

                });


            });





        });

    });



    function aniContent(searchAnimeName, searchAnimeRelations, searchAnimeRelationsId, searchRelationsDataEntry, searchProviderAUId2Data, searchAnimeImg, searchAnimeSynopsis, searchAnimeEpisodes, searchAnimeScore, searchAnimeScoredBy, searchAnimeAiredSeason, searchAnimeAiredYear, searchAnimeType, searchAnimeTrailer, searchAnimeStudios, searchAnimeStudiosId, searchAnimeProducers, searchAnimeProducersId, searchAnimeLicensors, searchAnimeLicensorsId, searchAnimeAiredSeasonCom, searchAnimeGenres, searchAnimeGenresId) {

        $(document).on('click', '.premiered', function() {

            $(this).each(function() {
                var searchAnimeAiredYear = $(this).attr("year");
                var searchAnimeAiredSeason = $(this).attr("season");


                // getYear(searchAnimeAiredYear, searchAnimeAiredSeason);

                $(".content-anime").empty();
                // contentAnimeData(searchSeasonData, searchAnimeAiredSeason ,searchAnimeAiredYear);


                console.log("searchAnimeAiredSeasonbe4");
                console.log(searchAnimeAiredSeason);
                console.log("searchAnimeAiredYearbe4");
                console.log(searchAnimeAiredYear);
                var searchSeason = 'https://api.jikan.moe/v4/seasons/' + searchAnimeAiredYear + '/' + searchAnimeAiredSeason + '?limit=24&page=1';
                $.getJSON(searchSeason, function(searchSeasonData) {
                    console.log("searchSeasonData");
                    console.log(searchSeasonData);
                    console.log(searchAnimeAiredSeason);
                    console.log(searchAnimeAiredYear);
                    var contentAnime = $(".content-anime");
                    $(contentAnime).empty();
                    $(contentAnime).html("<h2 class='center-align'>" + searchAnimeAiredSeason + ", " + searchAnimeAiredYear + "</h2>");
                    for (var i = 0; i < $(searchSeasonData.data).length; i++) {
                        if (searchSeasonData.data[i].title_english != null) {
                            var searchAnimeName = searchSeasonData.data[i].title_english;
                        } else {
                            var searchAnimeName = searchSeasonData.data[i].title;
                            // alert(searchAnimeName);
                        }
                        $(contentAnime).append('<div class="col s12 m6 l4 xl3 animeImgWrapper-season"><div value="' + searchSeasonData.data[i].mal_id + '" class="title">' + searchAnimeName + '</div><img class="animeImg" src=' + searchSeasonData.data[i].images.jpg.large_image_url + ' value="' + searchSeasonData.data[i].mal_id + '"alt="' + searchSeasonData.data[i].title + '"></div>');

                    }
                    // contentAnimeData(searchSeasonData, searchAnimeAiredSeason, searchAnimeAiredYear);


                });
                // console.log(searchAnimeAiredYear);
                $('.modal').hide();
                $('.modal .container .row .modal-content').empty().hide();
                $('.modal-overlay').removeClass('modal-overlay');
            });
        });

        $(document).on('click', '.modal-producers .button, .modal-licensors .button, .modal-studios .button', function() {
            $(this).each(function() {
                var animeProducersId = $(this).attr("value");
                var animeProducersName = $(this).text();
                $(".content-anime").empty();
                var searchAanimeProducers = 'https://api.jikan.moe/v4/anime?producer=' + animeProducersId + '&limit=31';
                $.getJSON(searchAanimeProducers, function(searchAanimeProducersData) {
                    console.log("searchAanimeProducers");
                    console.log(searchAanimeProducers);
                    console.log(searchAanimeProducersData);

                    var contentAnime = $(".content-anime");
                    $(contentAnime).empty();
                    $(contentAnime).html("<h2 class='center-align'>" + animeProducersName + "</h2>");
                    for (var i = 0; i < $(searchAanimeProducersData.data).length; i++) {
                        if (searchAanimeProducersData.data[i].title_english != null) {
                            var searchAnimeName = searchAanimeProducersData.data[i].title_english;
                        } else {
                            var searchAnimeName = searchAanimeProducersData.data[i].title;
                        }
                        $(contentAnime).append('<div class="col s12 m6 l4 xl3 animeImgWrapper-producers"><div value="' + searchAanimeProducersData.data[i].mal_id + '" class="title">' + searchAnimeName + '</div><img class="animeImg" src=' + searchAanimeProducersData.data[i].images.jpg.large_image_url + ' value="' + searchAanimeProducersData.data[i].mal_id + '"alt="' + searchAanimeProducersData.data[i].title + '"></div>');

                    }
                    // contentAnimeData(searchSeasonData, searchAnimeAiredSeason, searchAnimeAiredYear);


                });
                // console.log(searchAnimeAiredYear);
                $('.modal').hide();
                $('.modal .container .row .modal-content').empty().hide();
                $('.modal-overlay').removeClass('modal-overlay');
            });
        });

        console.log("searchProviderAUId2Data3");
        console.log(searchAnimeName);
        var modalAnime = $(".modal .modal-content");
        $(modalAnime).append("<button class='modal-close button close-x'>x</button>");
        $(modalAnime).append("<h2 class='col s12 center-align'>" + searchAnimeName + "</h2>");


        $(modalAnime).append('<img class="col s12 xl6 modal-animeImg" src=' + searchAnimeImg + ' alt="' + searchAnimeName + '">');

        $(modalAnime).append('<div class="col s12 xl6 modal-synopsis"><h5>Synopsis</h5><p>' + searchAnimeSynopsis + '</p></div>');
        if (searchAnimeTrailer != 'none') {
            $('.modal-synopsis').after('<div class="col s12 xl6 modal-trailer"><h5>Trailer</h5><iframe allow="fullscreen;" width=100% height="600px" src=' + searchAnimeTrailer + '>' + searchAnimeTrailer + '</iframe></div>');
        }

        var modalAnimeContent = '<div class="info-primary"><div class="col s12 m6 xl2 modal-aired"><h5>Aired</h5><button year=' + searchAnimeAiredYear + ' season=' + searchAnimeAiredSeason + ' class="button premiered">' + searchAnimeAiredSeason + searchAnimeAiredSeasonCom + searchAnimeAiredYear + '</button></div><div class="col s12 m6 xl2 modal-watch"><h5>Watch</h5></div><div class="col s12 m6 xl2 modal-Type"><h5>Type</h5><button class="button" value=' + searchAnimeType + '>' + searchAnimeType + '</button></div><div class="col s12 m6 xl2 modal-episodes"><h5>Episodes</h5><button class="button" value=' + searchAnimeEpisodes + '>' + searchAnimeEpisodes + '</button></div><div class="col s12 m6 xl2 modal-score"><h5>Score</h5><button class="button">' + searchAnimeScore + '</button></div><div class="col s12 m6 xl2 modal-scoredBy"><h5>Scored By</h5><button class="button">' + searchAnimeScoredBy + '</button></div></div><div class="info"><div class="col s12 m6 xl4 modal-genres"><h5>Genres</h5></div><div class="col s12 xl8 modal-related"><h5>Related</h5></div></div><div class="info"><div class="col s12 m6 xl4 modal-licensors"><h5>Licensors</h5></div><div class="col s12 m6 xl4 modal-studios"><h5>Studios</h5></div><div class="col s12 m6 xl4 modal-producers"><h5>Producers</h5></div></div></div></div><button class="modal-close">Close</button>';
        $(modalAnime).append(modalAnimeContent);
        var modalWatch = $('.modal-watch');
        $(modalWatch).append(modalWatchContent);
        var modalWatchContent = modalWatch;
        console.log("searchProviderAUId2Data99");
        // console.log(searchProviderAUId2Data.data[0].sitename);
        // console.log(searchProviderAUId2Data.data[0].url);
        console.log(searchProviderAUId2Data);
        console.log($(searchProviderAUId2Data.data).length);
        if ($(searchProviderAUId2Data.data).length > 0) {
            for (var i = 0; i < $(searchProviderAUId2Data.data).length; i++) {
                $(modalWatchContent).append("<a class='button' target='_blank' href=" + searchProviderAUId2Data.data[i].url + ">" + searchProviderAUId2Data.data[i].sitename + "</a>");
            }
        } else {
            // alert('hwre');
            $(modalWatchContent).append("<button class='not-found button'>Not Found</button>");
        }
        var modalGenres = $('.modal-genres');
        $(modalGenres).append(modalGenresContent);
        var modalGenresContent = modalGenres;

        for (var a = 0; a < $(searchAnimeGenres).length; a++) {
            $(modalGenresContent).append("<button class='button' value=" + searchAnimeGenresId[a] + ">" + searchAnimeGenres[a] + "</button>");
        }


        var modalLicensors = $('.modal-licensors');
        $(modalLicensors).append(modalLicensorsContent);
        var modalLicensorsContent = modalLicensors;
        console.log("searchAnimeLicensors");
        console.log(searchAnimeStudiosId);
        if ($(searchAnimeLicensors).length > 0) {

            for (var o = 0; o < $(searchAnimeLicensors).length; o++) {
                $(modalLicensorsContent).append("<button class='button' value='" + searchAnimeLicensorsId[o] + "'>" + searchAnimeLicensors[o] + "</button>");
            }
        } else {
            $(modalLicensorsContent).append("<button class='not-found button'>Not Found</button>");
        }
        var modalProducers = $('.modal-producers');
        $(modalProducers).append(modalProducersContent);
        var modalProducersContent = modalProducers;
        if ($(searchAnimeProducers).length > 0) {
            for (var p = 0; p < $(searchAnimeProducers).length; p++) {
                $(modalProducersContent).append("<button class='button' value=" + searchAnimeProducersId[p] + ">" + searchAnimeProducers[p] + "</button>");
            }
        } else {
            $(modalProducersContent).append("<button class='not-found button'>Not Found</button>");
        }

        var modalStudios = $('.modal-studios');
        $(modalStudios).append(modalStudiosContent);
        var modalStudiosContent = modalStudios;
        if ($(searchAnimeStudios).length > 0) {
            for (var a = 0; a < $(searchAnimeStudios).length; a++) {
                $(modalStudiosContent).append("<button class='button' value=" + searchAnimeStudiosId[a] + ">" + searchAnimeStudios[a] + "</button>");
            }
        } else {
            $(modalStudiosContent).append("<button class='not-found button'>Not Found</button>");
        }

        // console.log(modalLicensorsContent);

        console.log("success open model of that anime2");

        // Animate loader off screen


    }

    $('.next').click(function() {
        var page = 20;
        page++;
        searchGenres(page);
    });

    $(document).on('click', '.modal-genres .button', function() {
        $(".loading").show();
        $('.content-anime').empty();
        var page = 1;
        var genreVal = $(this).attr("value");
        searchGenres(genreVal, page);

        // document.getElementById("30").focus();

        $('.modal').hide();
        $('.modal .container .row .modal-content').empty().hide();

        $('.modal-overlay').removeClass('modal-overlay');

    });

    $(document).on('click', '.header-logo', function() {
        location.reload();
    });



    $(document).on('click', '.close-x, .modal-close', function() {
        $(".modal").fadeOut(0);
        $(".modal-content").html("");
        $('.modal-overlay').removeClass('modal-overlay');
    });

    // nasty

});

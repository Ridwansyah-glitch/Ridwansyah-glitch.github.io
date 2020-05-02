//event
$('.page-scroll').on('click', function (e) {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap element
    var elementTujuan = $(tujuan);


    //pindahkan scroll
    $('html,body').animate({

        scrollTop: elementTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();


});

//about
$(window).on('load', function () {
    $('.pLeft').addClass('pShow');
    $('.pRight').addClass('pShow');
});


//parralax
$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.5 + '%)'
    });
    $('.jumbotron i').css({
        'transform': 'translate(0px,' + wScroll / 1 + '%)'
    });


    //portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {

        $('.portfolio .img-thumbnail').each(function (i) {

            setTimeout(function () {

                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');

            }, 100 * (i + 1));
        });

    } else if (wScroll < $('.portfolio').offset().top - 250) {

        $('.portfolio .img-thumbnail').each(function (i) {

            setTimeout(function () {

                $('.portfolio .img-thumbnail').eq(i).removeClass('muncul');

            }, 100 * (i + 1));
        });
    }


    //skills
    if (wScroll > $('.skills').offset().top - 250) {

        $('.skills').each(function (i) {

            setTimeout(function () {

                $('.skills').addClass('muncul');

            }, 100 * (i + 1));
        });

    } else if (wScroll < $('.skills').offset().top - 250) {

        $('.skills').each(function (i) {

            setTimeout(function () {

                $('.skills').eq(i).removeClass('muncul');

            }, 100 * (i + 1));
        });
    }

});
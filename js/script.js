$(document).ready(function(){
    // slider
    $('.scope_slider-inner').slick();
    $('.news_slider-inner').slick({
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 752,
                slidesToShow:1,
                centerMode:true
            } 
    ]
    });
    $('.specialists_slider-inner').slick({
        slidesToShow:3,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 752,
                settings: {
                    arrows: false,
                    centerMode:true,
                }
            },
            {
                breakpoint: 502,
                settings: {
                    slidesToShow:1,

                    arrows: false,
                }
            } 
    ]
    });
    $('.review_inner').slick({
        slidesToShow:1,
        infinite: true,
        variableWidth: true,
        dots:true,
        responsive: [
            {
                breakpoint: 752,
                settings: {
                    arrows: false,
                    slidesToShow:1,
                    centerMode:true,
                }
            },
            {
                breakpoint: 502,
                settings: {
                    slidesToShow:1,
                    centerMode:true,
                    arrows: false,
                }
            } 
    ]
    })
    $('.whatch_inner').slick({
        slidesToShow:1,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 752,
                settings: {
                    arrows: false,
                    slidesToShow:1,
                    centerMode:true,
                }
            },
            {
                breakpoint: 502,
                settings: {
                    slidesToShow:1,
                    centerMode:true,
                    arrows: false,
                }
            } 
    ]
    });
    // video-play
    $('#play-video').click(function(){
        $('video')[0].play();
        $('.presentation_video-item').css('display','none')
        $('video')[0].setAttribute('controls', '');
    })
    // mobile menu
    $('.header_burger').click(function(event){
        $('.header_burger,.header_mobile-menu').toggleClass('active');
    })
    // modal 1
    $('#modal-btn-on').click(function(){
        $('.fixed-overlay,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
	$('#modal-btn-on2').click(function(){
        $('.fixed-overlay,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
	$('.close,.modal-back').click(function(event){
        $('.fixed-overlay,.modal-back').removeClass('active');
		$('body').css("overflow", "auto")
    })
    // modal 2
    $('#popup-btn-on').click(function(){
        $('.popup,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
    $('#popup-btn-on2').click(function(){
        $('.popup,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
    $('#popup-btn-on3').click(function(){
        $('.popup,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
    $('#popup-btn-on4').click(function(){
        $('.popup,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
    $('#popup-btn-on5').click(function(){
        $('.popup,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
    $('#popup-btn-on6').click(function(){
        $('.popup,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
	$('.close,.modal-back').click(function(event){
        $('.popup,.modal-back').removeClass('active');
		$('body').css("overflow", "auto")
    })
    $("#phone").mask("8(999) 999-99-99");
    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 1000,
        from: 200,
    });
})
// map

let center = [56.005933, 92.841909];

    function init() {
    	let map = new ymaps.Map('map', {
    		center: center,
    		zoom: 17
    	}),
    	myPlacemark = new ymaps.Placemark(map.getCenter(), {
    		}, 
    		{

    		iconLayout: 'default#image',

    		iconImageHref: 'img/icon/map-icon.png',

    		iconImageSize: [200, 66],

    		iconImageOffset: [-25, -60]
            
    	});
    	map.controls.remove('geolocationControl'); // удаляем геолокацию
      	map.controls.remove('searchControl'); // удаляем поиск
      	map.controls.remove('trafficControl'); // удаляем контроль трафика
      	map.controls.remove('typeSelector'); // удаляем тип
      	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      	map.controls.remove('rulerControl'); // удаляем контрол правил
      	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    
    	map.geoObjects.add(myPlacemark)
    }
ymaps.ready(init);


function init2() {
    let center = [56.214222, 92.316026]
    let map2 = new ymaps.Map('map2', {
        center: center,
        zoom: 14
    }),
    myPlacemark = new ymaps.Placemark(map2.getCenter(), {
        }, 
        {

        iconLayout: 'default#image',

        iconImageHref: 'img/icon/map-icon2.png',

        iconImageSize: [200, 66],

        iconImageOffset: [-25, -60]
        
    });
      map2.controls.remove('geolocationControl'); // удаляем геолокацию
      map2.controls.remove('searchControl'); // удаляем поиск
      map2.controls.remove('trafficControl'); // удаляем контроль трафика
      map2.controls.remove('typeSelector'); // удаляем тип
      map2.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map2.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map2.controls.remove('rulerControl'); // удаляем контрол правил
      map2.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map2.geoObjects.add(myPlacemark)
}
ymaps.ready(init2);


// Хэдер при скролле
window.addEventListener('scroll', function(){
    let scrollPos = window.scrollY;

    if(scrollPos > 50){
        $('.header-scroll,.header_inner').addClass('header-show');
    }else{
        $('.header-scroll,.header_inner').removeClass('header-show');
    }
})

// gallery

$(document).ready(function() {
	$('.whatch_item,.licenses_items,.charity_items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});
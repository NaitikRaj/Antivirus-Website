includeHTML();

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};



 $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.top_row').addClass('fixed');
    } else {
        $('.top_row').removeClass('fixed');
    }
});

// img animation effect

$(function() {

    $(' .dial_us #da-thumbs > li ').each(function() { $(this).hoverdir(); });

});


//  TESTIMONIALS CAROUSEL HOOK

$('.tio-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: false,
    asNavFor: '.tio-bottom,.tio-caption'
});


$('.tio-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.tio-top,.tio-caption',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px'
});
$('.tio-caption').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.tio-top,.tio-bottom',
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    draggable: false,
    responsive: [{
        breakpoint: 1399,
        settings: {
            swipe: false,
        },
    }, ],
});



$("textarea").on("keyup", function() {
    if ($(this).val() != "" && $("textarea").val()) {
        $("button[type='submit']").removeAttr("disabled");
    } else {
        $("button[type='submit']").attr("disabled", "disabled");
    }
});


$('.plan').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1100: {
            items: 4
        }
    }
});
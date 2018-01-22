const servicesTextTab = $(".services__text");
let textChanged = false;
let imgChanged = false;

//show home text
setTimeout(() => {
   $(".home").toggleClass('show');
}, 1000);

//show nav--main
$(".nav--toggle").on("click", () => {
    $("body").toggleClass("show-nav-main");
    $(".nav--main").slideToggle();
});

// add nav-bar-scroll
let testNavBar = () => {
    let currentposition = $(document).scrollTop();
    if (currentposition > 0) {
        $(".nav-bar").addClass("nav-bar-scroll");
    } else {
        $(".nav-bar").removeClass("nav-bar-scroll");
    }
};

//scrollTo
$('a[href^="#"]').click((e) => {
    var hash = $(e.currentTarget).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top-110
        }, 1000);
        return false;
});

//add additional text for each services__text class
let addText = () => {
    let additionalText  = "labore et dolore magna aliqua. Ut ad minim veniam, quis";
    if($(window).width() <= 840 && textChanged === false){
        for(let i=0; i<(servicesTextTab.length); i++){
            let prevText = servicesTextTab.eq(i).text();
            if(i===1){
                servicesTextTab.eq(i).html(prevText + " ut adipisicing." + '<br>' + additionalText);
            } else {
                servicesTextTab.eq(i).html(prevText + '<br>' + additionalText);
            }
        }
        let newLinkText = $(".services__link a").eq(2).text().replace(" Now", "");
        $(".services__link a").eq(2).text(newLinkText);
        textChanged = true;
    } else if ($(window).width() > 840 && textChanged === true) {
        for(let i=0; i<(servicesTextTab.length); i++) {
            let actualText = servicesTextTab.eq(i).text();
            let newText;
            if(i===1) {
                newText = actualText.replace("ut adipisicing." + additionalText, "");
            } else {
                newText = actualText.replace(additionalText, "");
            }
            servicesTextTab.eq(i).text(newText);
        }
        $(".services__link a").eq(2).text($(".services__link a").eq(2).text() + " Now");
        textChanged = false;
    }
}

let changeImgPhone = () => {
    if($(window).width() <= 751 && imgChanged === false){
        $(".phone-icon").attr("src", "images/iPhone-mobile.png");
        imgChanged = true;
    } else if($(window).width() > 751 && imgChanged === true){
        $(".phone-icon").attr("src", "images/iPhone-desktop.png");
        imgChanged = false;
    }
}

$(document).ready(() => {
    'use strict';

    testNavBar();
    $(window).scroll(() => testNavBar());
    addText();
    $(window).resize(() => addText());
    changeImgPhone();
    $(window).resize(() => changeImgPhone());
});

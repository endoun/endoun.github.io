// NOTICE
$('#notice').append(
    '<div class="notice__overflay" onclick="noticeExit()"></div>' +
    '<div class="notice__info" id="noticeInfo">' +
        '<div class="notice__info--header">' +
            '<strong class="notice__header--img"></strong>' +
            '<i class="fas fa-times" onclick="noticeExit()"></i>' +
        '</div>' +
        '<div class="notice__para" id="noticePara">' +
            'Chụp màn hình sản phẩm mà bạn yêu thích và gửi về trang <span class="notice__para--span">Facebook</span> hoặc nhóm <span class="notice__para--span">Zalo</span> của Endoun tại phía dưới.<br /><br />Cảm ơn Quý khách đã thông cảm cho sự bất tiện này!<br />Đội ngũ chúng tôi sẽ luôn nỗ lực nâng cấp và phát triển hệ thống để đem lại trải nghiệm tốt nhất cho Khách hàng.<br /><br />Ghé thăm website thường xuyên để theo dõi sự trưởng thành từng ngày của <strong class="notice__para--endoun">ENDOUN</strong> nhé!<br /><br />Cảm ơn Quý khách!<br />Chúc Quý khách một ngày vui vẻ! <i class="notice__icon--last fas fa-heart"></i>' +
        '</div>' +
        '<div class="notice__sign" id="noticeSign">' +
            '<a class="notice__sign--link" href="https://www.facebook.com/endounshop" target="_blank">' +
                '<img class="notice__sign--img" src="../../../../../img/facebook.svg" alt="Facebook Endoun" />' +
            '</a>' +
            '<p class="notice__sign--contact"><< <strong class="notice__sign--item">BUY NOW</strong> >></p>' +
            '<a class="notice__sign--link" href="https://zalo.me/g/pkibkm795" target="_blank">' +
                '<img class="notice__sign--img" src="../../../../../img/zalo.svg" alt="Zalo Endoun" />' +
            '</a>' +
        '</div>' +
    '</div>'
);

// IMAGE
$('#image').append(
    '<div class="swiper mySwiper">' +
        '<div class="swiper-wrapper">' +
            '<div class="swiper-slide" id="proSlideOne">' +
                '<img id="imgOne" src="" alt="Endoun - Image Product 1" />' +
            '</div>' +
            '<div class="swiper-slide" id="proSlideTwo">' +
                '<img id="imgTwo" src="" alt="Endoun - Image Product 2" onerror="noneSlide2()" />' +
            '</div>' +
            '<div class="swiper-slide" id="proSlideThree">' +
                '<img id="imgThree" src="" alt="Endoun - Image Product 3" onerror="noneSlide3()" />' +
            '</div>' +
            '<div class="swiper-slide" id="proSlideFour">' +
                '<img id="imgFour" src="" alt="Endoun - Image Product 4" onerror="noneSlide4()" />' +
            '</div>' +
            '<div class="swiper-slide" id="proSlideFive">' +
                '<img id="imgFive" src="" alt="Endoun - Image Product 5" onerror="noneSlide5()" />' +
            '</div>' +
            '<div class="swiper-slide" id="proSlideSix">' +
                '<img id="imgSix" src="" alt="Endoun - Image Product 6" onerror="noneSlide6()" />' +
            '</div>' +
            '<script src="../../../../../js/none-slide.js"></script>' +
        '</div>' +
        '<div class="swiper-pagination"></div>' +
    '</div>' +
    '<div class="image__para">' +
        '<p class="image__para--welcome">Darkness begins to shine</p>' +
        '<p class="image__para--pro">Product&rsquo;s Image</p>' +
    '</div>'
);
$('#imgOne').attr('src', '../../../../../img/' + srcImage + '-1.jpg');
$('#imgTwo').attr('src', '../../../../../img/' + srcImage + '-2.jpg');
$('#imgThree').attr('src', '../../../../../img/' + srcImage + '-3.jpg');
$('#imgFour').attr('src', '../../../../../img/' + srcImage + '-4.jpg');
$('#imgFive').attr('src', '../../../../../img/' + srcImage + '-5.jpg');
$('#imgSix').attr('src', '../../../../../img/' + srcImage + '-6.jpg');
function noneSlide2() {
    $('#proSlideTwo').css('display', 'none');
    $('#proSlideThree').css('display', 'none');
    $('#proSlideFour').css('display', 'none');
    $('#proSlideFive').css('display', 'none');
    $('#proSlideSix').css('display', 'none');
}
function noneSlide3() {
    $('#proSlideThree').css('display', 'none');
    $('#proSlideFour').css('display', 'none');
    $('#proSlideFive').css('display', 'none');
    $('#proSlideSix').css('display', 'none');
}
function noneSlide4() {
    $('#proSlideFour').css('display', 'none');
    $('#proSlideFive').css('display', 'none');
    $('#proSlideSix').css('display', 'none');
}
function noneSlide5() {
    $('#proSlideFive').css('display', 'none');
    $('#proSlideSix').css('display', 'none');
}
function noneSlide6() {
    $('#proSlideSix').css('display', 'none');
}


// INFO
$('#info').append(
    '<h2 class="info__brand" id="proBrand"></h2>' +
    '<h1 class="info__name" id="proName"></h1>' +
    '<div class="info__space"></div>' +
    '<h3 class="info__sku" id="proSku"></h3>' +
    '<div class="info__space"></div>' +
    '<div class="info__price">' +
        '<div class="info__priceAll">' +
            '<h3><strong id="proPrice"></strong></h3>' +
            '<h3><strong id="proSalePer"></strong></h3>' +
        '</div>' +
        '<h3><strong id="proPriceSale"></strong></h3>' +
    '</div>' +
    '<div class="info__market">' +
        '<div class="info__market--time">' +
            '<h3 class="time--item time__text" id="info__text"></h3>' +
            '<div class="time--item time__clock">' +
                '<span class="time__clock--day" id="eventDay">07</span>&nbsp;days&nbsp;-&nbsp;' +
                '<span class="time__clock--hour" id="eventHour">23</span>&nbsp;:&nbsp;' +
                '<span class="time__clock--min" id="eventMin">59</span>&nbsp;:&nbsp;' +
                '<span class="time__clock--sec" id="eventSec">59</span>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="info__size">' +
        '<div class="info__size--para">' +
            '<span class="info__size--span">Size:</span>' +
            '<a class="info__size--link" href="../../../../../shoes/size-chart-shoes.html">Bảng size >>></a>' +
        '</div>' +
        '<form method="post" class="info__form" id="proFormSize"></form>' +
        '<div class="info__size--small">*Các size có thể chưa được cập nhật kịp thời. Liên hệ để biết chính xác số lượng size nhá!</div>' +
    '</div>' +
    '<div class="info__buy" onclick="clickBuy()">Buy Now</div>' +
    '<div class="plugin-save-like-share">' +
        '<div class="fb-save" id="fb-save" data-uri="https://endoun.github.io/' + randomFolder + sku + '.html" data-size="large"></div>' +
        '<div class="fb-like" id="fb-like" data-href="https://endoun.github.io/' + randomFolder + sku + '.html" data-layout="button_count" data-action="like" data-size="large" data-share="true"></div>' +
    '</div>'
);


// ADD
$('#add').append(
    '<div class="add__add">' +
        '<h2 class="add__add--title">Sản phẩm cùng hãng</h2>' +
        '<div class="add__line">' +
            '<div class="add__line--item"></div>' +
        '</div>' +
        '<div class="add__addAll">' +
            '<a class="add__add--pro" id="addLink1" href="">' +
                '<img class="add__pro--img" id="addImage1" src=""/>' +
                '<h1 class="add__pro--name" id="addName1"></h1>' +
            '</a>' +
            '<a class="add__add--pro" id="addLink2" href="">' +
                '<img class="add__pro--img" id="addImage2" src=""/>' +
                '<h1 class="add__pro--name" id="addName2"></h1>' +
            '</a>' +
            '<a class="add__add--pro" id="addLink3" href="">' +
                '<img class="add__pro--img" id="addImage3" src=""/>' +
                '<h1 class="add__pro--name" id="addName3"></h1>' +
            '</a>' +
        '</div>' +
    '</div>' +
    '<div class="add__prevnext">' +
        '<a class="add__prevnext--item add__prev" id="addLinkPrev" href="">< Trước</a>' +
        '<a class="add__prevnext--brand" id="addBrand" href=""></a>' +
        '<a class="add__prevnext--item add__next" id="addLinkNext" href="">Sau ></a>' +
    '</div>'
);

var videoIntroPara_VN = 'Về chúng tôi';
var videoIntroParaLang = videoIntroPara_VN;
// VIDEO
$('#video').append(
    '<div class="video__intro">' + videoIntroParaLang + '</div>' +
    '<iframe class="video__iframe" src="https://www.youtube.com/embed/kqOBpJo-plo/" title="ENDOUN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>' +
    '<div class="video__para">' +
        '<span class="video__para--endoun">ENDOUN</span> mang trong mình sứ mệnh đưa "sản phẩm Việt Nam - vươn tầm quốc tế".<br /><br />' +
        'Là thương hiệu mới được ra đời, dưới sự dẫn dắt của <a class="video__para--enderuyen" href="https://www.facebook.com/enderuyen">Ender Uyên</a>, chúng tôi luôn không ngừng học hỏi và cố gắng để hiện thực hoá ước mơ.<br />' +
        'Hãy dõi theo chúng tôi để thấy sự trưởng thành từng ngày của Endoun nhé!<br /><br />' +
        '<strong>ENDOUN - Darkness begins to shine!</strong>' +
    '</div>'
);


// IMAGE - Slide
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    speed: 250,
    longSwipes: true,
    longSwipesMs: 10000,
    longSwipesRatio: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
});


// INFO - Add name
$('#proBrand').append('۶ ' + proBrand + ' ۴');
$('#proName').append(proName);
$('#proSku').append(sku);
$('#addBrand').append(proBrand);
$('#addBrand').attr('href', '../../../../../' + addBrandLink + '.html');
$('.image__pro').attr('alt', addArrayName[addArraySku.indexOf(sku)]);


// INFO - Price
var proPriceAll = '';
var proPrice = Number(addArrayPrice[addArraySku.indexOf(sku)]);
switch (proPrice.toString().length) {
    case 4: {
        proPriceAll = proPrice.toString().slice(0,1) + '.' + proPrice.toString().slice(1, proPrice.toString().length);
        break;
    }
    case 5: {
        proPriceAll = proPrice.toString().slice(0,2) + '.' + proPrice.toString().slice(2, proPrice.toString().length);
        break;
    }
    case 6: {
        proPriceAll = proPrice.toString().slice(0,3) + '.' + proPrice.toString().slice(3, proPrice.toString().length);
        break;
    }
    case 7: {
        proPriceAll = proPrice.toString().slice(0,1) + '.' + proPrice.toString().slice(1,4) + '.' + proPrice.toString().slice(4, proPrice.toString().length);
        break;
    }
    case 8: {
        proPriceAll = proPrice.toString().slice(0,2) + '.' + proPrice.toString().slice(2,5) + '.' + proPrice.toString().slice(5, proPrice.toString().length);
        break;
    }
    case 9: {
        proPriceAll = proPrice.toString().slice(0,3) + '.' + proPrice.toString().slice(3,6) + '.' + proPrice.toString().slice(6, proPrice.toString().length);
        break;
    }
}
var proPriceSale = '';
var proPriceSaleAll = '';


// PROCESS PRICE
if (proSaleMoneyAll != 0) {
    proPriceSale = proPrice - proSaleMoneyAll;
    proSaleOff = proSaleMoneyAll.toString().slice(0,-3) + 'k';
}
else {
    if (proSalePerAll != 0) {
        proPriceSale = proPrice - proPrice * (proSalePerAll / 100);
        proSaleOff = proSalePerAll + '%';
    }
    else {
        if (proSaleMoney != 0) {
            proPriceSale = proPrice - proSaleMoney;
            proSaleOff = proSaleMoney.toString().slice(0, -3) + 'k';
        }
        else {
            if (proSalePer != 0) {
                proPriceSale = proPrice - proPrice * (proSalePer / 100);
                proSaleOff = proSalePer + '%';
            }
        }
    }
} 



switch (proPriceSale.toString().length) {
    case 4: {
        proPriceSaleAll = proPriceSale.toString().slice(0, 1) + '.' + proPriceSale.toString().slice(1, proPriceSale.toString().length);
        break;
    }
    case 5: {
        proPriceSaleAll = proPriceSale.toString().slice(0, 2) + '.' + proPriceSale.toString().slice(2, proPriceSale.toString().length);
        break;
    }
    case 6: {
        proPriceSaleAll = proPriceSale.toString().slice(0, 3) + '.' + proPriceSale.toString().slice(3, proPriceSale.toString().length);
        break;
    }
    case 7: {
        proPriceSaleAll = proPriceSale.toString().slice(0, 1) + '.' + proPriceSale.toString().slice(1, 4) + '.' + proPriceSale.toString().slice(4, proPriceSale.toString().length);
        break;
    }
    case 8: {
        proPriceSaleAll = proPriceSale.toString().slice(0, 2) + '.' + proPriceSale.toString().slice(2, 5) + '.' + proPriceSale.toString().slice(5, proPriceSale.toString().length);
        break;
    }
    case 9: {
        proPriceSaleAll = proPriceSale.toString().slice(0, 3) + '.' + proPriceSale.toString().slice(3, 6) + '.' + proPriceSale.toString().slice(6, proPriceSale.toString().length);
        break;
    }
}


if ((proSaleMoneyAll != 0) || (proSalePerAll != 0) || (proSaleMoney != 0) || (proSalePer != 0)) {
    $('.info__priceAll').css({
        'display': 'flex'
    });
    document.getElementById('proPriceSale').innerHTML = proPriceSaleAll + 'đ';
    document.getElementById('proSalePer').innerHTML = '<strong class="proSalePer--item">Sale off</strong>&nbsp–' + proSaleOff;
    document.getElementById('proPrice').innerHTML = '&nbsp;' + proPriceAll + 'đ&nbsp;';

} else {
    if ($(window).width() >= 768) {
        if (($(window).width() / $(window).height()) >= 1) {
            $('.info__price').css({
                'width': '60%'
            });
        } else {
            $('.info__price').css({
                'width': '75%'
            });
        }
    } else {
        $('.info__price').css({
            'width': '75%'
        });
    }
    $('.info__priceAll').css({
        'display': 'none'
    });
    $('#proPriceSale').append('&nbsp;' + proPriceAll + 'đ&nbsp;');
}

// INFO - Size
for (let i = 0; i < arraySize.length; ++i) {
    $('#proFormSize').append('<div class="info__form--item"><input type="radio" name="ProSize" class="info__form--input" id="formSizeInput' + arraySize[i] + '"/><label for="formSizeInput' + arraySize[i] + '" class="info__form--number">' + arraySize[i] + '</label></div>');
}


// ADD
var addLinkPrev = '';
var addLinkNext = '';
switch (sku) { 
    case addArraySku[1]: {
        addLinkPrev = addArraySku[1];
        addLinkNext = addArraySku[2];
        break;
    }
    case addArraySku[addArraySku.length - 1]: {
        addLinkPrev = addArraySku[addArraySku.length - 1];
        addLinkNext = addArraySku[addArraySku.length - 2];
        break;
    }
    default: {
        addLinkPrev = addArraySku[addArraySku.indexOf(sku) - 1];
        addLinkNext = addArraySku[addArraySku.indexOf(sku) + 1];
    }
}
$('#addLinkPrev').attr('href', '../../../../../' + randomFolder + addLinkPrev + '.html');
$('#addLinkNext').attr('href', '../../../../../' + randomFolder + addLinkNext + '.html');


// ADD - Random Product
var totalPro = addArraySku.length;
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomAdd() {
    var a = randomNumber(2, totalPro);
    var b = randomNumber(2, a - 1);
    var c = randomNumber(a + 1, totalPro);
    
    if (a == 2) {
        b = randomNumber(3, totalPro);
        c = randomNumber(b + 1, totalPro);
        b = totalPro;
        if (b == totalPro) {
            c = randomNumber(3, totalPro - 1)
        }
        
    } else if (a == totalPro) {
        b = randomNumber(2, totalPro - 1);
        c = randomNumber(2, b - 1);
        if (b == 2) {
            c = randomNumber(3, totalPro - 1);
        }
    }
    // One
    document.getElementById('addName1').innerHTML = addArrayName[a - 1];
    $('#addImage1').attr('src', '../../../../../img/' + addBrandLink + '/' + addArraySku[a - 1] + '-1.jpg');
    $('#addLink1').attr('href', '../../../../../' + randomFolder + addArraySku[a - 1] + '.html');
    // Two
    document.getElementById('addName2').innerHTML = addArrayName[b - 1];
    $('#addImage2').attr('src', '../../../../../img/' + addBrandLink + '/' + addArraySku[b - 1] + '-1.jpg');
    $('#addLink2').attr('href', '../../../../../' + randomFolder + addArraySku[b - 1] + '.html');
    // Three
    document.getElementById('addName3').innerHTML = addArrayName[c - 1];
    $('#addImage3').attr('src', '../../../../../img/' + addBrandLink + '/' + addArraySku[c - 1] + '-1.jpg');
    $('#addLink3').attr('href', '../../../../../' + randomFolder + addArraySku[c - 1] + '.html');
}
setTimeout(randomAdd, 0);
setInterval(randomAdd, 10000);


// NOTICE - Click
function clickBuy() {
    $('#notice').css({
        'display': 'inline-block',
    });
}
function noticeExit() {
    $('#notice').css({
        'display': 'none',
    });
}
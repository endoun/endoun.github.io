// MENU
$('#header').append(
    '<div class="header__logo">' +
        '<a class="header__logo--link" href="../../../../../index.html"></a>' +
    '</div>' +
    '<div class="header__slogan">Darkness begins to shine</div>' +
    '<div class="header__shop"></div>' +
    '<div class="header__overlay"></div>' +
    '<div class="header__click">' +
        '<svg viewBox="0 0 900 900" class="header__click--svg">' +
            '<polygon class="st0 header__click--item header__click--item--1" points="181,168.1 181.5,487.9 328.7,636.9 328.7,317.1"/>' +
            '<polygon class="st0 header__click--item header__click--item--2" points="523.9,318.4 523.9,653.4 449.5,732.9 375.2,653.4 375.2,318.4 449.5,239.4"/>' +
            '<polygon class="st0 header__click--item header__click--item--3" points="719,167.1 718.5,486.9 571.3,635.9 571.3,316.1"/>' +
        '</svg>' +
    '</div>' +
    '<div class="header__nav">' +
    '<div class="header__nav--logo"></div>' +
        '<div class="header__nav--menu">' +
            '<div class="header__menu" id="headerMenu">' +
                '<a class="header__menu--item header__menu--item--home" href="../../../../../index.html"><span id="menuItem0"></a>' +
            '</div>' +
        '</div>' +
        '<div class="header__nav--society">' +
            '<a class="header__society--link LinkZaLo" href="" target="_blank">' +
                '<img class="header__society--icon" src="../../../../../img/zalo.svg" alt="Zalo Endoun"/>' +
            '</a>' +
            '<a class="header__society--link LinkFacebook" href="" target="_blank">' +
                '<img class="header__society--icon" src="../../../../../img/facebook.svg" alt="Facebook Endoun"/>' +
            '</a>' +
            '<a class="header__society--link LinkTel" href="" target="_blank">' +
                '<i class="header__society--icon icon-phone fas fa-phone-alt"></i>' +
            '</a>' +
            '<a class="header__society--link LinkGmail" href="" target="_blank">' +
                '<i class="header__society--icon icon-gmail far fa-envelope"></i>' +
            '</a>' +
        '</div>' +
    '</div'
);
for (let z = 1; z < 7; ++z) {
    $('.header__nav--menu').append(
        '<div class="header__add header__add--' + z + '"></div>'
    );
}
$('.header__add').append(
    '<span class="header__add--link header__add--back header__add--link--none"><i class="fas fa-reply-all"></i></span>'
);
var arrayIdIconNow = Array(
    'Shoes',
    'Clothes',
    'Food',
    'Ranking',
    'Eyes',
    'Feet',
);
for (let m = 1; m < 8; ++m) {
    $('#headerMenu').append(
        '<div class="header__menu--item header__menu--item--' + m + '" data-id="' + m + '"><span class="menu-item" id="menuItem' + m + '"></span><i class="menu-item fas fa-angle-double-right" id="link' + arrayIdIconNow[m] + 'I"></i></div>'
    );
    for (let n = 1; n < 9; ++n) {
        $('.header__add--' + m).append(
            '<a class="header__add--link header__add--link--' + n + ' header__add--link--none" id="menuAdd' + m +'Link' + n +'" href=""></a>'
        );
    }
}
$('.header__menu--item--6').attr('class', 'header__menu--item--none');
$('.header__menu--item--7').attr('class', 'header__menu--item--none');
$(document).ready(function() {
    $('.header__click').click(function() {
        $('html').toggleClass('menu-click');
        $('.header__click--svg').toggleClass('menu-click');
        $('.header__overlay').toggleClass('menu-click');
        $('.header__nav').toggleClass('menu-click');
        $('.header__menu').removeClass('item-click');
        $('.header__add').removeClass('item-click');
    });
    $('.header__menu--item').click(function() {
        $('.header__menu').toggleClass('item-click');
        $('.header__add--' + $(this).data('id')).toggleClass('item-click');
    });
    $('.header__add--back').click(function() {
        $('.header__menu').removeClass('item-click');
        $('.header__add').removeClass('item-click');
    });
});

var arrayMenuItemNumber = Array('0', '1', '2', '3', '4', '5');
var arrayMenuItemNameVN = Array(
    'Trang chủ',
    'Giày',
    'Quần Áo',
    'Đồ Ăn',
    'Bảng Xếp Hạng',
    'Darkness'
);
var arrayMenuItemNameLang = arrayMenuItemNameVN;
for (let j = 0; j < arrayMenuItemNumber.length; ++j) {
    $('#menuItem' + arrayMenuItemNumber[j]).append(arrayMenuItemNameLang[j]);
}

// MENU | Add - Shoes
var arrayMenuAdd1Number = Array('1', '2', '3', '4', '5', '6', '7', '8');
var arrayMenuAdd1NameVN = Array(
    'All Shoes',
    'Adidas',
    'Balenciaga',
    'Converse',
    'Nike',
    'Vans',
    'Khác...',
    'Bảng Size giày'
);
var arrayMenuAdd1Href = Array(
    'all-shoes',
    'adidas',
    'balenciaga',
    'converse',
    'nike',
    'vans',
    'other',
    'size-chart-shoes'
);
var arrayMenuAdd1NameLang = arrayMenuAdd1NameVN;
for (let sh = 0; sh < arrayMenuAdd1Number.length; ++sh) {
    $('#menuAdd1Link' + arrayMenuAdd1Number[sh]).append(arrayMenuAdd1NameLang[sh]);
    $('#menuAdd1Link' + arrayMenuAdd1Number[sh]).attr('href', '../../../../../shoes/' + arrayMenuAdd1Href[sh] + '.html');
    $('#menuAdd1Link' + arrayMenuAdd1Number[sh]).removeClass('header__add--link--none');
}

// MENU | Add - Clothes
var arrayMenuAdd2Number = Array('1', '2', '3');
var arrayMenuAdd2NameVN = Array(
    'All Clothes',
    'Áo Phông',
    'Áo Len'
);
var arrayMenuAdd2Href = Array(
    'all-clothes',
    'tshirt',
    'sweater'
);
var arrayMenuAdd2NameLang = arrayMenuAdd2NameVN;
for (let cl = 0; cl < arrayMenuAdd2Number.length; ++cl) {
    $('#menuAdd2Link' + arrayMenuAdd2Number[cl]).append(arrayMenuAdd2NameLang[cl]);
    $('#menuAdd2Link' + arrayMenuAdd2Number[cl]).attr('href', '../../../../../clothes/' + arrayMenuAdd2Href[cl] + '.html');
    $('#menuAdd2Link' + arrayMenuAdd2Number[cl]).removeClass('header__add--link--none');
}

// MENU | Add - Food
var arrayMenuAdd3Number = Array('1', '2', '3');
var arrayMenuAdd3NameVN = Array(
    'All Food',
    'Endakedy',
    'Thực phẩm khô'
);
var arrayMenuAdd3Href = Array(
    'all-food',
    'endakedy',
    'dried'
);
var arrayMenuAdd3NameLang = arrayMenuAdd3NameVN;
for (let fo = 0; fo < arrayMenuAdd3Number.length; ++fo) {
    $('#menuAdd3Link' + arrayMenuAdd3Number[fo]).append(arrayMenuAdd3NameLang[fo]);
    $('#menuAdd3Link' + arrayMenuAdd3Number[fo]).attr('href', '../../../../../food/' + arrayMenuAdd3Href[fo] + '.html');
    $('#menuAdd3Link' + arrayMenuAdd3Number[fo]).removeClass('header__add--link--none');
}

// MENU | Add - Rank
var arrayMenuAdd4Number = Array('1', '2', '3', '4');
var arrayMenuAdd4NameVN = Array(
    'Bảng Xếp Hạng',
    'Thành Viên',
    'Đóng Góp',
    'Endoun Rules'
);
var arrayMenuAdd4Href = Array(
    'ranking',
    'members',
    'contribute',
    'rules'
);
var arrayMenuAdd4NameLang = arrayMenuAdd4NameVN;
for (let ra = 0; ra < arrayMenuAdd4Number.length; ++ra) {
    $('#menuAdd4Link' + arrayMenuAdd4Number[ra]).append(arrayMenuAdd4NameLang[ra]);
    $('#menuAdd4Link' + arrayMenuAdd4Number[ra]).attr('href', '../../../../../rank/' + arrayMenuAdd4Href[ra] + '.html');
    $('#menuAdd4Link' + arrayMenuAdd4Number[ra]).removeClass('header__add--link--none');
}

// MENU | Add - Eyes
var arrayMenuAdd5Number = Array('1');
var arrayMenuAdd5NameVN = Array(
    'Eyes On The Stars'
);
var arrayMenuAdd5Href = Array(
    'eyes'
);
var arrayMenuAdd5NameLang = arrayMenuAdd5NameVN;
for (let ey = 0; ey < arrayMenuAdd5Number.length; ++ey) {
    $('#menuAdd5Link' + arrayMenuAdd5Number[ey]).append(arrayMenuAdd5NameLang[ey]);
    $('#menuAdd5Link' + arrayMenuAdd5Number[ey]).attr('href', '../../../../../eyes/' + arrayMenuAdd5Href[ey] + '.html');
    $('#menuAdd5Link' + arrayMenuAdd5Number[ey]).removeClass('header__add--link--none');
}

// MENU | Add - Feet
var arrayMenuAdd6Number = Array('1');
var arrayMenuAdd6NameVN = Array(
    'Feet On The Ground'
);
var arrayMenuAdd6Href = Array(
    'feet'
);
var arrayMenuAdd6NameLang = arrayMenuAdd6NameVN;
for (let fe = 0; fe < arrayMenuAdd5Number.length; ++fe) {
    $('#menuAdd6Link' + arrayMenuAdd6Number[fe]).append(arrayMenuAdd6NameLang[fe]);
    $('#menuAdd6Link' + arrayMenuAdd6Number[fe]).attr('href', '../../../../../feet/' + arrayMenuAdd6Href[fe] + '.html');
    $('#menuAdd6Link' + arrayMenuAdd6Number[fe]).removeClass('header__add--link--none');
}

var idBrandNow = '';
var idIconNow = '';

if (sku = 'index') {
    idIconNow = 0;
    idBrandNow = 0;
    $('.header__menu--item--home').append('<i class="far fa-heart"></i>');
}
if (sku.indexOf('sh') > -1) {
    idIconNow = 1;
    if (sku.indexOf('ad') > -1) {
        idBrandNow = 'menuAdd1Link2';
    }
    else if (sku.indexOf('ba') > -1) {
        idBrandNow = 'menuAdd1Link3';
    }
    else if (sku.indexOf('co') > -1) {
        idBrandNow = 'menuAdd1Link4';
    }
    else if (sku.indexOf('ni') > -1) {
        idBrandNow = 'menuAdd1Link5';
    }
    else if (sku.indexOf('va') > -1) {
        idBrandNow = 'menuAdd1Link6';
    }
    else if (sku.indexOf('ot') > -1) {
        idBrandNow = 'menuAdd1Link7';
    }
    else if (sku.indexOf('size') > -1) {
        idBrandNow = 'menuAdd1Link8';
    }
}
else if (sku.indexOf('cl') > -1) {
    idIconNow = 2;
    if (sku.indexOf('ts') > -1) {
        idBrandNow = 'menuAdd2Link2';
    }
    else if (sku.indexOf('sw') > -1) {
        idBrandNow = 'menuAdd2Link3';
    }
}
else if (sku.indexOf('fo') > -1) {
    idIconNow = 3;
    if (sku.indexOf('en') > -1) {
        idBrandNow = 'menuAdd3Link2';
    }
    else if (sku.indexOf('dr') > -1) {
        idBrandNow = 'menuAdd3Link3';
    }
}
else if (sku.indexOf('ra') > -1) {
    idIconNow = 4;
    if (sku.indexOf('ra') > -1) {
        idBrandNow = 'menuAdd4Link2';
    }
    else if (sku.indexOf('me') > -1) {
        idBrandNow = 'menuAdd4Link3';
    }
    else if (sku.indexOf('co') > -1) {
        idBrandNow = 'menuAdd4Link5';
    }
    else if (sku.indexOf('ru') > -1) {
        idBrandNow = 'menuAdd4Link6';
    }
}
else if (sku.indexOf('ey') > -1) {
    idIconNow = 5;
}
else if (sku.indexOf('fe') > -1) {
    idIconNow = 6;
}

$('#link' + arrayIdIconNow[idIconNow] + 'I').attr('class', 'header__menu--icon far fa-heart');

$('#menuItem' + idIconNow).css({
    'color': '#f9476c',
});
$('.header__menu--item--' + idIconNow).css({
    'color': '#f9476c'
});
$('.header__menu--item--' + idIconNow).hover(function() {
    $('.header__menu--item--' + idIconNow).css({
        'background': '#f9476c',
        'border-color': '#f9476c'
    });
    $('#menuItem' + idIconNow).css({
        'color': '#fff',
    });
    $('.fa-heart').css({
        'color': '#fff'
    })
}, function() {
    $('.header__menu--item--' + idIconNow).css({
        'background': '#fff',
        'border-color': '#ddd'
    });
    $('#menuItem' + idIconNow).css({
        'color': '#f9476c',
    });
    $('.fa-heart').css({
        'color': '#f9476c'
    })
});
$('#' + idBrandNow).css({
    'color': '#000',
    'border': '0.25vh solid #f9476c',
    'text-decoration': 'none'
});
$('#' + idBrandNow).hover(function() {
    $('#' + idBrandNow).css({
        'background': '#f9476c',
        'color': '#fff'
    });
}, function() {
    $('#' + idBrandNow).css({
        'background': '#fff',
        'color': '#f9476c'
    });
});


// Chặn event
$('.header__add--link--none').click(function() {
    event.preventDefault();
});

var lastScrollTop = 0;
$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    setTimeout(function() {
        if (scroll > lastScrollTop) {
            $('#header').css({
                'transform': 'translateY(-100%)',
                'transition': 'transform 0.5s'
            });
        } else {
            $('#header').css({
                'transform': 'translateY(0)',
                'transition': 'transform 0.5s'
            });
        }
        lastScrollTop = scroll;
    });
});
var swiper = new Swiper(".mySwiper", {
    speed: 750,
    loop: true,
    longSwipes: true,
    longSwipesMs: 10000,
    longSwipesRatio: 0,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    preloadImages: true,
    preventClicks: true,
    grabCursor: true,
    mousewheel: true,
    keyboard: true,
});

var arrayBest_Shoes = Array(51, 1, 6, 4, 7, 2, 54, 14);
var arrayNew_SkuShoes = Array(arraySku_ShNike[arrayBest_Shoes[0]], arraySku_ShAdidas[arrayBest_Shoes[1]], arraySku_ShBalenciaga[arrayBest_Shoes[2]], arraySku_ShConverse[arrayBest_Shoes[3]], arraySku_ShVans[arrayBest_Shoes[4]], arraySku_ShOther[arrayBest_Shoes[5]], arraySku_ShNike[arrayBest_Shoes[6]], arraySku_ShAdidas[arrayBest_Shoes[7]]);
var arrayNew_NameShoes = Array(arrayName_ShNike[arrayBest_Shoes[0]], arrayName_ShAdidas[arrayBest_Shoes[1]], arrayName_ShBalenciaga[arrayBest_Shoes[2]], arrayName_ShConverse[arrayBest_Shoes[3]], arrayName_ShVans[arrayBest_Shoes[4]], arrayName_ShOther[arrayBest_Shoes[5]], arrayName_ShNike[arrayBest_Shoes[6]], arrayName_ShAdidas[arrayBest_Shoes[7]]);
var arrayNew_PriceShoes = Array(arrayPrice_ShNike[arrayBest_Shoes[0]], arrayPrice_ShAdidas[arrayBest_Shoes[1]], arrayPrice_ShBalenciaga[arrayBest_Shoes[2]], arrayPrice_ShConverse[arrayBest_Shoes[3]], arrayPrice_ShVans[arrayBest_Shoes[4]], arrayPrice_ShOther[arrayBest_Shoes[5]], arrayPrice_ShNike[arrayBest_Shoes[6]], arrayPrice_ShAdidas[arrayBest_Shoes[7]]);
var arrayNew_SrcImage = Array('nike/', 'adidas/', 'balenciaga/', 'converse/', 'vans/', 'other/', 'nike/', 'adidas/');
var arrayNew_Brand = Array('Nike', 'Adidas', 'Balenciaga', 'Converse', 'Vans', 'Other', 'Nike', 'Adidas');
for (let countSh = 0; countSh < arrayNew_SkuShoes.length; ++countSh) {
    ShowPrice(arrayNew_PriceShoes[countSh]);
    $('#showShoes').append(
        '<div class="show__container">' +
            '<a class="show__box" href="../shoes/product/' + arrayNew_SrcImage[countSh] + arrayNew_SkuShoes[countSh] + '.html">' +
                '<img class="show__box--img" src="../img/shoes/' + arrayNew_SrcImage[countSh] + arrayNew_SkuShoes[countSh] + '-1.jpg" alt="' + arrayNew_NameShoes[countSh] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
                '<div class="show__box--brand">' + arrayNew_Brand[countSh] + '</div>' +
                '<div class="show__box--name">' + arrayNew_NameShoes[countSh] + '</div>' +
                '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
                '<div class="show__box--price">' +
                    '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
                    '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
                '</div>' +
            '</a>' +
        '</div>'
    );
}

// NIKE =====================================

var arrayBest_ShNike = Array(20, 56, 12, 4, 13, 50, 51, 24);
var arrayShowSku_ShNike = Array(arraySku_ShNike[arrayBest_ShNike[0]], arraySku_ShNike[arrayBest_ShNike[1]], arraySku_ShNike[arrayBest_ShNike[2]], arraySku_ShNike[arrayBest_ShNike[3]], arraySku_ShNike[arrayBest_ShNike[4]], arraySku_ShNike[arrayBest_ShNike[5]], arraySku_ShNike[arrayBest_ShNike[6]], arraySku_ShNike[arrayBest_ShNike[7]]);
var arrayShowName_ShNike = Array(arrayName_ShNike[arrayBest_ShNike[0]], arrayName_ShNike[arrayBest_ShNike[1]], arrayName_ShNike[arrayBest_ShNike[2]], arrayName_ShNike[arrayBest_ShNike[3]], arrayName_ShNike[arrayBest_ShNike[4]], arrayName_ShNike[arrayBest_ShNike[5]], arrayName_ShNike[arrayBest_ShNike[6]], arrayName_ShNike[arrayBest_ShNike[7]]);
var arrayShowPrice_ShNike = Array(arrayPrice_ShNike[arrayBest_ShNike[0]], arrayPrice_ShNike[arrayBest_ShNike[1]], arrayPrice_ShNike[arrayBest_ShNike[2]], arrayPrice_ShNike[arrayBest_ShNike[3]], arrayPrice_ShNike[arrayBest_ShNike[4]], arrayPrice_ShNike[arrayBest_ShNike[5]], arrayPrice_ShNike[arrayBest_ShNike[6]], arrayPrice_ShNike[arrayBest_ShNike[7]]);
for (let countSh_Nike = 0; countSh_Nike < arrayShowSku_ShNike.length; ++countSh_Nike) {
    ShowPrice(arrayShowPrice_ShNike[countSh_Nike]);
    $('#showShoes_Nike').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/nike/' + arrayShowSku_ShNike[countSh_Nike] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/nike/' + arrayShowSku_ShNike[countSh_Nike] + '-1.jpg" alt="' + arrayShowName_ShNike[countSh_Nike] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Nike</div>' +
        '<div class="show__box--name">' + arrayShowName_ShNike[countSh_Nike] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}

// ADIDAS =====================================

var arrayBest_ShAdidas = Array(16, 5, 1, 2, 12, 3, 8, 6);
var arrayShowSku_ShAdidas = Array(arraySku_ShAdidas[arrayBest_ShAdidas[0]], arraySku_ShAdidas[arrayBest_ShAdidas[1]], arraySku_ShAdidas[arrayBest_ShAdidas[2]], arraySku_ShAdidas[arrayBest_ShAdidas[3]], arraySku_ShAdidas[arrayBest_ShAdidas[4]], arraySku_ShAdidas[arrayBest_ShAdidas[5]], arraySku_ShAdidas[arrayBest_ShAdidas[6]], arraySku_ShAdidas[arrayBest_ShAdidas[7]]);
var arrayShowName_ShAdidas = Array(arrayName_ShAdidas[arrayBest_ShAdidas[0]], arrayName_ShAdidas[arrayBest_ShAdidas[1]], arrayName_ShAdidas[arrayBest_ShAdidas[2]], arrayName_ShAdidas[arrayBest_ShAdidas[3]], arrayName_ShAdidas[arrayBest_ShAdidas[4]], arrayName_ShAdidas[arrayBest_ShAdidas[5]], arrayName_ShAdidas[arrayBest_ShAdidas[6]], arrayName_ShAdidas[arrayBest_ShAdidas[7]]);
var arrayShowPrice_ShAdidas = Array(arrayPrice_ShAdidas[arrayBest_ShAdidas[0]], arrayPrice_ShAdidas[arrayBest_ShAdidas[1]], arrayPrice_ShAdidas[arrayBest_ShAdidas[2]], arrayPrice_ShAdidas[arrayBest_ShAdidas[3]], arrayPrice_ShAdidas[arrayBest_ShAdidas[4]], arrayPrice_ShAdidas[arrayBest_ShAdidas[5]], arrayPrice_ShAdidas[arrayBest_ShAdidas[6]], arrayPrice_ShAdidas[arrayBest_ShAdidas[7]]);
for (let countSh_Adidas = 0; countSh_Adidas < arrayShowSku_ShAdidas.length; ++countSh_Adidas) {
    ShowPrice(arrayShowPrice_ShAdidas[countSh_Adidas]);
    $('#showShoes_Adidas').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/adidas/' + arrayShowSku_ShAdidas[countSh_Adidas] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/adidas/' + arrayShowSku_ShAdidas[countSh_Adidas] + '-1.jpg" alt="' + arrayShowName_ShAdidas[countSh_Adidas] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Adidas</div>' +
        '<div class="show__box--name">' + arrayShowName_ShAdidas[countSh_Adidas] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}

// BALENCIAGA =====================================

var arrayBest_ShBalenciaga = Array(1, 7, 5, 2);
var arrayShowSku_ShBalenciaga = Array(arraySku_ShBalenciaga[arrayBest_ShBalenciaga[0]], arraySku_ShBalenciaga[arrayBest_ShBalenciaga[1]], arraySku_ShBalenciaga[arrayBest_ShBalenciaga[2]], arraySku_ShBalenciaga[arrayBest_ShBalenciaga[3]]);
var arrayShowName_ShBalenciaga = Array(arrayName_ShBalenciaga[arrayBest_ShBalenciaga[0]], arrayName_ShBalenciaga[arrayBest_ShBalenciaga[1]], arrayName_ShBalenciaga[arrayBest_ShBalenciaga[2]], arrayName_ShBalenciaga[arrayBest_ShBalenciaga[3]]);
var arrayShowPrice_ShBalenciaga = Array(arrayPrice_ShBalenciaga[arrayBest_ShBalenciaga[0]], arrayPrice_ShBalenciaga[arrayBest_ShBalenciaga[1]], arrayPrice_ShBalenciaga[arrayBest_ShBalenciaga[2]], arrayPrice_ShBalenciaga[arrayBest_ShBalenciaga[3]]);
for (let countSh_Balenciaga = 0; countSh_Balenciaga < arrayShowSku_ShBalenciaga.length; ++countSh_Balenciaga) {
    ShowPrice(arrayShowPrice_ShBalenciaga[countSh_Balenciaga]);
    $('#showShoes_Balenciaga').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/balenciaga/' + arrayShowSku_ShBalenciaga[countSh_Balenciaga] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/balenciaga/' + arrayShowSku_ShBalenciaga[countSh_Balenciaga] + '-1.jpg" alt="' + arrayShowName_ShBalenciaga[countSh_Balenciaga] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Balenciaga</div>' +
        '<div class="show__box--name">' + arrayShowName_ShBalenciaga[countSh_Balenciaga] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}

// CONVERSE =====================================

var arrayBest_ShConverse = Array(1, 2, 3, 4);
var arrayShowSku_ShConverse = Array(arraySku_ShConverse[arrayBest_ShConverse[0]], arraySku_ShConverse[arrayBest_ShConverse[1]], arraySku_ShConverse[arrayBest_ShConverse[2]], arraySku_ShConverse[arrayBest_ShConverse[3]]);
var arrayShowName_ShConverse = Array(arrayName_ShConverse[arrayBest_ShConverse[0]], arrayName_ShConverse[arrayBest_ShConverse[1]], arrayName_ShConverse[arrayBest_ShConverse[2]], arrayName_ShConverse[arrayBest_ShConverse[3]]);
var arrayShowPrice_ShConverse = Array(arrayPrice_ShConverse[arrayBest_ShConverse[0]], arrayPrice_ShConverse[arrayBest_ShConverse[1]], arrayPrice_ShConverse[arrayBest_ShConverse[2]], arrayPrice_ShConverse[arrayBest_ShConverse[3]]);
for (let countSh_Converse = 0; countSh_Converse < arrayShowSku_ShConverse.length; ++countSh_Converse) {
    ShowPrice(arrayShowPrice_ShConverse[countSh_Converse]);
    $('#showShoes_Converse').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/converse/' + arrayShowSku_ShConverse[countSh_Converse] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/converse/' + arrayShowSku_ShConverse[countSh_Converse] + '-1.jpg" alt="' + arrayShowName_ShConverse[countSh_Converse] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Converse</div>' +
        '<div class="show__box--name">' + arrayShowName_ShConverse[countSh_Converse] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}

// VANS =====================================

var arrayBest_ShVans = Array(9, 1, 11, 10);
var arrayShowSku_ShVans = Array(arraySku_ShVans[arrayBest_ShVans[0]], arraySku_ShVans[arrayBest_ShVans[1]], arraySku_ShVans[arrayBest_ShVans[2]], arraySku_ShVans[arrayBest_ShVans[3]]);
var arrayShowName_ShVans = Array(arrayName_ShVans[arrayBest_ShVans[0]], arrayName_ShVans[arrayBest_ShVans[1]], arrayName_ShVans[arrayBest_ShVans[2]], arrayName_ShVans[arrayBest_ShVans[3]]);
var arrayShowPrice_ShVans = Array(arrayPrice_ShVans[arrayBest_ShVans[0]], arrayPrice_ShVans[arrayBest_ShVans[1]], arrayPrice_ShVans[arrayBest_ShVans[2]], arrayPrice_ShVans[arrayBest_ShVans[3]]);
for (let countSh_Vans = 0; countSh_Vans < arrayShowSku_ShVans.length; ++countSh_Vans) {
    ShowPrice(arrayShowPrice_ShVans[countSh_Vans]);
    $('#showShoes_Vans').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/vans/' + arrayShowSku_ShVans[countSh_Vans] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/vans/' + arrayShowSku_ShVans[countSh_Vans] + '-1.jpg" alt="' + arrayShowName_ShVans[countSh_Vans] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Vans</div>' +
        '<div class="show__box--name">' + arrayShowName_ShVans[countSh_Vans] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}

// OTHER =====================================

var arrayBest_ShOther = Array(9, 1, 7, 3);
var arrayShowSku_ShOther = Array(arraySku_ShOther[arrayBest_ShOther[0]], arraySku_ShOther[arrayBest_ShOther[1]], arraySku_ShOther[arrayBest_ShOther[2]], arraySku_ShOther[arrayBest_ShOther[3]]);
var arrayShowName_ShOther = Array(arrayName_ShOther[arrayBest_ShOther[0]], arrayName_ShOther[arrayBest_ShOther[1]], arrayName_ShOther[arrayBest_ShOther[2]], arrayName_ShOther[arrayBest_ShOther[3]]);
var arrayShowPrice_ShOther = Array(arrayPrice_ShOther[arrayBest_ShOther[0]], arrayPrice_ShOther[arrayBest_ShOther[1]], arrayPrice_ShOther[arrayBest_ShOther[2]], arrayPrice_ShOther[arrayBest_ShOther[3]]);
for (let countSh_Other = 0; countSh_Other < arrayShowSku_ShOther.length; ++countSh_Other) {
    ShowPrice(arrayShowPrice_ShOther[countSh_Other]);
    $('#showShoes_Other').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/other/' + arrayShowSku_ShOther[countSh_Other] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/other/' + arrayShowSku_ShOther[countSh_Other] + '-1.jpg" alt="' + arrayShowName_ShOther[countSh_Other] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Other</div>' +
        '<div class="show__box--name">' + arrayShowName_ShOther[countSh_Other] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}


// CLOTHES ----------------------------

var arrayBest_Clothes = Array(1, 2, 2, 6);
var arrayNew_SkuClothes = Array(arraySku_ClTshirt[arrayBest_Clothes[0]], arraySku_ClSweater[arrayBest_Clothes[1]], arraySku_ClTshirt[arrayBest_Clothes[2]], arraySku_ClSweater[arrayBest_Clothes[3]]);
var arrayNew_NameClothes = Array(arrayName_ClTshirt[arrayBest_Clothes[0]], arrayName_ClSweater[arrayBest_Clothes[1]], arrayName_ClTshirt[arrayBest_Clothes[2]], arrayName_ClSweater[arrayBest_Clothes[3]]);
var arrayNew_PriceClothes = Array(arrayPrice_ClTshirt[arrayBest_Clothes[0]], arrayPrice_ClSweater[arrayBest_Clothes[1]], arrayPrice_ClTshirt[arrayBest_Clothes[2]], arrayPrice_ClSweater[arrayBest_Clothes[3]]);
var arrayNew_SrcImage = Array('tshirt/', 'sweater/', 'tshirt/', 'sweater/');
var arrayNew_Brand = Array('T-shirt', 'Sweater', 'T-shirt', 'Sweater');
for (let countCl = 0; countCl < arrayNew_SkuClothes.length; ++countCl) {
    ShowPrice(arrayNew_PriceClothes[countCl]);
    $('#showClothes').append(
        '<div class="show__container">' +
            '<a class="show__box" href="../clothes/product/' + arrayNew_SrcImage[countCl] + arrayNew_SkuClothes[countCl] + '.html">' +
                '<img class="show__box--img" src="../img/clothes/' + arrayNew_SrcImage[countCl] + arrayNew_SkuClothes[countCl] + '-1.jpg" alt="' + arrayNew_NameClothes[countCl] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
                '<div class="show__box--brand">' + arrayNew_Brand[countCl] + '</div>' +
                '<div class="show__box--name">' + arrayNew_NameClothes[countCl] + '</div>' +
                '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
                '<div class="show__box--price">' +
                    '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
                    '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
                '</div>' +
            '</a>' +
        '</div>'
    );
}


// FOOD ------------------------------


var arrayBest_Food = Array(1, 1, 2);
var arrayNew_SkuFood = Array(arraySku_FoEndakedy[arrayBest_Food[0]], arraySku_FoDried[arrayBest_Food[1]], arraySku_FoDried[arrayBest_Food[2]]);
var arrayNew_NameFood = Array(arrayName_FoEndakedy[arrayBest_Food[0]], arrayName_FoDried[arrayBest_Food[1]], arrayName_FoDried[arrayBest_Food[2]]);
var arrayNew_PriceFood = Array(arrayPrice_FoEndakedy[arrayBest_Food[0]], arrayPrice_FoDried[arrayBest_Food[1]], arrayPrice_FoDried[arrayBest_Food[2]]);
var arrayNew_SrcImage = Array('endakedy/', 'dried/', 'dried/');
var arrayNew_Brand = Array('Endakedy', 'Dried', 'Dried');
for (let countFo = 0; countFo < arrayNew_SkuFood.length; ++countFo) {
    ShowPrice(arrayNew_PriceFood[countFo]);
    $('#showFood').append(
        '<div class="show__container">' +
            '<a class="show__box" href="../food/product/' + arrayNew_SrcImage[countFo] + arrayNew_SkuFood[countFo] + '.html">' +
                '<img class="show__box--img" src="../img/food/' + arrayNew_SrcImage[countFo] + arrayNew_SkuFood[countFo] + '-1.jpg" alt="' + arrayNew_NameFood[countFo] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
                '<div class="show__box--brand">' + arrayNew_Brand[countFo] + '</div>' +
                '<div class="show__box--name">' + arrayNew_NameFood[countFo] + '</div>' +
                '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
                '<div class="show__box--price">' +
                    '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
                    '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
                '</div>' +
            '</a>' +
        '</div>'
    );
}


// var arrayBest_Sh🌈 = Array(20, 56, 12, 4, 13, 50);
// var arrayShowSku_Sh🌈 = Array(arraySku_Sh🌈[arrayBest_Sh🌈[0]], arraySku_Sh🌈[arrayBest_Sh🌈[1]], arraySku_Sh🌈[arrayBest_Sh🌈[2]], arraySku_Sh🌈[arrayBest_Sh🌈[3]], arraySku_Sh🌈[arrayBest_Sh🌈[4]], arraySku_Sh🌈[arrayBest_Sh🌈[5]]);
// var arrayShowName_Sh🌈 = Array(arrayName_Sh🌈[arrayBest_Sh🌈[0]], arrayName_Sh🌈[arrayBest_Sh🌈[1]], arrayName_Sh🌈[arrayBest_Sh🌈[2]], arrayName_Sh🌈[arrayBest_Sh🌈[3]], arrayName_Sh🌈[arrayBest_Sh🌈[4]], arrayName_Sh🌈[arrayBest_Sh🌈[5]]);
// var arrayShowPrice_Sh🌈 = Array(arrayPrice_Sh🌈[arrayBest_Sh🌈[0]], arrayPrice_Sh🌈[arrayBest_Sh🌈[1]], arrayPrice_Sh🌈[arrayBest_Sh🌈[2]], arrayPrice_Sh🌈[arrayBest_Sh🌈[3]], arrayPrice_Sh🌈[arrayBest_Sh🌈[4]], arrayPrice_Sh🌈[arrayBest_Sh🌈[5]]);
// for (let countSh_🌈 = 0; countSh_🌈 < arrayShowSku_Sh🌈.length; ++countSh_🌈) {
//     if ((proSaleMoneyAll != 0) || (proSaleMoney != 0)) {
//         Price_Dot(arrayShowPrice_Sh🌈[countSh_🌈], arrayShowPrice_Sh🌈[countSh_🌈] - costSaleMon);
//     }
//     else if ((proSalePerAll != 0) || (proSalePer != 0)) {
//         Price_Dot(arrayShowPrice_Sh🌈[countSh_🌈], (arrayShowPrice_Sh🌈[countSh_🌈] - arrayShowPrice_Sh🌈[countSh_🌈] * costSalePer / 100));
//     }
//     $('#showShoes_🌈').append(
//         '<div class="show__container">' +
//         '<a class="show__box" href="../shoes/product/🦄/' + arrayShowSku_Sh🌈[countSh_🌈] + '.html">' +
//         '<img class="show__box--img" src="../img/shoes/🦄/' + arrayShowSku_Sh🌈[countSh_🌈] + '-1.jpg" alt="' + arrayShowName_Sh🌈[countSh_🌈] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
//         '<div class="show__box--brand">🌈</div>' +
//         '<div class="show__box--name">' + arrayShowName_Sh🌈[countSh_🌈] + '</div>' +
//         '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
//         '<div class="show__box--price">' +
//         '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
//         '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
//         '</div>' +
//         '</a>' +
//         '</div>'
//     );
// }
// for (let countMainSh_Nike = 0; countMainSh_Nike < arrayName_ShNike; countMainSh_Nike++) {
    // ShowPrice(arrayPrice_ShNike[countMainSh_Nike]);
    // $('#showShoes_Nike').append(
    //     '<div class="show__container">' +
    //     '<a class="show__box" href="../shoes/product/nike/' + arraySku_ShNike[countMainSh_Nike] + '.html">' +
    //     '<img class="show__box--img" src="../img/shoes/nike/' + arraySku_ShNike[countMainSh_Nike] + '-1.jpg" alt="' + arrayName_ShNike[countMainSh_Nike] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
    //     '<div class="show__box--brand">Nike</div>' +
    //     '<div class="show__box--name">' + arrayName_ShNike[countMainSh_Nike] + '</div>' +
    //     '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
    //     '<div class="show__box--price">' +
    //     '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
    //     '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
    //     '</div>' +
    //     '</a>' +
    //     '</div>'
    // );
// }
if (showSaleOff == '') {
    $('.show__price--cost').css({
        'display': 'none'
    });
    $('.show__box--sale-off').css({
        'display': 'none'
    });
}
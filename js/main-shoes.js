for (let countSh_Nike = 1; countSh_Nike < arraySku_ShNike.length; ++countSh_Nike) {
    ShowPrice(arrayPrice_ShNike[countSh_Nike]);
    $('#mainShoes_Nike').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/nike/' + arraySku_ShNike[countSh_Nike] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/nike/' + arraySku_ShNike[countSh_Nike] + '-1.jpg" alt="' + arrayName_ShNike[countSh_Nike] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Nike</div>' +
        '<div class="show__box--name">' + arrayName_ShNike[countSh_Nike] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}

for (let countSh_Adidas = 1; countSh_Adidas < arraySku_ShAdidas.length; ++countSh_Adidas) {
    ShowPrice(arrayPrice_ShAdidas[countSh_Adidas]);
    $('#mainShoes_Adidas').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/adidas/' + arraySku_ShAdidas[countSh_Adidas] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/adidas/' + arraySku_ShAdidas[countSh_Adidas] + '-1.jpg" alt="' + arrayName_ShAdidas[countSh_Adidas] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Adidas</div>' +
        '<div class="show__box--name">' + arrayName_ShAdidas[countSh_Adidas] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
for (let countSh_Balenciaga = 1; countSh_Balenciaga < arraySku_ShBalenciaga.length; ++countSh_Balenciaga) {
    ShowPrice(arrayPrice_ShBalenciaga[countSh_Balenciaga]);
    $('#mainShoes_Balenciaga').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/balenciaga/' + arraySku_ShBalenciaga[countSh_Balenciaga] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/balenciaga/' + arraySku_ShBalenciaga[countSh_Balenciaga] + '-1.jpg" alt="' + arrayName_ShBalenciaga[countSh_Balenciaga] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Balenciaga</div>' +
        '<div class="show__box--name">' + arrayName_ShBalenciaga[countSh_Balenciaga] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
for (let countSh_Converse = 1; countSh_Converse < arraySku_ShConverse.length; ++countSh_Converse) {
    ShowPrice(arrayPrice_ShConverse[countSh_Converse]);
    $('#mainShoes_Converse').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/converse/' + arraySku_ShConverse[countSh_Converse] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/converse/' + arraySku_ShConverse[countSh_Converse] + '-1.jpg" alt="' + arrayName_ShConverse[countSh_Converse] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Converse</div>' +
        '<div class="show__box--name">' + arrayName_ShConverse[countSh_Converse] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
for (let countSh_Vans = 1; countSh_Vans < arraySku_ShVans.length; ++countSh_Vans) {
    ShowPrice(arrayPrice_ShVans[countSh_Vans]);
    $('#mainShoes_Vans').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/vans/' + arraySku_ShVans[countSh_Vans] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/vans/' + arraySku_ShVans[countSh_Vans] + '-1.jpg" alt="' + arrayName_ShVans[countSh_Vans] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Vans</div>' +
        '<div class="show__box--name">' + arrayName_ShVans[countSh_Vans] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
for (let countSh_Other = 1; countSh_Other < arraySku_ShOther.length; ++countSh_Other) {
    ShowPrice(arrayPrice_ShOther[countSh_Other]);
    $('#mainShoes_Other').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/other/' + arraySku_ShOther[countSh_Other] + '.html">' +
        '<img class="show__box--img" src="../img/shoes/other/' + arraySku_ShOther[countSh_Other] + '-1.jpg" alt="' + arrayName_ShOther[countSh_Other] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Other</div>' +
        '<div class="show__box--name">' + arrayName_ShOther[countSh_Other] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
// for (let countSh_🏩 = 1; countSh_🏩 < arraySku_Sh🏩.length; ++countSh_🏩) {
//     ShowPrice(arrayPrice_Sh🏩[countSh_🏩]);
//     $('#mainShoes_🏩').append(
//         '<div class="show__container">' +
//         '<a class="show__box" href="../shoes/product/🌈/' + arraySku_Sh🏩[countSh_🏩] + '.html">' +
//         '<img class="show__box--img" src="../img/shoes/🌈/' + arraySku_Sh🏩[countSh_🏩] + '-1.jpg" alt="' + arrayName_Sh🏩[countSh_🏩] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
//         '<div class="show__box--brand">🏩</div>' +
//         '<div class="show__box--name">' + arrayName_Sh🏩[countSh_🏩] + '</div>' +
//         '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
//         '<div class="show__box--price">' +
//         '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
//         '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
//         '</div>' +
//         '</a>' +
//         '</div>'
//     );
// }
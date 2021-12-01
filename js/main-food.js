for (let countFo_Dried = 1; countFo_Dried < arraySku_FoDried.length; ++countFo_Dried) {
    ShowPrice(arrayPrice_FoDried[countFo_Dried]);
    $('#mainFood_Dried').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../food/product/dried/' + arraySku_FoDried[countFo_Dried] + '.html">' +
        '<img class="show__box--img" src="../img/food/dried/' + arraySku_FoDried[countFo_Dried] + '-1.jpg" alt="' + arrayName_FoDried[countFo_Dried] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Dried</div>' +
        '<div class="show__box--name">' + arrayName_FoDried[countFo_Dried] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
for (let countFo_Endakedy = 1; countFo_Endakedy < arraySku_FoEndakedy.length; ++countFo_Endakedy) {
    ShowPrice(arrayPrice_FoEndakedy[countFo_Endakedy]);
    $('#mainFood_Endakedy').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../food/product/endakedy/' + arraySku_FoEndakedy[countFo_Endakedy] + '.html">' +
        '<img class="show__box--img" src="../img/food/endakedy/' + arraySku_FoEndakedy[countFo_Endakedy] + '-1.jpg" alt="' + arrayName_FoEndakedy[countFo_Endakedy] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Endakedy</div>' +
        '<div class="show__box--name">' + arrayName_FoEndakedy[countFo_Endakedy] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
// for (let countFo_🏩 = 1; countFo_🏩 < arraySku_Fo🏩.length; ++countFo_🏩) {
//     ShowPrice(arrayPrice_Fo🏩[countFo_🏩]);
//     $('#mainFood_🏩').append(
//         '<div class="show__container">' +
//         '<a class="show__box" href="../food/product/🌈/' + arraySku_Fo🏩[countFo_🏩] + '.html">' +
//         '<img class="show__box--img" src="../img/food/🌈/' + arraySku_Fo🏩[countFo_🏩] + '-1.jpg" alt="' + arrayName_Fo🏩[countFo_🏩] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
//         '<div class="show__box--brand">🏩</div>' +
//         '<div class="show__box--name">' + arrayName_Fo🏩[countFo_🏩] + '</div>' +
//         '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
//         '<div class="show__box--price">' +
//         '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
//         '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
//         '</div>' +
//         '</a>' +
//         '</div>'
//     );
// }
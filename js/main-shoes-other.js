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
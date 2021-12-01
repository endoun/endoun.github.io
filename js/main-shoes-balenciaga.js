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
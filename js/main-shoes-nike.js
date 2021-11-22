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
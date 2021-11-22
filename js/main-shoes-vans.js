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
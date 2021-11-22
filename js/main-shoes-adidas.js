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
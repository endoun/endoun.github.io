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
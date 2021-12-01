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
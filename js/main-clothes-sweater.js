for (let countCl_Sweater = 1; countCl_Sweater < arraySku_ClSweater.length; ++countCl_Sweater) {
    ShowPrice(arrayPrice_ClSweater[countCl_Sweater]);
    $('#mainClothes_Sweater').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/sweater/' + arraySku_ClSweater[countCl_Sweater] + '.html">' +
        '<img class="show__box--img" src="../img/clothes/sweater/' + arraySku_ClSweater[countCl_Sweater] + '-1.jpg" alt="' + arrayName_ClSweater[countCl_Sweater] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">Sweater</div>' +
        '<div class="show__box--name">' + arrayName_ClSweater[countCl_Sweater] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
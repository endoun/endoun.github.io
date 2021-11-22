for (let countFo_Dried = 1; countFo_Dried < arraySku_FoDried.length; ++countFo_Dried) {
    ShowPrice(arrayPrice_FoDried[countFo_Dried]);
    $('#mainFood_Dried').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../food/product/Dried/' + arraySku_FoDried[countFo_Dried] + '.html">' +
        '<img class="show__box--img" src="../img/food/Dried/' + arraySku_FoDried[countFo_Dried] + '-1.jpg" alt="' + arrayName_FoDried[countFo_Dried] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
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
for (let countCl_Tshirt = 1; countCl_Tshirt < arraySku_ClTshirt.length; ++countCl_Tshirt) {
    ShowPrice(arrayPrice_ClTshirt[countCl_Tshirt]);
    $('#mainClothes_Tshirt').append(
        '<div class="show__container">' +
        '<a class="show__box" href="../shoes/product/tshirt/' + arraySku_ClTshirt[countCl_Tshirt] + '.html">' +
        '<img class="show__box--img" src="../img/clothes/tshirt/' + arraySku_ClTshirt[countCl_Tshirt] + '-1.jpg" alt="' + arrayName_ClTshirt[countCl_Tshirt] + '" onerror="this.src=&#39;img/loading-pro.gif&#39;"/>' +
        '<div class="show__box--brand">T-Shirt</div>' +
        '<div class="show__box--name">' + arrayName_ClTshirt[countCl_Tshirt] + '</div>' +
        '<div class="show__box--sale-off">&nbsp;-' + showSaleOff + '&nbsp;</div>' +
        '<div class="show__box--price">' +
        '<strong class="show__price--cost">&nbsp;' + showPrice_Dot + '&nbsp;</strong>' +
        '<strong class="show__price--saled">&nbsp;' + showPriceSale_Dot + 'đ&nbsp;</strong>' +
        '</div>' +
        '</a>' +
        '</div>'
    );
}
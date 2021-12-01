var product = {
    ed0000: {
        brand: 'ENDOUN',
        sku: 'ed0000',
        name: 'ENDOUN - Darkness begins to shine',
        price: 13082021
    },
    shad0001: {
        brand: 'adidas',
        sku: 'shad0001',
        name: '',
        price: 745000
    },
    shad0002: {
        brand: 'adidas',
        sku: 'shad0001',
        name: 'Yeezy 350 Xám',
        price: 485000
    },
    shad0003: {
        brand: 'adidas',
        sku: 'shot0001',
        name: 'MLB Gót Xanh Bóng',
        price: 345000
    }
};

    // var pri = ShowPrice(pro.name);
    Price_Dot(product.shad0001.price);
function show(pro) {
    return `
        <div class="show__container">
            <a class="show__box" href="../../../${pro.brand}/product/${pro.sku}.html"> 
                <img class="show__box--img" src="../img/shoes/${pro.brand}/${pro.sku}-1.jpg" alt="${pro.name}" onerror="this.src=&#39;img/img-share.png;"/> 
                <div class="show__box--brand">${pro.brand.toUpperCase()}</div> 
                <div class="show__box--name">${pro.name}</div> 
                <div class="show__box--sale-off">&nbsp;${pro.price}&nbsp;</div> 
                <div class="show__box--price"> 
                    <strong class="show__price--cost">&nbsp;&nbsp;</strong> 
                    <strong class="show__price--saled">&nbsp;${pro.price}đ&nbsp;</strong> 
                </div> 
            </a> 
        </div>
    `
}
var sku = 'sh0001';
// for (let ii = 0; ii < 3; ++ii) {
if (Object.keys(product).indexOf(sku) > -1) {
document.getElementById('showAll').innerHTML = showPrice_Dot;
}else {
document.getElementById('showAll').innerHTML = Object.keys(product).indexOf("sh0003");
    
}
// }
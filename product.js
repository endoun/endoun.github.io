var product ={
    sh0001: {
        brand: 'nike',
        sku: 'shni0001',
        name: 'Jordan 1 Milian',
        price: 745000
    },
    sh0002: {
        brand: 'adidas',
        sku: 'shad0001',
        name: 'Yeezy 350 Xám',
        price: 485000
    },
    sh0003: {
        brand: 'other',
        sku: 'shot0001',
        name: 'MLB Gót Xanh Bóng',
        price: 345000
    }
};

    // var pri = ShowPrice(pro.name);
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
for (let ii = 0; ii < product.lenght; ++ii) {
document.getElementById('showAll').innerHTML = product.sh000`${ii}`.name;
}
// Giảm toàn sàn bao nhiêu ( % )
var proSalePerAll = 0;
var proSalePer = 0;

// Giảm toàn sàn bao nhiêu ( k )
var proSaleMoneyAll = 15000;
var proSaleMoney = 0;

var showPrice='';var showPrice_Dot='';var showPriceSale='';var showPriceSale_Dot='';var showInitial=0;var showLast=0;var costSaleMon=0;var costSalePer=0;var showSaleOff='';var aaaa=0
var thisMonth = (new Date).getMonth();
var now_mili = (new Date).getTime();
var total_Nearsec = new Date(Dark_Tuesday[thisMonth] + timeNear).getTime();
var total_lastsec = new Date(Dark_Tuesday[thisMonth] + timeLast).getTime();
if ((now_mili >= total_Nearsec) && (now_mili < total_lastsec)) {
    var proSaleMoneyAll = 35000; 
}
if(proSaleMoneyAll!=0){costSaleMon=proSaleMoneyAll;showSaleOff=proSaleMoneyAll.toString().slice(0,-3)+'k'}else{if(proSalePerAll!=0){costSalePer=proSalePerAll;showSaleOff=proSalePerAll+'%'}else{if(proSaleMoney!=0){costSaleMon=proSaleMoney;showSaleOff=proSaleMoney.toString().slice(0,-3)+'k'}else{if(proSalePer!=0){costSalePer=proSalePer;showSaleOff=proSalePer+'%'}}}}
if((proSaleMoneyAll==0)&&(proSaleMoney==0)&&(proSalePerAll==0)&&(proSalePer==0)){showSaleOff=''}
var Price_Dot=function dotPrice(showInitial,showLast){switch(showInitial.toString().length,showLast.toString().length){case 4:{showPrice_Dot=showInitial.toString().slice(0,1)+'.'+showInitial.toString().slice(1,showInitial.toString().length);showPriceSale_Dot=showLast.toString().slice(0,1)+'.'+showLast.toString().slice(1,showLast.toString().length);break}
case 5:{showPrice_Dot=showInitial.toString().slice(0,2)+'.'+showInitial.toString().slice(2,showInitial.toString().length);showPriceSale_Dot=showLast.toString().slice(0,2)+'.'+showLast.toString().slice(2,showLast.toString().length);break}
case 6:{showPrice_Dot=showInitial.toString().slice(0,3)+'.'+showInitial.toString().slice(3,showInitial.toString().length);showPriceSale_Dot=showLast.toString().slice(0,3)+'.'+showLast.toString().slice(3,showLast.toString().length);break}
case 7:{showPrice_Dot=showInitial.toString().slice(0,1)+'.'+showInitial.toString().slice(1,4)+'.'+showInitial.toString().slice(4,showInitial.toString().length);showPriceSale_Dot=showLast.toString().slice(0,1)+'.'+showLast.toString().slice(1,4)+'.'+showLast.toString().slice(4,showLast.toString().length);break}
case 8:{showPrice_Dot=showInitial.toString().slice(0,2)+'.'+showInitial.toString().slice(2,5)+'.'+showInitial.toString().slice(5,showInitial.toString().length);showPriceSale_Dot=showLast.toString().slice(0,2)+'.'+showLast.toString().slice(2,5)+'.'+showLast.toString().slice(5,showLast.toString().length);break}
case 9:{showPrice_Dot=showInitial.toString().slice(0,3)+'.'+showInitial.toString().slice(3,6)+'.'+showInitial.toString().slice(6,showInitial.toString().length);showPriceSale_Dot=showLast.toString().slice(0,3)+'.'+showLast.toString().slice(3,6)+'.'+showLast.toString().slice(6,showLast.toString().length);break}}}
var ShowPrice=function showPrice(aaaa){if((proSaleMoneyAll!=0)||(proSaleMoney!=0)){Price_Dot(aaaa,aaaa-costSaleMon)}else if((proSalePerAll!=0)||(proSalePer!=0)){Price_Dot(aaaa,(aaaa-aaaa*costSalePer/100))}else{Price_Dot(aaaa,aaaa)}}
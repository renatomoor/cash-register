setInterval(function() {
    Object.keys(productsForSell).map(function(key) {
        if ( productsForSell[key].inList >= 0 && $lastValuesList[key] !== productsForSell[key].inList) {
            $lastValuesList[key] = productsForSell[key].inList;
            $("#list"+productsForSell[key].name).html(productsForSell[key].inList);
            $("#totalActuelList").html('<h5><b>'+totalActualInList(key)+' Fr</h5><b>');

        }
        if ( productsForSell[key].inSell >= 0 && $lastValuesPay[key] !== productsForSell[key].inSell) {
            $lastValuesPay[key] = productsForSell[key].inSell;
            $("#pay"+productsForSell[key].name).html(productsForSell[key].inSell);
        }

    });
}, 200);

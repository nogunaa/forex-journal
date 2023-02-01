function openForm() {
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};

function sendForm() {
    document.getElementById("myForm").style.display = "none";
};

// Currency search 

var searchTerm = "";
var forexPairs = {"USDAED":3.672985,"USDAFN":87.505007,"USDALL":114.34976,"USDAMD":395.180062,"USDANG":1.803101,"USDAOA":509.27905,"USDARS":163.171299,"USDAUD":1.51425,"USDAWG":1.8025,"USDAZN":1.701203,"USDBAM":1.911932,"USDBBD":2.020079,"USDBDT":103.078359,"USDBGN":1.909436,"USDBHD":0.376913,"USDBIF":2054,"USDBMD":1,"USDBND":1.383409,"USDBOB":6.913234,"USDBRL":5.319697,"USDBSD":1.000508,"USDBTC":0.000063420459,"USDBTN":81.813623,"USDBWP":13.044205,"USDBYN":2.526296,"USDBYR":19600,"USDBZD":2.016697,"USDCAD":1.34541,"USDCDF":2048.999687,"USDCHF":0.959197,"USDCLF":0.034143,"USDCLP":942.10141,"USDCNY":7.165299,"USDCOP":4948,"USDCRC":607.55831,"USDCUC":1,"USDCUP":26.5,"USDCVE":108.125021,"USDCZK":23.752007,"USDDJF":177.71998,"USDDKK":7.264202,"USDDOP":54.449943,"USDDZD":139.370988,"USDEGP":24.523605,"USDERN":15,"USDETB":52.950042,"USDEUR":0.976705,"USDFJD":2.243203,"USDFKP":0.841106,"USDGBP":0.846015,"USDGEL":2.685013,"USDGGP":0.841106,"USDGHS":14.64993,"USDGIP":0.841106,"USDGMD":61.570412,"USDGNF":8800.000328,"USDGTQ":7.803824,"USDGYD":209.310055,"USDHKD":7.80315,"USDHNL":24.824999,"USDHRK":7.364901,"USDHTG":137.546923,"USDHUF":399.390176,"USDIDR":15742.1,"USDILS":3.47546,"USDIMP":0.841106,"USDINR":81.750296,"USDIQD":1460.5,"USDIRR":42300.00022,"USDISK":143.893911,"USDJEP":0.841106,"USDJMD":153.977595,"USDJOD":0.709903,"USDJPY":142.077498,"USDKES":122.199823,"USDKGS":84.413051,"USDKHR":4137.999922,"USDKMF":480.649786,"USDKPW":900,"USDKRW":1359.705525,"USDKWD":0.30825,"USDKYD":0.833659,"USDKZT":463.791351,"USDLAK":16929.999885,"USDLBP":1522.999798,"USDLKR":367.672584,"USDLRD":154.000422,"USDLSL":17.330268,"USDLTL":2.95274,"USDLVL":0.60489,"USDLYD":4.915051,"USDMAD":10.782501,"USDMDL":19.214437,"USDMGA":4320.000516,"USDMKD":60.120993,"USDMMK":2100.985552,"USDMNT":3413.841258,"USDMOP":8.046101,"USDMRO":356.999828,"USDMUR":43.795692,"USDMVR":15.405469,"USDMWK":1023.502671,"USDMXN":19.543897,"USDMYR":4.578981,"USDMZN":63.829728,"USDNAD":17.32978,"USDNGN":442.989812,"USDNIO":36.00002,"USDNOK":10.270805,"USDNPR":130.901875,"USDNZD":1.63928,"USDOMR":0.385039,"USDPAB":1.000411,"USDPEN":3.832503,"USDPGK":3.520192,"USDPHP":57.420017,"USDPKR":223.750231,"USDPLN":4.58815,"USDPYG":7167.337921,"USDQAR":3.640505,"USDRON":4.823901,"USDRSD":114.560248,"USDRUB":61.249684,"USDRWF":1055,"USDSAR":3.758367,"USDSBD":8.230592,"USDSCR":14.380106,"USDSDG":569.490866,"USDSEK":10.716299,"USDSGD":1.38156,"USDSHP":1.377395,"USDSLE":18.090034,"USDSLL":18180.000016,"USDSOS":568.497058,"USDSRD":30.771505,"USDSTD":20697.981008,"USDSVC":8.754008,"USDSYP":2512.540623,"USDSZL":17.32974,"USDTHB":36.302206,"USDTJS":9.994917,"USDTMT":3.5,"USDTND":3.254979,"USDTOP":2.37065,"USDTRY":18.622202,"USDTTD":6.790749,"USDTWD":31.224902,"USDTZS":2333.00017,"USDUAH":36.769375,"USDUGX":3748.826934,"USDUYU":40.154255,"USDUZS":11200.000254,"USDVEF":977525.04373,"USDVES":9.966501,"USDVND":24842.5,"USDVUV":118.721665,"USDWST":2.785505,"USDXAF":641.221725,"USDXAG":0.047923,"USDXAU":0.000575,"USDXCD":2.70255,"USDXDR":0.762283,"USDXOF":638.511502,"USDXPF":12495.749703,"USDYER":137.750583,"USDZAR":17.3192,"USDZMK":9001.193403,"USDZMW":16.658129,"USDZWL":321.999592};

function displayUSDPairs() {
    if (!forexPairs) {
        return;
    }

    // const usdPairsContainer = document.getElementById("usd-pairs");
    // let ul = document.createElement('ul');

    // for (let pairNameKey in forexPairs) {
    //     let li = document.createElement('li');

    //     let pairName = document.createElement('span');
    //     pairName.classList.add('pair-name');
    //     pairName.append(pairNameKey);
    //     li.appendChild(pairName);

    //     let pairPrice = document.createElement('span');
    //     pairPrice.classList.add('pair-price');
    //     pairPrice.append("$" + forexPairs[pairNameKey].toFixed(2));
    //     li.appendChild(pairPrice);

    //     ul.appendChild(li);
    // }

    // usdPairsContainer.appendChild(ul);

    setTimeout(() => {
        let usdPairsContainer = document.getElementById('usd-pairs');
        usdPairsContainer.scrollBy({ 
            right: 500, 
            top: 0, 
            behavior: 'smooth'
        });
        console.log("scrolling....");
    }, 2000);
}

function getForexResults() {
    const apiKey = '01bae1f940a334fe9e296b3924b4e6be';
    const urlString = `http://api.currencylayer.com/live?access_key=${apiKey}`

    fetch(urlString, {
        method: "get"
    })
    .then(response => response.json())
    .then(jsonData => {
        forexPairs = jsonData.quotes;
        console.log("forexPairs:", forexPairs);
        displayUSDPairs();
    })
    .catch(error => {
       //error block
        console.log("error:", error);
    });
}
// execute function and get forex results right away on browser load
// getForexResults();
displayUSDPairs();



/* Search Functionality */

const searchInput = document.getElementById('forex-ticker-input');
searchInput.addEventListener('input', onSearchInput);

function onSearchInput(e) {
    e.target.value = e.target.value.toUpperCase();
}
const submitForex = document.getElementById("submit-forex");
submitForex.addEventListener("click", function(event) {
    event.preventDefault();

    searchTerm = document.getElementById("forex-ticker-input").value;
    console.log("searchTerm:", searchTerm);

    searchTicker(searchTerm);
});

function searchTicker(forexPairName) {
    const forexPairPrice = forexPairs[forexPairName];
    displayResults(forexPairName, forexPairPrice);
};

function displayResults(name, price) {
    const forexResult = document.getElementById("forex-result");
    forexResult.classList.remove('error');

    if (!name || !price) {
        forexResult.innerText = `Pair ${name} not found`;
        forexResult.classList.add('error');
        return;
    }
    
    forexResult.innerText = `Price for pair ${name} is $${price.toFixed(2)}`;
}




var name = "Asterix";
var place = "Lviv";
var time = "11";

var eur = 30.65;
var usd = 25.74;



function inputData() {
  var ourEvent = prompt( "Please enter event type", "exhibition" );
   if (ourEvent != null ) {
     console.log(name + " want vist " + ourEvent + " in " + place + " at " + time +" o'clock" );
   }
}

function convert() {
  var grn = document.getElementById('grn-ua').value;
  var euro = grn/parseFloat(eur);
  var usa = grn/parseFloat(usd);
  var resultEuro = Math.round(euro).toFixed(1);
  var resultUSD = Math.round(usa).toFixed(1);

  if(euro & usa > 0){
    document.getElementById("result-eu").value = resultEuro;
    document.getElementById("result-us").value = resultUSD;
  }
}

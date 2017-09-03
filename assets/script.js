var name = "Asterix";
var place = "Lviv";
var time = "11";

function inputData() {
  var ourEvent = prompt( "Please enter event type", "exhibition" );
   if (ourEvent != null ) {
     console.log(name + " want vist " + ourEvent + " in " + place + " at " + time +" o'clock" );
   }
}

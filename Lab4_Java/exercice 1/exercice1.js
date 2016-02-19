
var nombre1 = -1;

function test1() {
	
    nombre1 = nombre1 + 1;
 //   alert(nombre1);
    var divData = document.getElementById("showCount").innerHTML =
"Vous avez cliqué sur le bouton " +nombre1 + "  fois. " ;

}

test1();
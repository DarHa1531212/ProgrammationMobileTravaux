function exercice3(){


var a = Math.floor((Math.random() * 20) + 1);
alert(a);

	nombre1=prompt("devinez le nombre secret"); 
	
while (a !== nombre1) {
		nombre1=prompt("devinez le nombre secret"); 
	
	if (nombre1 <a)
	{
		
		alert("le nombre secret est plus haut");
	}
	
		else if (nombre1 >a)
	{
		
		alert("le nombre secret est plus bas");
	}
	else {
		
		alert ("vous avez trouvé le nombre!");
		
	}
	
}
}
exercice3();
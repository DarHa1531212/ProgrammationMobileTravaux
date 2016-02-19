	//alert('test');
	
	function init()
{
var positionX = document.getElementById("x");
var positionY = document.getElementById("y");
	document.addEventListener("mousemove", function(e)


	{
		positionX.innerHTML = "Position de la souris en X :" + e.clientX;
	})
	document.addEventListener("mousemove", function(e)


	{
		positionY.innerHTML = "Position de la souris en Y :" + e.clientY;
	})


}
init();
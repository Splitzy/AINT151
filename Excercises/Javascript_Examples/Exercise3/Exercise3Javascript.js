var isLightOn = false;
var x;
function ToggleLight()
{
	if(isLightOn == true)
	{
		document.getElementById('lightBulb').src = "img/bulb-off.png";
		isLightOn = false;
	}
	else
	{
		document.getElementById('lightBulb').src = "img/bulb-on.png";
		isLighton = true;
	}
}


function AddNumbers(numA,numB)
{
	x = numA + numB;
	document.getElementById('numbers').innerHTML = x;
}

var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for (var i = 0; i < weaponsArray.length; i++)
	{
		var weaponTag = "<option value='" + i +"'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += weaponTag;
	}
}


function SelectWeapon()
{
	if (document.forms[0]["weapons"].value == 0)
	{
		document.getElementById("currentWeapon").innerHTML = "Broadsword";
	}
	else if (document.forms[0]["weapons"].value == 1)
	{
		document.getElementById("currentWeapon").innerHTML = "Crossbow";
	}
	else
	{
		document.getElementById("currentWeapon").innerHTML = "Magic Staff";
	}
}

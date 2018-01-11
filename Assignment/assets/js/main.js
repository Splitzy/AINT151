function GameSetup()
{
	localStorage.setItem("playername", document.forms[0]["playerName"].value);
	localStorage.setItem("playerrace", document.forms[0]["playerRace"].value);
	localStorage.setItem("playergender", document.forms[0]["playerGender"].value);
}

function OnLoad()
{
	SelectLevel(0);
}

function SelectLevel(gameIndex)
{
	document.getElementById('game_img').src = "assets/img/" + gameArray[gameIndex].img;
	document.getElementById('game_text').innerHTML = gameArray[gameIndex].text;
	document.getElementById('game_choices').innerHTML = " ";
	document.getElementById('game').backgroundcolor = gameArray[gameIndex].color;

	for (var i=0; i < gameArray[gameIndex].choices.length; i++)
	{
		var gameArrayChoices =  "<input type='button' value='"+ gameArray[gameIndex].choices[i].text +"' onClick='SelectLevel("+ gameArray[gameIndex].choices[i].index + ")'></input>";
		document.getElementById('game_choices').innerHTML += gameArrayChoices;
	}
}

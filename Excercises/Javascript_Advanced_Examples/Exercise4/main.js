function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
	document.getElementById('roomChoices').innerHTML = " ";

	for (var i=0; i < roomArray[roomIndex].choices.length; i++)
	{
		var roomArrayChoices =  "<input type='button' value='"+ roomArray[roomIndex].choices[i].text +"' onClick='SelectRoom("+ roomArray[roomIndex].choices[i].index + ")'></input>";
		document.getElementById('roomChoices').innerHTML += roomArrayChoices;
	}
}

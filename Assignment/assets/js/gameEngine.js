var playerName = localStorage.getItem("playername");
var playerRace = localStorage.getItem("playerrace");
var playerGender = localStorage.getItem("playergender");

var gameArray = [
	{
		img:"start",
		text:"Your name is " + playerName + " and you are on a quest to find the mystical gem that is hidden in the woods. You are only armed with a torch and you are ready to start your adventure.",
		choices:[
			{
				text:"Enter the woods",
				index:1
			}
		]
	},
	{
		img:'woods_entrance',
		text:"You stand in the entrance of the woods, as soon as you stepped into the woods you feel a sense of lingering danger around you... </br> There are 3 paths in front of you, which one will you take?",
		choices:[
			{
				text:'Go North',
				index:2
			},
			{
				text:'Go East',
				index:3
			},
			{
				text:'Go West',
				index:4
			}
		]
	},
	{
		img:'north',
		text:"You walk for only a few minutes until you see a river but however you quickly notice that this isn't a river... it's a rapid! You decide it's too dangerous to cross.",
		choices:[
			{
				text:'Go back',
				index:1
			}
		]
	},
	{
		img:"clearing",
		text:"You stand in a clearing and you notice a small and quaint cottage in the middle of you, the sun shines onto the house like it's a beacon of hope.",
		choices:[
			{
				text:"Approach the house",
				index:5
			}
		]
	},
	{
		img:"west",
		text:"You walk for only a few minutes until you see a giant hole that looks like it's too big to jump across. You decide it's too risky to try jumping over it.",
		choices:[
			{
				text:"Go back",
				index:1
			}
		]
	}

]

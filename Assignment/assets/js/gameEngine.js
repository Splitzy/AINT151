var playerName = localStorage.getItem("playername");
var playerRace = localStorage.getItem("playerrace");
var playerGender = localStorage.getItem("playergender");

var gameArray = [
	{
		img:"test.png",
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
	},
	{
		img:"cottage door",
		text: "You walk up to the door and knock on it, someone opens it to reveal themselves as a blue human-like wolf. </br> 'O hi there. You must be lost, come on in!'",
		choices:[
			{
				text:"Enter the cottage",
				index: 6
			}
		]
	},
	{
		img:"cottage living room",
		text: "You walk inside and sees a lovely and rustic interior of the cottage. 'Please sit down!' The blue wolf says. 'Feel free to look around if you want! Just not in my room though...'",
		choices:[
			{
				text:"Go upstairs",
				index: 7
			},
			{
				text:"Go to the kitchen",
				index: 8
			}
		]
	},
	{
		img: "cottage upstairs",
		text: "You walk up the stairs and into the corridor, you see the wolf's bedroom at the end of the corridor but you also notice the attic door slightly ajar.",
		choices: [
			{
				text:"Go to the bedroom",
				index:9
			},
			{
				text: "Go to the attic",
				index: 10
			},
			{
				text: "Go back downstairs",
				index: 6
			}
		]
	},
	{
		img: "cottage kitchen",
		text: "You enter the kitchen and as soon as you walk in, you smell something so delicious! 'Oh I'm cooking some roast beef with roast potatoes! With my own special gravy~!' The wolf responds.",
		choices: [
			{
				 text:"Go back to the living room",
				 index: 6
			}
		]
	},
	{
		img: "Cottage bedroom",
		text: "You walk into the wolf's bedroom, you see a nice comfy bed and a lovely wooden chest by the foot of the bed.",
		choices: [
			{
				text: "Open the chest",
				index: 11
			},
			{
				text: "Leave his room",
				index: 7
			}
		]
	},
	{
		img: "Cottage Attic",
		text: "You open the attic door and climb up the ladder into the dusty attic, full of old stuff and spiders. You can also see a window as well.",
		choices: [
			{
				text: "Leave the attic",
				index: 7
			},
			{
				text: "Approach the window",
				index: 12
			}
		]
	},
	{
		img: "cottage chest",
		text: "You crouch down and open the chest and uh... uh... </br> </br> It's best to ignore what you just saw.",
		choices: [
			{
				text: "Leave his room",
				index: 7
			}
		]
	},
	{
		img: "cottage window",
		text: "You walk up to the window and look outside. You see the other side of the woods but you notice a pile of dirt in the middle of the clearing with a shovel stuck in it.",
		choices: [
			{
				text: "Investigate the dirt mound",
				index: 13
			}
		]
	},
	{
		img: "dirt mound",
		text: "You leave the attic and the cottage as you approach the dirt mound. You wonder why there's a random dirt mound in the middle of the clearing. You notice a flock of birds fly into the woods as well.",
		choices: [
			{
				text: "Dig the mound",
				index: 14
			}
		]
	}
]

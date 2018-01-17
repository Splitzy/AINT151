var playerName = localStorage.getItem("playername");
var playerRace = localStorage.getItem("playerrace");
var playerGender = localStorage.getItem("playergender");

var gameArray = [
	{
		img:"entrance.png",
		text:"Your name is " + playerName + " and you are on a quest to find the mystical gem that can grant any wish you have. It's said to be hidden in the woods with the wizard that stole it from the king. You are only armed with a torch and you are ready to start your adventure and to bring back the gem to its rightful owner and from the nice reward money you'll get as well.",
		choices:[
			{
				text:"Enter the woods",
				index:1
			}
		]
	},
	{
		img:'forest.jpg',
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
		img:'river.jpg',
		text:"You walk for only a few minutes until you see a river but however you quickly notice that this isn't a river... it's a rapid! You decide it's too dangerous to cross.",
		choices:[
			{
				text:'Go back',
				index:1
			}
		]
	},
	{
		img:"cottage.png",
		text:"You stand in a clearing and you notice a small and quaint cottage in the middle of you, the sun shines onto the house like it's a beacon of hope.",
		choices:[
			{
				text:"Approach the house",
				index:5
			}
		]
	},
	{
		img:"cliff.png",
		text:"You walk for only a few minutes until you see a giant hole that looks like it's too big to jump across. You decide it's too risky to try jumping over it.",
		choices:[
			{
				text:"Go back",
				index:1
			}
		]
	},
	{
		img:"door.jpg",
		text: "You walk up to the door and knock on it, someone opens it to reveal themselves as a blue human-like wolf. </br> 'O hi there. You must be lost, come on in!'",
		choices:[
			{
				text:"Enter the cottage",
				index: 6
			}
		]
	},
	{
		img:"living room.png",
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
		img: "hallway.jpg",
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
		img: "kitchen.jpg",
		text: "You enter the kitchen and as soon as you walk in, you smell something so delicious! 'Oh I'm cooking some roast beef with roast potatoes! With my own special gravy~!' The wolf responds.",
		choices: [
			{
				 text:"Go back to the living room",
				 index: 6
			}
		]
	},
	{
		img: "bedroom.png",
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
		img: "Attic.png",
		text: "You open the attic door and climb up the ladder into the dusty attic, full of old stuff and spiders. You can also see a window looking out onto the backyard as well.",
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
		img: "chest.png",
		text: "You crouch down and open the chest and uh... uh... </br> </br> It's best to ignore what you just saw.",
		choices: [
			{
				text: "Leave his room",
				index: 7
			}
		]
	},
	{
		img: "window.jpg",
		text: "You walk up to the window and look outside. You see the other side of the woods but you notice a pile of dirt in the middle of the clearing with a shovel stuck in it.",
		choices: [
			{
				text: "Investigate the dirt mound",
				index: 13
			}
		]
	},
	{
		img: "dirt.jpg",
		text: "You leave the attic and the cottage as you approach the dirt mound. You wonder why there's a random dirt mound in the middle of the clearing. You notice a flock of birds fly into the woods as well.",
		choices: [
			{
				text: "Dig the mound",
				index: 14
			}
		]
	},
	{
		img: "hole.jpg",
		text: "You grab for the shovel and start digging, the blue wolf notices you outside while he was cooking and asks you what you were doing. ''I'm trying to see what you buried down here, hopefully it's just a dead dog or something like that...''' </br> </br> After what seemed like eternity, the ground suddenly gives and you find a underground tunnel system underneath the cottage. This must be the way out of here!",
		choices: [
			{
				text: "Jump into the hole",
				index: 15
			}
		]
	},
	{
	img: "tunnel.jpg",
	text: "Before you jumps in, the blue wolf stops you from doing so. ''HEY! What do you think you're doing? You going to leave me behind???'' The Wolf yells. </br> ''Wait? You want to come with me? Are you insane? It's dangerous out there! But if you must, I can't stop you from following me so...'', I respond to him just before jumping in. </br> </br> You land in the middle of the tunnel which is big enough for 2 people.",
	choices: [
		{
			text: "Follow the tunnel",
			index: 16
		}
	]
},
{
	img: "tunnel.jpg",
	text: "Before you go ahead, the wolf jumps down and quickly catches up to you. ''Hey don't forget about me!'', the wolf shouts at you in fear. You both start to head in the direction towards the heart of the woods. “And by the way, the name’s blue.” He mentioned to you as you head off into the tunnel. </br> </br> After walking in the tunnells for what seems like forever, you come across 3 different paths to go down.",
	choices: [
		{
			text: "Go down the left tunnel",
			index: 17
		},
		{
			text: "Go down the middle tunnel",
			index: 18
		},
		{
			text: "Go down the right tunnel",
			index: 19
		}
	]
},
{
	img: "cave.jpg",
	text: "You choose to go down the left tunnel and both of you slowly go through the path which starts to get slightly smaller and narrower. After a few minutes of travel, all of a sudden the tunnel floor collapses beneath your feet and fall down to a hard rocky surface with a crash! </br> </br> You slowly get up with no injuries on your body but however, Blue has suffered a nasty injury on his leg. ''Here let me help you!'' You say to him as you as you put him over your shoulders, looking around your surroundings as you do. You noticed a man-made bridge over in the distance, looks like there might be a town down here in this murky cave system.",
	choices: [
		{
			text: "Head to the bridge",
			index: 20
		}
	]
},
{
	img: "tunnel.jpg",
	text: "You choose to go down the middle tunnel but just as you were about to go down it, the wolf points his torch at the tunnel. ''Look it's a dead end. It's like whoever made this just gave up and went home.''",
	choices: [
		{
		text: "Return to the crossways",
		index: 16
		}
	]
},
{
	img: "tunnel.jpg",
	text: "You choose to go down the right tunnel. You and the wolf walk down it until suddenly the tunnel ceiling starts to crumble and collapse, you both run away as the right tunnel becomes blocked.",
	choices: [
		{
		text: "Return to the crossways",
		index: 16
		}
	]
},
{
	img: "bridge.jpg",
	text: "Despite the heavy weight of the wolf over your shoulders, you manage to get to the bridge but however there's a guard in the middle of the bridge blocking your way into the town. You place the wolf comfortably next to a pillar as you walk up to the guard to explain your situation. ''No outsiders can enter the town unless they defeat me in combat. Either you beat me or you die. Your choice.'' The guard explains to you in a gruff voice. </br> </br> Looks like you have no choice but to fight him.",
	choices: [
		{
			text: "Fight the Guard",
			index: 21
		}
	]
},
{
	img: "swing.png",
	text: "''Okay let's fight.'' you say as you raise your fists ready to attack. The guard pulls out his rather large sword and charges at you yelling! </br> </br> What do you do now?",
	choices: [
		{
			text: "Dodge Him",
			index: 22
		},
		{
			text: "Block his attack",
			index: 23
		},
		{
			text: "Do nothing",
			index: 24
		}
	]
},
{
	img: "game over.png",
	text: "You decide to dodge his attack but however, the guard swiftly predicts that you'll dodge and kicks you off the bridge and falls to your death! Game over!",
	choices: [
		{
			text: "Start the fight again",
			index: 21
		}
	]
},
{
	img: "sword attack.png",
	text: "You decide to block hs incoming attack which is a flying kick, you try to counter attack him but however he quickly recovers and does a sweeping kick to knock you down. </br> </br> ''ha.. you did well to block my attack but you're very unskilled. Prepare to die.'' He exclaims as he lifts his sword.",
	choices: [
		{
			text: "Roll out of the way",
			index: 25
		},
		{
			text: "Give up",
			index: 26
		}
	]
},
{
	img: "sword attack.png",
	text: "You do nothing as he does a flying kick to your chest, knocking you down instantly. ''Haha, you're nothing but a wimp, prepare to die coward!'' He exclaims as he lifts his sword.",
	choices: [
		{
			text: "Roll out of the way",
			index: 25
		},
		{
			text: "Give up",
			index: 26
		}
	]
},
{
	img: "sword attack.png",
	text: "You instinctively roll out of the way as he was about to plunge his sword. He stamps on your crotch to hold you down, this feels like it's the end of your journey as you look at the wolf lying next to the pillar...",
	choices: [
		{
			text: "goodbye...",
			index: 27
		}
	]
},
{
	img: "game over.png",
	text: "He plunges his sword into your chest multiple times as you slowly bleed out and die. Game Over.",
	choices: [
		{
			text: "Start the fight over",
			index: 21
		}
	]
},
{
	img: "old man.png",
	text: "''STOP RIGHT THERE!'' A voice bellows from the cave. The guard stops as he was about to finish the job when a bearded man comes from the town and walks up to the bridge. ''You on the ground, come with me and bring your friend too. I'll talk to the guard later about all of this.'' He calmly says as he begins to head back to the town.",
	choices: [
		{
			text: "Follow the bearded man",
			index: 28
		}
	]
},
{
	img: "test.png",
	text: "You take the wolf with you to the bearded man's house. ''Put him on the table right there.'' he says to you as you place the wolf down slowly. The bearded man pulls out a wand and casts a healing spell on the wolf. ''Wait a minute, are you the wizard from the legends?'' You say in awe. He simply nods and explains his side of the story and how he created this town as a way to hide from the king. </br> </br> He also explains that he no longer has the gem as it was stolen by a group of bandits ages ago. ''I can help you find it!'' You say to him. He nods again and points you to the door where you need to go first.",
	choices: [
		{
			text: "Leave the wizard's home",
			index: 29
		}
	]
},
{
	img: "underground town.jpg",
	text: "You exit the wizard's house and you see a very lively and busy town despite it being in a middle of a cave. You notice a blacksmith, a nice resturant near the edge and a small weapons store.",
	choices: [
		{
			text:"Go to the blacksmith",
			index: 30
		},
		{
			text: "Go to the restaurant",
			index: 31
		},
		{
			text: "Go to the weapons store",
			index: 32
		},
		{
			text: "Leave the town",
			index: 33
		}
	]
},
{
	img: "blacksmith.jpg",
	text: "You enter the blacksmiths with the man in charge working. He looks very busy.",
	choices: [
		{
			text: "Buy some armour",
			index: 34
		},
		{
			text: "Leave",
			index: 29
		}
	]
},
{
	img: "restaurant.jpg",
	text: "You enter the restaurant and a waiter comes up to you and asks if you're looking for something to eat.",
	choices: [
		{
			text: "Eat",
			index: 35
		},
		{
			text: "Leave",
			index: 29
		}
	]
},
{
	img: "sword store.jpg",
	text: "You walk up to the small weapons store and the man in charge greets you with a pleasant smile.",
	choices: [
		{
			text: "Buy a sword",
			index: 36
		},
		{
			text: "Leave",
			index: 29
		}
	]
},
{
	img: "apology.png",
	text: "As you're about to cross the bridge over, the guard stops you in your path but this time for a different reason. ''Look I know you hate me for what I did but I was just following orders, I didn't realize you were going to help with our problem with the bandits. I know you're mad but I'm sorry... Do you accept my apology?'' </br> </br> He puts his hand in front of you. Do you shake it?",
	choices: [
		{
			text: "Yes",
			index: 50
		},
		{
			text: "No",
			index: 51
		}
	]
},
{
	img: "armour.png",
	text: "You ask the blacksmith to make you some armour and he agrees. After a while you come back to the blacksmiths to collect your armor but however when you grab it, it falls into pieces. You just realized that you've been scammed...",
	choices: [
		{
			text: "Leave",
			index: 29
		}
	]
},
{
	img: "food.png",
	text: "You say yes as the waiter leads you to your table. After waiting for a bit, your food has arrived and it. is. delicious. It fills you up real good.",
	choices: [
		{
			text: "Leave",
			index: 29
		}
	]
},
{
	img: "sword.png",
	text: "You tell the store owner that you want to buy a sword. After he gives you one, you play around with it but however, the sword flies out of your hands and falls down the cliffside. Whoops.",
	choices: [
		{
			text: "Leave",
			index: 29
		}
	]
},
{
	img: "hideout.png",
	text: "You approach the hideout and you notice two bandits standing outside of the hideout. It looks like you can sneak past them, do a surprise attack or wait it out.",
	choices: [
		{
			text: "Sneak past them",
			index: 38
		},
		{
			text: "Wait for them to leave",
			index: 39
		},
		{
			text: "Attack them",
			index: 40
		}
	]
},
{
	img: "sneak.png",
	text: "You decide to sneak past them. You notice a crack in the cave wall as a way to sneak past the guards. You begin to squrim your way through the crack and once you get to the otherside, the guards have disappeared. Now it's your time to get inside!",
	choices: [
		{
			text: "Enter the hideout",
			index: 41
		}
	]
},
{
	img: "hide.png",
	text: "You decide to wait it out. You use a broken pillar as cover as you wait for the guards to leave their post. After a while, the guards notices and hears something and leave to investigate it. Now it's just chance to get inside.",
	choices: [
		{
			text: "Enter the hideout",
			index: 41
		}
	]
},
{
	img:"game over.png",
	text: "You charge at them yelling like the bridge guard did before but however, they draw their bows and an arrow pierces your head killing you instantly.",
	choices: [
		{
			text: "Start Again",
			index: 37
		}
	]
},
{
	img: "captured.png",
	text: "You open the entrance door and all of a sudden, a bear trap gets set off and your trapped in it. The guards come back and wonder what to do to you. ''Nah bring him to the leader, he must be looking for that gem we got in our possesion! He can see it before he dies! hahahaha!'' The guards ties you up and brings you inside.",
	choices: [
		{
			text: "Continue",
			index: 42
		}
	]
},
{
	img: "gem.png",
	text: "They take me to a large room where the leader sits there waiting for me, to my surprise it's a red human-like wolf who looks similar to Bluef. ''So looking for this?'' The red wolf says to me while holding the gem in his hand, ''Well this will be the only time you'll ever get to see it. Time to die you son of a bi-'' </br> </br> He gets punched in the face by blue who managed to get in without being noticed. The two then have an angry conversation together where it seems like they know each other... You also notice that the ropes wrapped around you up are weak.",
	choices: [
		{
			text: "Break free!",
			index: 43
		}
	]
},
{
	img: "escape.png",
	text: "You use every ounce of strength to break free from the restraints and quickly grab the gem from the red wolf's hands. ''BLUE! RUN! NOW!'' You shout at him as you run away from the leader's room. The blue wolf tells you how he managed to get in via the hideout walls. Looks like you have to ways of leaving this place.",
	choices: [
		{
			text: "Escape via the entrance",
			index: 44
		},
		{
			text: "Escape via the hideout walls",
			index: 45
		}
	]
},
{
	img: "choice.png",
	text: "You decide to go out where you came in, you and Blue run through the entrance and head off towards the bridge but however, red catches to you both. Blue shouts for you to throw the gem at him but you have other plans, what do you do now? ",
	choices: [
		{
			text: "Throw the gem to Blue",
			index: 46
		},
		{
			text: "Keep it",
			index: 47
		}
	]
},
{
	img: "lake.png",
	text: "You decide to go with blue and you head over the hideout walls. Once you escaped you notice a boat on a lake. ''Look we can escape through there!'' You shout as you and Blue run get in it and row towards the other side of the lake. The red wolf arrives too late and screams in anger, echoing across the cave.",
	choices: [
		{
			text: "Get to the other side",
			index: 48
		}
	]
},
{
	img: "abyss.png",
	text: "You throw the gem at Blue but however, red tackles blue as he grabs the gem and both of them fall of the bridge and down the bottomless pit. You collapse to your knees... you just lost your friend... he's dead...",
	choices: [
		{
			text: "End",
			index: 49
		}
	]
},
{
	img: "entrance.png",
	text: "You stop running and shout ''I wish I was away from all of this!!'' Everything goes black... </br> </br> You open your eyes and you realized you must be daydreaming but it doesn't matter now. Your name is" + playerName + " and you are on a quest to find the mystical gem that can grant any wish you have. It's said to be hidden in the woods with the wizard that stole it from the king. You are only armed with a torch and you are ready to start your adventure and to bring back the gem to its rightful owner and from the nice reward money you'll get as well.",
	choices: [
		{
			text: "End",
			index: 49
		}
	]
},
{
	img: "exit.png",
	text: "You manage to reach the other side of the lake and promotly shout at Blue. ''You know that red wolf!?'' </br> ''Yeah I do, he's my brother. I used to be an adventurer with him but after he got that gem, it corrupted him and banished me from his hideout then I met you at that rotten cottage and that's when I knew that you would be the one to bring that adventure back into my life.'' You look down at the gem as you think about what to do next. ''You know what, screw the gem. Let's go travelling together blue!'' You exclaim as you throw the gem into the lake. You grab blue's hand and both of you walk together out of the cave, ready for a new life together as the adventuring duo.",
	choices: [
		{
			text: "End",
			index: 49
		}
	]
},
{
	img: "banner.png",
	text: "You completed A Wonder Into the Woods! There are 3 endings, can you get them all?"
},
{
	img: "accepted.png",
	text: "You firmly shake his hand, accepting his apology. You smile at him as you head off towards the hideout.",
	choices: [
		{
			text: "Head to the hideout",
			index: 37
		}
	]
},
{
	img: "denied.png",
	text: "You ignore what you have to say to that brute and you head off towards the hideout with no haste.",
	choices: [
		{
			text: "Head to the hideout",
			index: 37
		}
	]
}
]

var playerName;
var playerColour;
var playerHealth;
var playerWeapon;

function CreatePlayer()
{
  playerName = document.getElementById('playername').value;
  playerColour = document.getElementById('playercolour').value;
  playerHealth = document.getElementById('playerhealth').value;
  playerWeapon = document.getElementById('playerweapon').value;

  document.getElementById('name').innerHTML = playerName;
  document.getElementById('colour').style.backgroundColor = playerColour;
  document.getElementById('health').innerHTML = playerHealth;

  if (playerWeapon == "1")
  {
    document.getElementById('weapon').innerHTML = 'Crossbow of much hurting';
  }
  else if (playerWeapon == "2")
  {
    document.getElementById('weapon').innerHTML = 'Broadsword of much hurting';
  }
  else
  {
    document.getElementById('weapon').innerHTML = 'Wand of amaze magics';
  }
}

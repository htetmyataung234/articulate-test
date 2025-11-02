function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5n2PAHKWzFP":
        Script1();
        break;
      case "6rIDEQXjEfa":
        Script2();
        break;
      case "5ifVgLWtmrg":
        Script3();
        break;
      case "6rk2lOp6bRi":
        Script4();
        break;
      case "6rB5zEA7eec":
        Script5();
        break;
      case "6Tzv60zr0FZ":
        Script6();
        break;
  }
}

function Script1()
{
  // Get a reference to the Storyline player

var player = GetPlayer()
var email = player.GetVar('gmail');
var result = !email.includes('@');

player.SetVar('isEmailValid', true);

}

function Script2()
{
  // Get a reference to the Storyline player

var player = GetPlayer()
var email = player.GetVar('gmail');
var result = !email.includes('@');

player.SetVar('isEmailValid', true);

}

function Script3()
{
  // Get a reference to the Storyline player

var player = GetPlayer()
var email = player.GetVar('gmail');
var result = !email.includes('@');

player.SetVar('isEmailValid', true);

}

function Script4()
{
  // Get a reference to the Storyline player

var player = GetPlayer()
var email = player.GetVar('gmail');
var result = !email.includes('@');

player.SetVar('isEmailValid', true);

}

function Script5()
{
  // Get a reference to the Storyline player
var player = GetPlayer();

// Get the password from Storyline
// (Make sure your variable is named 'userPassword' or change it here)
var pass = player.GetVar('ConfirmPass');

// --- Check all the rules ---

// 1. At least 8 characters
var hasLength = (pass.length >= 8);

// 2. Contains at least one letter (a-z or A-Z)
var hasLetter = /[a-zA-Z]/.test(pass);

// 3. Contains at least one number (0-9)
var hasNumber = /[0-9]/.test(pass);

// 4. Contains at least one symbol (anything not a letter or number)
var hasSymbol = /[^a-zA-Z0-9]/.test(pass);

// --- Check if ALL conditions are true ---
var isValid = (hasLength && hasLetter && hasNumber && hasSymbol);

// Set the 'isPassValid' Storyline variable
player.SetVar('isPassValid', true);
}

function Script6()
{
  // Get a reference to the Storyline player
var player = GetPlayer();

// Get the password from Storyline
// (Make sure your variable is named 'userPassword' or change it here)
var pass = player.GetVar('ConfirmPass');

// --- Check all the rules ---

// 1. At least 8 characters
var hasLength = (pass.length >= 8);

// 2. Contains at least one letter (a-z or A-Z)
var hasLetter = /[a-zA-Z]/.test(pass);

// 3. Contains at least one number (0-9)
var hasNumber = /[0-9]/.test(pass);

// 4. Contains at least one symbol (anything not a letter or number)
var hasSymbol = /[^a-zA-Z0-9]/.test(pass);

// --- Check if ALL conditions are true ---
var isValid = (hasLength && hasLetter && hasNumber && hasSymbol);

// Set the 'isPassValid' Storyline variable
player.SetVar('isPassValid', true);
}


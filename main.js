function menu()
{
// Setup the menu
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
// Prompt with the menu
let selection = Number(prompt(message))

if (selection == 1) {
    alert("Let's Play!")
    let difficulty = +prompt(`Select a difficulty:
        1 - Easy 
        2 - Medium
        3 - Hard`)

        alert("You selected: " + difficulty)

}   else if (selection == 2) {
    alert("You selected Options.")
}   else if (selection == 3) {
    alert("No new DLC at this time.")
}   else if (selection == 4) {
    alert("Everything is up to date.")
}    else if (selection == 5) {
    alert("Bye!")
}

}

function startgame() {


    let name = prompt("Please enter your name:")
    alert("Welcome, " + name + " to Haunted St. Matthew HS!");

    let choice = prompt("You can go to the (1) library, (2) basement or (3) autoshop.")

    if (choice == 1) {
        library()
        alert("GAME OVER")
        return;
    }

    if (choice == 2) {
        basement()
        alert("GAME OVER")
        return;
    }

    if (choice == 3) {
        autoshop()
        alert("GAME OVER")
        return;
    }
}

function library() {
let lib = prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?")
}

if (lib == 1) {
lib = alert("A ghost emerges from the book and scares you to death!")
}

if (lib == 2) {
lib = alert("You quietly leave the library and find the exit. You survive!")
}

function basement() {
    let base = alert = ("you have made an incorrect selection... The haunted building closes in on you and you die a slow and VERY painful death.")
}

function autoshop() {
    let auto = prompt("You hear strange noises. Do you (1) investigate or (2) run away?")
}
    if (auto == 1) {
        auto = alert("You discover a car trunk filled with candy!")
}
if (auto == 2) {
    auto = alert("You trip and fall... The ghost catches you!")
}
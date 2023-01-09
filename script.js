let userName = prompt("Welcome to GC mini golf! What is your name?");
let golfGame = alert("Hi, " + userName + "! Hit OK to get started!");

while (golfGame !==3 || golfGame !==6) {
    golfGame = prompt("Would you like to play 3 or 6 holes?");
    if (golfGame == 3 || golfGame == 6) break;
}
let total = 0;
if (golfGame == 3) {
    par = 9;
}
if (golfGame == 6) {
    par = 18;
}
for (let i=0; i < golfGame; i++) {
    let holeScore = Number(prompt("How many putts for hole " + [i+1] + "? (par is 3)") ); total += holeScore;
}
let score = total-par;


if (score == 0) {
    console.log("Good game, " + userName + ". Your total par was 0.");
}
if (score <0) {
    console.log("Great job, " + userName + "! Your total par was: " + score + ".");
}
if (score > 0) {
    console.log("Nice try, " +userName + "... Your total par was +" + score + ".");
}
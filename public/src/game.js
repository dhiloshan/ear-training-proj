import * as Tone from "https://cdn.skypack.dev/tone";

let synth;

async function init(){
    await Tone.start();
    if (!synth){
        synth = new Tone.Synth().toDestination();
    }
}

const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"];
const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];

let startGame = false;
let idx1, idx2, note1, note2;

document.querySelector(".game-container__button--start")?.addEventListener("click", async () => {
    console.log("start game");
    startGame = true;
    idx1 = Math.floor(Math.random() * naturalNotes.length);
    idx2 = Math.floor(Math.random() * naturalNotes.length);

    // Ensure idx1 <= idx2
    if(idx1 > idx2) {
        [idx1, idx2] = [idx2, idx1];
    }

    note1 = naturalNotes[idx1];
    note2 = naturalNotes[idx2];

    if (!note1 || !note2) {
        console.error("Invalid note:", note1, note2);
        return;
    }

    await init();
    synth.triggerAttackRelease(`${note1}4`, "4n");
    setTimeout(() => {
        synth.triggerAttackRelease(`${note2}4`, "4n");
    }, 1000);

    console.log(`${note1}4`);
    console.log(`${note2}4`);
});

document.querySelector(".game-container__button--check")?.addEventListener("click", () => {
    if(!startGame) {
        console.log("Please start the game first!");
        return;
    }
    console.log("check answer");
    let userAnswer = document.querySelector("#interval-size").value;
    let correctAnswer = idx2 - idx1 + 1;    
    if(userAnswer == correctAnswer) {
        console.log("correct!");
    } else {
        console.log(`incorrect, the correct answer is ${correctAnswer}`);
    }
    startGame = false;
});
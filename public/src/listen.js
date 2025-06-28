import * as Tone from "https://cdn.skypack.dev/tone";

console.log("hi");

let synth;

async function init(){
    await Tone.start();
    if (!synth){
        synth = new Tone.Synth().toDestination();
    }
}

const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"];
const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];
naturalNotes.forEach(note => {
    document.querySelector(`.note[data-note="${note}"]`)?.addEventListener("click", async () => {
        await init();
        synth.triggerAttackRelease(`${note}4`, "4n");
    });
});
sharpNotes.forEach(note => {
    document.querySelector(`.note[data-note="${note}"]`)?.addEventListener("click", async () => {
        await init();
        synth.triggerAttackRelease(`${note}4`, "4n");
    });
});
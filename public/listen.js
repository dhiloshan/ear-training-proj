import * as Tone from "https://cdn.skypack.dev/tone";

console.log("hi");

let synth;

async function init(){
    await Tone.start();
    if (!synth){
        synth = new Tone.Synth().toDestination();
    }
}

const notes = ["C", "D", "E", "F", "G", "A", "B"];
notes.forEach(note => {
    document.querySelector(`.note[data-note="${note}"]`)?.addEventListener("click", async () => {
        await init();
        synth.triggerAttackRelease(`${note}4`, "4n");
    });
});
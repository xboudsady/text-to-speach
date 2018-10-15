// Initialize SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

// Initialize voices array

let voices = [];

// Fetch the voices using the API
const getVoices = () => {
    // Use the .getVoices() built in method to grab to voices array data
    voices = synth.getVoices();
    console.log(voices);

    // Loop through voices array and create an option for each one
    voices.forEach(voice => {
        // Create option element on the form to select language
        const option = document.createElement('option');
        // Fill option with voice and langaue
        option.textContent = voice.name + '('+ voice.lang +')';

        // Set needed option attributes on the created element
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        // Append the option to the select option in the DOM
        voiceSelect.appendChild(option);
    });
};

// https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-of-chrome-web-speech-api
getVoices();

if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}


// Speak
const speak = () => {

} 
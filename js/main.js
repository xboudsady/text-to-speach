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
const body = document.querySelector('body');

// Initialize voices array

// Global Array
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


// Speak function
const speak = () => {
    // Check if speaking, Using the built in method of the API
    if (synth.speaking) {
        console.error('Already speaking...');
        return;
    }
    // Take whatever the value in the input field
    if (textInput.value !== '') {
        // Add background animation
        body.style.background = '#141414 url(img/wave.gif)';
        body.style.backgroundRepeat = 'repeat-x';
        body.style.backgroundSize = '100% 100%';

        // Get speak text using an new objet constructor
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        
        // Speak end
        speakText.onend = e => {
            console.log('Done Speaking...');
            body.style.background = '#141414';
        }

        // Speak error
        speakText.onerror = e => {
            console.log('Something went wrong');
        }

        // Selected voice, Grab data from the getVoices() function during set Attribute run-time
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        // Loop through the voice if the current iterations matches, choose that voice
        voices.forEach(voice => {
            if(voice.name === selectedVoice) {
                // Assign voice to uor choosen selected name
                speakText.voice = voice;
            }
        });

        // Set pitch and rate
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        // Now speak, function calling itself (recursion)
        synth.speak(speakText)
    }
} ;

// EVENT LISTENERS - When Button is clicked, call the speak() function

// Text form submit
textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak();
    textInput.blur();
});

// Rate value change - Rate variable connected to slider
rate.addEventListener('change', e => {
    // Re-assign to the new value on slider
    rateValue.textContent = rate.value
});

// Pitch value change - Pitch variable connected to slider
pitch.addEventListener('change', e => {
    // Re-assign to the new value on slider
    pitchValue.textContent = pitch.value
});

// Voice select change
voiceSelect.addEventListener('change', e => speak());
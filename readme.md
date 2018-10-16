# Text to Speech Apps

Text Synthesis application, using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

# Demo Site 
[example]()

## Technology Stack
*  Front-End Component Libray - [Bootstrap](https://getbootstrap.com/)
*  Bootstrap Dependancy - [Popper.js](https://popper.js.org/)
*  Bootstrap Dependancy - [Popper.js](https://jquery.com/)
*  Browser Technology - [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

The **Web Speech API** enables you to incorporate voice data into web apps. The Web Speech API has two parts: 
* **SpeechSynthesis** (Text-to-Speech)
* **SpeechRecognition** (Asynchronous Speech Recognition.)

`SpeechSynthesis`

Interface of the **Web Speech API** is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.

---

### Methods
`SpeechSynthesis.getVoices()`

Returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.

The `getVoices()` method of the SpeechSynthesis interface returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.


`SpeechSynthesis.speak()`

Adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.

## Screens

Speech availability is device dependant e.g.(Chrome, Firefox, Safari...)

![Chrome Version](https://github.com/xboudsady/text-to-speak/blob/master/img/chrome-version.JPG)

![Firefox Device](https://github.com/xboudsady/text-to-speak/blob/master/img/firefox-version.JPG)
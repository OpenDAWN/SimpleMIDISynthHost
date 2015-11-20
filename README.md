###Simple MIDI Synth Host
A very simple demonstration of how to include a Web MIDI Synth [1] in a Web application.<br />
It can be tried out at http://james-ingram-act-two.de/open-source/SimpleMIDISynthHost/host.html.

This and my [WebMIDISynthHost](https://github.com/notator/WebMIDISynthHost) projects are unofficial, but are aimed at furthering the discussion about software synths at [Web MIDI API issue 124](https://github.com/WebAudio/web-midi-api/issues/124).<br />

This demo uses a version of Chris Wilson's [MIDI-synth](https://webaudiodemos.appspot.com/midi-synth/index.html) from which I have removed the original GUI. Instead, I have provided it with an API that turns it into a Web MIDI Synth.<br />
This is a *non-standard* MIDI Synth (it has non-standard controls), but MIDI can control *anything* so that is no problem.<br />

The Sf2Synth1, included on the WebMIDISynthHost project, *is* a standard MIDI Synth, and is included in a separate simple demo project [here](http://james-ingram-act-two.de/open-source/SimpleSoundFontSynthHost/host.html).<br />

November 2015,
James Ingram

[1] A "Web MIDI Synth" is a software synth that uses the Web Audio API to implement the Output Device interface defined in the Web MIDI API. Web MIDI Synths can be used online independently of browser implementations of the Web MIDI API. *Standard* Web MIDI Synths can be used interchangeably with the hardware synths supplied by browser implementations of the Web MIDI API.<br />

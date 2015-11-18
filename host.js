/*
*  copyright 2015 James Ingram
*  http://james-ingram-act-two.de/
*
*  Code licensed under MIT
*/

/*jslint bitwise: false, nomen: true, plusplus: true, white: true */
/*global WebMIDI: false,  WebMIDISynth: false, window: false,  document: false, performance: false, console: false, alert: false, XMLHttpRequest: false */

WebMIDI.namespace('WebMIDI.host');

WebMIDI.host = (function()
{
	"use strict";

	var
	synth = new WebMIDI.cwMIDISynth.CWMIDISynth(),

	gitHubButtonClick = function()
	{
		var
		win = window.open("https://github.com/notator/SimpleMIDISynthHost", "_blank");
		win.focus();
	},

	doMouseOver = function(e)
	{
		var	NOTE_ON = WebMIDI.constants.COMMAND.NOTE_ON,
		channel = 0,
		key = parseInt(e.target.id),
		velocity = 100,
		status = NOTE_ON + channel,
		message = new Uint8Array([status, key, velocity]);

		synth.send(message, performance.now());	
	},

	doMouseOut = function(e)
	{
		var
		NOTE_OFF = WebMIDI.constants.COMMAND.NOTE_OFF,
		channel = 0,
		key = parseInt(e.target.id),
		velocity = 100,
		status = NOTE_OFF + channel,
		message = new Uint8Array([status, key, velocity]);

		synth.send(message, performance.now());
	},

	publicAPI =
    {
    	gitHubButtonClick: gitHubButtonClick,

    	doMouseOver: doMouseOver,
    	doMouseOut: doMouseOut
    };

	synth.init();

	return publicAPI;

}());

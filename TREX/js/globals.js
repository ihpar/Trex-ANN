'use strict';
// Events
var spaceDownEvent = new Event("keydown");
spaceDownEvent.key = ' ';
spaceDownEvent.keyCode = 32;
spaceDownEvent.which = 32;
spaceDownEvent.altKey = false;
spaceDownEvent.ctrlKey = true;
spaceDownEvent.shiftKey = false;
spaceDownEvent.metaKey = false;

var spaceUpEvent = new Event("keyup");
spaceUpEvent.key = ' ';
spaceUpEvent.keyCode = 32;
spaceUpEvent.which = 32;
spaceUpEvent.altKey = false;
spaceUpEvent.ctrlKey = true;
spaceUpEvent.shiftKey = false;
spaceUpEvent.metaKey = false;

var downArrowDownEvent = new Event("keydown");
downArrowDownEvent.key = undefined;
downArrowDownEvent.keyCode = 40;
downArrowDownEvent.which = 40;
downArrowDownEvent.altKey = false;
downArrowDownEvent.ctrlKey = true;
downArrowDownEvent.shiftKey = false;
downArrowDownEvent.metaKey = false;

var downArrowUpEvent = new Event("keyup");
downArrowUpEvent.key = undefined;
downArrowUpEvent.keyCode = 40;
downArrowUpEvent.which = 40;
downArrowUpEvent.altKey = false;
downArrowUpEvent.ctrlKey = true;
downArrowUpEvent.shiftKey = false;
downArrowUpEvent.metaKey = false;

var enterDownEvent = new Event("keydown");
enterDownEvent.key = undefined;
enterDownEvent.keyCode = 13;
enterDownEvent.which = 13;
enterDownEvent.altKey = false;
enterDownEvent.ctrlKey = true;
enterDownEvent.shiftKey = false;
enterDownEvent.metaKey = false;

var enterUpEvent = new Event("keyup");
enterUpEvent.key = undefined;
enterUpEvent.keyCode = 13;
enterUpEvent.which = 13;
enterUpEvent.altKey = false;
enterUpEvent.ctrlKey = true;
enterUpEvent.shiftKey = false;
enterUpEvent.metaKey = false;
// EOF Events

/*
	if (nearestObstacleYPos >= 75) {
	// obstacle is close to ground
	// train brain
	supervisedBrain.propagate(learningRate, jumpDecision);
	if (nearestObstacleDistance >= 15) {
	// 15 <= nearestObstacleDistance < jumpStartDistance
	// jump
	document.dispatchEvent(spaceDownEvent);
	jumpEnded = false;
	}
	else {
	// nearestObstacleDistance < 15
	// land
	if (!jumpEnded) {
	document.dispatchEvent(spaceUpEvent);
	jumpEnded = true;
	}
	}
	}
	else {
	// obstacle is far from ground so just walk
	// train brain
	supervisedBrain.propagate(learningRate, walkDecision);
	}
*/
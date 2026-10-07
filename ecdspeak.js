
function speakVoice(wavfile) {
	// Remove any previously created audio element (optional, avoids overlap)
	var oldAudio = document.getElementById('rhyme-audio');
	if (oldAudio) oldAudio.remove();

	// Create the audio element
	var audio = document.createElement('audio');
	audio.id = 'rhyme-audio'; // for future reference or removal
	audio.controls = true;
	audio.autoplay = true;

	// Create the source element
	var source = document.createElement('source');
	source.src = wavfile; // replace with your actual file path
	source.type = 'audio/wav';

	// Append the source to the audio element
	audio.appendChild(source);

}


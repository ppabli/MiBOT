exports.run = async message => {

	if (SERVERS[message.guild.id]) {

		let playlist = SERVERS[message.guild.id].playlist;
		playlist.play();

	} else {

		return message.channel.send("There is no playlist in this server");

	}

}

exports.conf = {

	command: "playMusic",
	help: "Start the music",
	permits: [],
	usersID: [],
	channelsID: [595982947153084426],
	category: __dirname.split(SEPARATOR).pop()

}
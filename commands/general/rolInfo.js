run = message => {

	let rol = message.mentions.roles.first();

	if (rol) {

		let antiquity = TIME.transformMS(new Date().getTime() - rol.createdAt);
		let daysSinceCreation = new Date(rol.createdAt);

		let rolEmbed = new DISCORD.MessageEmbed()
			.setAuthor(BOT.user.tag)
			.setColor(OTHER.generateColor())
			.setTitle(`Rol: ${rol.name}`)
			.addField('Members count: ', rol.members.size)
			.addField('Color (HEX): ', rol.hexColor)
			.addField('Age', `${antiquity.years} years - ${antiquity.days} days - ${antiquity.hours} hours - ${antiquity.minutes} minutes - ${antiquity.seconds} seconds`)
			.addField('Since: ', daysSinceCreation.toUTCString())
			.addField('Editable: ', rol.editable)
			.addField('Administrable: ', rol.managed)
			.addField('Rol ID: ', rol.id)
			.setFooter(`Requested by: ${message.author.tag}`)
			.setTimestamp();

		return message.channel.send(rolEmbed);

	} else {

		return message.channel.send("You need to tag some rol");

	}

}

conf = {

	command: "rolInfo",
	help: "Get rol info",
	permits: [],
	usersID: [],
	channelsID: [],
	category: __dirname.split(SEPARATOR).pop()

}

module.exports = {run, conf}
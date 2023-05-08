const mineflayer = require("mineflayer")
const { email, password, allowedUsers } = require("./config.json")
var moment = require("moment-timezone")

const bot = mineflayer.createBot({
	host: "mc.hypixel.net",
	port: 25565,
	version: "1.8.9",
	username: email,
	password: password,
	auth: "microsoft",
	hideErrors: true
})

bot.on("login", async => {
	console.log("Minecraft > Logged in")
})

bot.on('message', msg => {
	console.log("[" + moment().tz('Europe/London').format("HH:mm:ss") + "] " + msg.toString())
	if (allowedUsers.some(usr => msg.toString().includes(usr + " has invited you to join their party!"))) {
		bot.chat(`/p accept ${msg.toString().replace(/-/g, "").replace("You have 60 seconds to accept. Click here to join!", "").replace(" has invited you to join their party!", "").replace(/(\r\n|\n|\r)/gm, "")}`)
		setTimeout(function () { bot.chat("/pc You have 10 seconds to join a dungeon before I leave the party.") }, 500)

		setTimeout(leaveParty, 12000)

		function leaveParty() {
			bot.chat("/p leave")
			setTimeout(function () { bot.chat("/l") }, 500)
		}
	} else if (allowedUsers.some(usr => msg.toString().includes(usr + " entered The Catacombs"))) {
		bot.chat("/p leave")
		setTimeout(function () { bot.chat("/l") }, 500)
	}
})

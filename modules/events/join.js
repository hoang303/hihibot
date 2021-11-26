module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "BOT Của Kadeer Okla" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`Đ𝑎̃ 𝑘𝑒̂́𝑡 𝑛𝑜̂́𝑖 𝑡ℎ𝑎̀𝑛ℎ 𝑐𝑜̂𝑛𝑔 🤡! 𝐵𝑜𝑡 𝑛𝑎̀𝑦 đ𝑢̛𝑜̛̣𝑐 𝑡𝑎̣𝑜 𝑟𝑎 𝑏𝑜̛̉𝑖 𝑇𝑟𝑎̂̀𝑛 Đ𝑢̛́𝑐 𝐻𝑢𝑦 𝑣𝑎̀ 𝑁𝑔𝑢𝑦𝑒̂̃𝑛 𝐻𝑜̂̀𝑛𝑔 𝐻𝑎̉𝑜 🥳\n𝑉𝑎̀ 𝑏𝑜𝑡 đ𝑎𝑛𝑔 đ𝑢̛𝑜̛̣𝑐 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑏𝑜̛̉𝑖 𝑇𝑟𝑎̂̀𝑛 Đ𝑢̛́𝑐 𝐻𝑢𝑦 😍\n𝐷𝑢̀𝑛𝑔 𝑙𝑒̣̂𝑛ℎ .menu đ𝑒̂̉ 𝑏𝑖𝑒̂́𝑡 𝑐𝑎́𝑐 𝑙𝑒̣̂𝑛ℎ <3`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path,`chao.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 đ𝑖̣𝑡 𝑐𝑜𝑛 𝑚𝑒̣ 𝑚𝑎̀𝑦 {name} 🥳.\n𝐻𝑜𝑎𝑛 𝑛𝑔ℎ𝑒̂𝑛ℎ đ𝑎̃ đ𝑒̂́𝑛 𝑣𝑜̛́𝑖 {threadName} 🥰.\n{type} 𝑙𝑎̀ 𝑐ℎ𝑢́𝑎 ℎ𝑒̂̀ 𝑡ℎ𝑢̛́ {soThanhVien} 𝑐𝑢̉𝑎 𝑛ℎ𝑜́𝑚 🥳." : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'chúng mày' : 'mày')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
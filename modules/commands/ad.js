module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hà Mạc Trường Giang",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`👀Họ tên Admin: Trần Đức Huy(Rùa)
😾Tuổi: 15 ( Tuất)
👶Ngày tháng năm sinh: 18/03/2005
💁‍♂️Cân nặng và chiều cao: 1m67 + 52kg
❤️Mối quan hệ: đã có ngiu
🎮Sở thích: Chơi game, ăn mì cay và ngắm gái
🇻🇳Quê quán: Quảng Nam
📧Gmail: huywibu1803@gmail.com
📘Facebook: https://www.facebook.com/profile.php?id=100054058715620
☎️Sdt: 0901304053
Nhắc nhở từ Admin: Làm bot rất mệt nên đừng có phá nha, không spam bot tránh die
==Huy==`, event.threadID, event.messageID);
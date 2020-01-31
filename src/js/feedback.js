const nodemailer = require('nodemailer');

function feedback([feedback]) {

	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: false,
		auth: {
			user: 'steve4137@gmail.com',
			pass: 'ricardinho147'

		}
	});

	transporter.sendMail({
		from: 'GameSoft <steve4137@gmail.com>',
		to: ,
		subject: ,
		text: ,
	});

}


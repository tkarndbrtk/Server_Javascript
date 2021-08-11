// let a = 3;
// let b = 5;
// let c = a + b
// console.log("c", c)

const nodemailer =  require('nodemailer');
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c9991be77dda47",
    pass: "739ed61fb0514d"
  }

}
const send = async (option) =>{
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error);
    }else {
      console.log(info);
      return info.response;
    }
  })
}

let email_data = {
  from: 'tkarndbrtk@gmail.com',
  to: 'tkarndbrtk@gmail.com',
  subject: '테스트메일',
  text: '1시간안에 node.js 파헤치기'
}

send(email_data)
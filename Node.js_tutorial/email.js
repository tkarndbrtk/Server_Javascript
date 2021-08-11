


const nodemailer =  require('nodemailer'); // nodemailer 선언
// email 계정정보
const email = {
// 이 부분은 mailtrap.io 에서 퍼온 코드
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c9991be77dda47",
    pass: "739ed61fb0514d"
  }

}
const send = async (option) =>{
  // 이메일 보내는 함수 선언 , 마찬가지로 퍼옴 
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error);
    }else {
      console.log(info);
    // sendMail메소드 이용, 콜백함수를 만들어 에러발생시 콘솔 출력
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
// 이메일 보내기
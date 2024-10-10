# How to Port Forwarding & DDNS on Mac?

> 2024-2 웹 프로그래밍 Additional Setting
> PR

---

# 준비물

- MacBook
- KT 기가 와이파이 공유기
- VSCode | Express Server

---

# 1. IP 확인

1. 시스템 설정 - 네트워크 - Wi-Fi - 세부사항…(현재 연결된 와이파이)

진입 후 하단에서 연결된 IP 주소 및 라우터 확인 (172.xx.x.xx)

<img width="827" alt="1" src="https://github.com/user-attachments/assets/1ad44851-1143-4e4b-b27f-d702a144f6d4">

---

# 2. GiGA WiFi home 진입

<img width="1005" alt="2" src="https://github.com/user-attachments/assets/dd4c04c7-746a-49c8-9741-81bcb688f369">

```markdown
# 초기 아이디 ktuser

# 초기 비밀번호 homehub

아이디 비밀번호 수정 후 로그인
```

<img width="988" alt="3" src="https://github.com/user-attachments/assets/c1c905eb-dc59-45cc-ba4f-5f20658f66c3">

```markdown
접속 후 인터넷 연결정보의 IP주소 확인 (121.xxx.xxx.xxx)
```

---

# 3. 포트 포워딩

1. 장치설정 - 트래픽관리 - 포트 포워딩 설정

<img width="992" alt="4" src="https://github.com/user-attachments/assets/720ef0d2-5d5f-4b28-8b29-e5be21272cb2">

```markdown
소스 주소 및 포트는 비우며
외부 포트 외부 포트 번호 및 설명은 자유롭게 입력

# 내부 IP 주소 -> 1. IP 확인한 IP 주소 입력 (172.xx.x.xx)
```

## 테스트

[포트 오픈 확인](https://lamanus.kr/ports)

<img width="662" alt="5" src="https://github.com/user-attachments/assets/506caaa6-7054-4334-b426-33fae4fcb2cf">

```markdown
# IP 주소에 2. GiGA WiFi home 진입에서 확인한 IP 주소 입력 (121.xxx.xxx.xxx) 포트 5000

실패!가 뜨게 되는데 이는 웹 서버를 구축해주지 않아서 발생하는 원인
```

---

# 3. Express Server

```
1. npm init -y

2. npm i express
```

```jsx
// package.json -> scripts 부분 "dev":... 추가

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch index.js"
  },
```

```jsx
// index.js 생성
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(5000, function () {
	console.log('Express app port 5000');
});
```

모두 마치면 터미널을 열고

```
npm run dev
```

이와 같이 웹 서버를 포트 5000으로 열어주고

다시 포트 포워딩 테스트 진행

<img width="895" alt="6" src="https://github.com/user-attachments/assets/1fd36f09-73c0-4e02-97ca-c48f516cf000">

성공적으로 포트가 열림을 확인 가능하다.

웹 브라우저에 테스트를 진행한 IP 주소와 포트 번호를 함께 주소창에 입력 127.xxx.xxx.xxx:5000

<img width="468" alt="7" src="https://github.com/user-attachments/assets/f6fd2e40-4ad5-4668-a946-b82dd358d011">

웹 브라우저에서 Express Server가 보낸 값을 확인 할 수 있다!

**여기까지만 해도 문제없이 외부에서 나의 IP에 접근하여 확인이 가능하다. 하지만**

**나의 URL로 변경하는 작업을 진행합니다.**

---

# 4. DDNS 설정

GiGA WiFi home - 장치설정 - 부가 기능 - DDNS 설정

<img width="1039" alt="8" src="https://github.com/user-attachments/assets/b4e8aa69-2fd0-48d4-b3c7-f72b1ddef12e">

이와같이 입력을 하면 되는데

이를 위해서 나만의 도메인이 필요하기에 30일 주기 확인으로 무료 서비스인

[Free Dynamic DNS - Managed DNS - Managed Email - Domain Registration - No-IP](https://www.noip.com/)

noip.com을 사용

해당 사이트에서 구글을 통해 회원가입 진행

CreateHostname을 통해 생성

```markdown
Hostname -> 사용될 URL

# IP / Target -> 1. IP 확인의 IP (172.xx.x.xx)
```

생성 후 웹 서버를 다시 작동하면?

<img width="1066" alt="9" src="https://github.com/user-attachments/assets/6bf2e500-04a3-4f30-8964-f4c8ab17c3b8">

**성공!**

---

# 마치며..

처음으로 Forwarding & DDNS을 해봤는데 이론적으로 더 공부해야 할 것 같다.

24시간 구동 가능한 컴퓨터가 집에 없어 외부에서 연결하는게 문제지만 성공~

정보를 찾아가며 배운 것을 정리했습니다!

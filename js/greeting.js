
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);      //로그인 폼 안보이게 하기
        const username = loginInput.value;              //입력된 이름 변수에 저장
        localStorage.setItem(USERNAME_KEY, username);   //로컬 스토리지에 이름 기억
        
        paintGreetings(savedUsername);
}

function paintGreetings(username){
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME); //안보이던 이름 보이게 하기
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);   //null 이면 로그인 입력 창 보여주기
        loginForm.addEventListener("submit", onLoginSubmit);
}
else{
        paintGreetings(savedUsername);  //null이 아니면 기존 이름 가져오기
}

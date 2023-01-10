
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick(){
    const username = loginInput.value;

    
    if(username === ""){    //이름을 안 썼을 때
        alert("Please write your name");

    } 
    else if(username.legnth > 15){              //이름이 15자 넘어갈 때
        alert("Your name is too long")
    }
}

loginButton.addEventListener("click", onLoginBtnClick);


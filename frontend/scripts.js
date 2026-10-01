const passwordInput=document.getElementById("password")
const togglePassword=document.getElementById("toggle-password")
const eyeIcon=document.querySelector("#toggle-password img")
const emailInput=document.getElementById("email")
const loginBtn=document.getElementById("login-btn")
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]$/


togglePassword.addEventListener('click',function(){
    if (passwordInput.type==="password"){
        passwordInput.type="text"
        eyeIcon.src="consult-ai-login-assets/icon-eye.png"
    }

    
    else if (passwordInput.type==="text"){
        passwordInput.type="password"
        eyeIcon.src="consult-ai-login-assets/icon-eye-off.png"
    }
})

loginBtn.addEventListener('click',function(){
    const email=emailInput.value.trim()
    const password=passwordInput.value
    if(!email&&!password){
        alert("メールとパスワードを入力してください")
        return
    }
    else if (!email){
        alert("emailを入力してください")
        return
    }
    else if(!emaiRegex.test(email)){
        alert("正しいemailを入力してください")
        return

    }
    else if (!password){
        alert("passworを入力して下さい")
        return
    }
    else{
        console.log("ログイン処理へ進む")
    }
})

document.getElementById('login-submit').addEventListener('click',function(){
    //user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //conditions
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'practice-banking.html';
    }
    else {
        console.log('Invalid user and password')
    }
})
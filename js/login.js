document.getElementById('login-submit').addEventListener('click',function(){
    //user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        console.log('valid user');
    }
    else{
        console.log('Please enter valid pass ');
    }
    window.location.href = 'banking.html';
})
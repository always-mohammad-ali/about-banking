document.getElementById('login-submit').addEventListener('click', function(){
    let emailField = document.getElementById('user-email');
    let userEmail = emailField.value;
    //password-input
    let passwordField = document.getElementById('user-password')
    let userPassword = passwordField.value;

    if(userEmail == 'ali@gmail.com' && userPassword == 'me'){
        window.location.href = 'banking.html';
    
    }
    
});
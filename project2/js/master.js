const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function() {
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function() {
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function() {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', function() {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
});

const user_mb = document.querySelector('#user-lap');
const si = document.querySelector('#si');
const sign_up = document.querySelector('.sign_up');
const sign_in = document.querySelector('.sign_in');
const sign = document.querySelector('.sign');
const sign_2 = document.querySelector('.sign_2');
const home = document.querySelector('.home');
const header = document.querySelector('.header');

sign_2.onclick = function() {
    // Hide the content displayed by getform()
    sign_in.innerHTML = `
        <a href="./index.html">     
            <i class="fa fa-times false" aria-hidden="true"></i>
        </a>
        <div class="sign_in">
            <form action="">
                <p>Sign In</p>
                <label for="email">Enter Your E-mail:</label><br>
                <input id="email" type="email" placeholder="E-mail"><br>
                <label for="pass">Enter Your Password:</label><br>
                <input id="pass" type="password" placeholder="Password"><br>
                <button class="send">Sign In</button><br>
                <a href="">Forget Password?</a>
                <a href="">Don't Have an Account? Sign Up</a>
            </form>
        </div>`
        sign_up.style.display = 'none';

    ;
};

function getform() {
    sign_up.style.display = 'block';
    sign.style.visibility = 'visible';
    header.style.filter = 'blur(5px)';
    sign.style.zIndex = '10'; 
    home.style.filter = 'blur(5px)';
}

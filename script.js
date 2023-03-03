let f1 = document.forms.f1;

let firstNameRegExp = /^[A-Za-z]{2,20}$/;
let lastNameRegExp = /^[A-Za-z]{2,20}$/;
let emailRegExp1 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.com$/;
let emailRegExp2 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.net$/;
let emailRegExp3 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.ua$/;
let emailRegExp4 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.mail$/;
let passwordRegExp = /^\w{8,15}$/;

f1.first_name.oninput =  function(){
    let testfirstName = firstNameRegExp.test(f1.first_name.value);
    if(testfirstName){
        document.querySelector('.uil-check-fn').style.display = 'block';
        document.querySelector('.uil-times-fn').style.display = 'none';
        document.querySelector('.first-name-false').style.display = 'none';
    }
    else{
        document.querySelector('.uil-times-fn').style.display = 'block';
        document.querySelector('.uil-check-fn').style.display = 'none';
        document.querySelector('.first-name-false').style.display = 'block';
    }
}

f1.last_name.oninput =  function(){
    let testlastName = lastNameRegExp.test(f1.last_name.value);
    if(testlastName){
        document.querySelector('.uil-check-ln').style.display = 'block';
        document.querySelector('.uil-times-ln').style.display = 'none';
        document.querySelector('.last-name-false').style.display = 'none';
    }
    else{
        document.querySelector('.uil-times-ln').style.display = 'block';
        document.querySelector('.uil-check-ln').style.display = 'none';
        document.querySelector('.last-name-false').style.display = 'block';
    }
}

f1.email.oninput =  function(){
    let testEmail1 = emailRegExp1.test(f1.email.value);
    let testEmail2 = emailRegExp2.test(f1.email.value);
    let testEmail3 = emailRegExp3.test(f1.email.value);
    let testEmail4 = emailRegExp4.test(f1.email.value);
    if(testEmail1 || testEmail2 || testEmail3 || testEmail4){
        document.querySelector('.uil-check-em').style.display = 'block';
        document.querySelector('.uil-times-em').style.display = 'none';
        document.querySelector('.email-false').style.display = 'none';
    }
    else{
        document.querySelector('.uil-times-em').style.display = 'block';
        document.querySelector('.uil-check-em').style.display = 'none';
        document.querySelector('.email-false').style.display = 'block';
    }
}

f1.password.oninput =  function(){
    let testPassword = passwordRegExp.test(f1.password.value);
    if(testPassword){
        document.querySelector('.uil-check-pw').style.display = 'block';
        document.querySelector('.uil-times-pw').style.display = 'none';
        document.querySelector('.password-false').style.display = 'none';
    }
    else{
        document.querySelector('.uil-times-pw').style.display = 'block';
        document.querySelector('.uil-check-pw').style.display = 'none';
        document.querySelector('.password-false').style.display = 'block';
    }
}

f1.first_name.onfocus = function(){
    this.style.border = '1px solid rgb(176, 217, 236)';
    document.querySelector('.first-name p').style.display = 'block';
}
f1.last_name.onfocus = function(){
    this.style.border = '1px solid rgb(176, 217, 236)';
    document.querySelector('.last-name p').style.display = 'block';
}
f1.email.onfocus = function(){
    this.style.border = '1px solid rgb(176, 217, 236)';
    document.querySelector('.email p').style.display = 'block';
}
f1.password.onfocus = function(){
    this.style.border = '1px solid rgb(176, 217, 236)';
    document.querySelector('.password p').style.display = 'block';
}

f1.first_name.onblur = function(){
    if(this.value.length == 0) this.style.border = '1px solid rgb(236, 236, 236)';
    document.querySelector('.first-name p').style.display = 'none';
}
f1.last_name.onblur = function(){
    if(this.value.length == 0) this.style.border = '1px solid rgb(236, 236, 236)';
    document.querySelector('.last-name p').style.display = 'none';
}
f1.email.onblur = function(){
    if(this.value.length == 0) this.style.border = '1px solid rgb(236, 236, 236)';
    document.querySelector('.email p').style.display = 'none';
}
f1.password.onblur = function(){
    if(this.value.length == 0) this.style.border = '1px solid rgb(236, 236, 236)';
    document.querySelector('.password p').style.display = 'none';
}

f1.first_name.onchange =  function(){
    let testfirstName = firstNameRegExp.test(f1.first_name.value);
    if(testfirstName){
        this.style.border = '1px solid rgb(0, 150, 45)'
    }
    else{
        this.style.border = '1px solid rgba(248, 62, 62, 0.884)'
    }
    console.log(this.validity.valid)
}
f1.last_name.onchange =  function(){
    let testlastName = lastNameRegExp.test(f1.last_name.value);
    if(testlastName){
        this.style.border = '1px solid rgb(0, 150, 45)'
    }
    else{
        this.style.border = '1px solid rgba(248, 62, 62, 0.884)'
    }
}
f1.email.onchange =  function(){
    let testEmail1 = emailRegExp1.test(f1.email.value);
    let testEmail2 = emailRegExp2.test(f1.email.value);
    let testEmail3 = emailRegExp3.test(f1.email.value);
    let testEmail4 = emailRegExp4.test(f1.email.value);
    if(testEmail1 || testEmail2 || testEmail3 || testEmail4){
        this.style.border = '1px solid rgb(0, 150, 45)'
    }
    else{
        this.style.border = '1px solid rgba(248, 62, 62, 0.884)'
    }
}
f1.password.onchange =  function(){
    let testPassword = passwordRegExp.test(f1.password.value);
    if(testPassword){
        this.style.border = '1px solid rgb(0, 150, 45)'
    }
    else{
        this.style.border = '1px solid rgba(248, 62, 62, 0.884)'
    }
}

f1.terms.onclick = function(){
    if(f1.terms.checked && firstNameRegExp.test(f1.first_name.value) && lastNameRegExp.test(f1.last_name.value) && passwordRegExp.test(f1.password.value)){
        if(emailRegExp1.test(f1.email.value) || emailRegExp2.test(f1.email.value) || emailRegExp3.test(f1.email.value) || emailRegExp4.test(f1.email.value)) f1.sign.disabled = false;
        else f1.sign.disabled = true;
    } 
    if(f1.terms.checked == false) f1.sign.disabled = true;
}
f1.sign.onclick = function(){
    document.querySelector('.container-2').style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'rgb(121, 121, 121)';
}
document.querySelector('.start-exploring').onclick = function(){
    document.querySelector('.container-2').style.display = 'none';
    document.querySelector('body').style.backgroundColor = 'rgb(245, 245, 245)';
    f1.sign.disabled = true;
    f1.reset();
    document.querySelector('.uil-check-fn').style.display = 'none';
    f1.first_name.style.border = '1px solid rgb(236, 236, 236)';
    document.querySelector('.uil-check-ln').style.display = 'none';
    f1.last_name.style.border = '1px solid rgb(236, 236, 236)';
    document.querySelector('.uil-check-em').style.display = 'none';
    f1.email.style.border = '1px solid rgb(236, 236, 236)';
    document.querySelector('.uil-check-pw').style.display = 'none';
    f1.password.style.border = '1px solid rgb(236, 236, 236)';
}







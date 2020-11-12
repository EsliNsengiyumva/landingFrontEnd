function validateEmail()
{
        var uemail = document.loginForm.email;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat))
        {
        document.loginForm.desc.focus();
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
        }
}

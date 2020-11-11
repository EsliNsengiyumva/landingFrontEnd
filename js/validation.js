function stringValidation(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }
  
  function ValidateEmail(inputText)
  {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.value.match(mailformat))
  {
  alert("Valid email address!");
  document.form1.text1.focus();
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  document.form1.text1.focus();
  return false;
  }
  }
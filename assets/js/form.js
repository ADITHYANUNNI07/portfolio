function validateName()
{
   var Name = document.getElementById("name").value;
   var error= document.getElementById("error-name");
   var namestatus = /^[a-zA-Z]+$/;
   if(Name.length==0)
   {
    error.innerHTML="Please Enter the Full Name";
    error.style.color="red";
    return false;
   }else if(Name.length<3)
   {
    error.innerHTML="Invalid Name";
    error.style.color="red";
    return false;
   }else if(!Name.match(namestatus))
   {
    error.innerHTML="Please Enter the valid name";
    error.style.color="red";
    return false;
   }
   else
   {
    error.innerHTML="Valid";
    error.style.color="green";
    return true;

   }
}
  function validateEmail(){
    var Email=document.getElementById("email").value
    var error=document.getElementById("error-email")
    var emailstaus=/^[a-z0-9]+[@]+[gmail]+[.]+[com]+$/
    if(Email.length<12)
   {
    error.innerHTML="Invalid Email";
    error.style.color="red";
    return false;
   }else if(Email.match(emailstaus))
   {
    error.innerHTML="Valid Email";
    error.style.color="green";
    return true;
   }
   else{
    error.innerHTML="Invalid Email";
    error.style.color="red";
    return false;

   }
  }
  function validateNumber()
  {
    var number=document.getElementById("number").value
    var error=document.getElementById("error-num")
    var numberstatus=/^[0-9]+$/

    if(number.match(numberstatus) && number.length==10)
    {
      error.innerHTML=""
      return true
    }
    else
    {
      error.innerHTML="invalid number"
      error.style.color="red";
      return false;


    }
  }

  function validateMessage()
  {
     var message=document.getElementById("message").value
     var error=document.getElementById("error-msg")

     if(message=="")
     {
      error.innerHTML="Enter a message"
      error.style.color="red"
      return false
     }
     else
     {
      error.innerHTML=""
      return true;
     }
  }
  function validateForm()
  {
    if(!validateName()||!validateEmail()||!validateMessage()||!validateNumber())
    {
      var error=document.getElementById('form-error-msg');
      error.innerHTML="Please Enter the Form properly.."
      error.style.color="red";
    }else{
      var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
      };
      const serviceID ="service_5no502r";
      const templateID ="template_w16vinp";
      emailjs.send(serviceID,templateID,params).then(res=>
        {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully");
      }).catch((err)=>console.log(err));
    }
  }

 
 
 
 /*function nameError(){
    var Name=document.getElementById("contact-name").value;
    var nameerror=document.getElementById("name-error");
    var namecode=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    if(Name.length==0){
      nameerror.innerHTML="Enter Your Full Name";
      nameerror.style.color="red";
    }
    else if(!Name.match(namecode)){
      nameerror.innerHTML="Enter Your Valid Name";
      nameerror.style.color="red";
    }
    else if(Name.length<4){
      nameerror.innerHTML="Atleast 4 Character";
      nameerror.style.color="blue";
    }
    else{
      nameerror.innerHTML="Valid";
      nameerror.style.color="green";
    }
  }
  function emailError(){
    var Email=document.getElementById("contact-email").value;
    var emailerror=document.getElementById("email-error");
    var emailcode= /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(Email.length==0){
      emailerror.innerHTML="Enter Your Email";
      emailerror.style.color="red";
    }
    else if(!Email.match(emailcode)){  
      emailerror.innerHTML="Enter a valid Email";
      emailerror.style.color="red";

    }else{
      emailerror.innerHTML="Valid";
      emailerror.style.color="green";

    }
  }
  function subjectError(){
    var Subject=document.getElementById("contact-subject").value;
    var subjecterror=document.getElementById("subject-error");
    if(Subject.length==0){
      subjecterror.innerHTML="Enter a Subject";
      subjecterror.style.color="red";
    }
    else if(Subject.length<5){
      subjecterror.innerHTML="Atleast 5 Character";
      subjecterror.style.color="blue";
    }
    else{
      subjecterror.innerHTML="Valid";
      subjecterror.style.color="green";
    }
  }
  function MessageError(){
    var Message=document.getElementById("contact-message").value;
    var messageerror=document.getElementById("message-error");
    if(Message.length==0){
      messageerror.innerHTML="Enter a Message";
      messageerror.style.color="red";
    }
    else{
      messageerror.innerHTML="Entered Message";
      messageerror.style.color="green";
    }
  }
  $("#submit-form").submit((e)=>{
          e.preventDefault()
          $.ajax({
              url:"https://script.google.com/macros/s/AKfycbzeaPw1NyhkFnt7zF2hPDtjlE9n2xoJVI_pXzAMt7VrjPrrgZuy9rBHqahxqIx8mA0oUA/exec",
              data:$("#submit-form").serialize(),
              method:"post",
              success:function (response){
                  alert("Form submitted successfully")
                  window.location.reload()
                  //window.location.href="https://google.com"
              },
              error:function (err){
                  alert("Something Error")
  
              }
          })
      })
  /*var name = document.getElementById('name').value;
  if (name == "" || name.length < 3) {
    message.push("Please enter your name.");
  }

  var email = document.getElementById('email').value;
  if (email == "" || !/\w+@\w+\.\w+/.test(email)) {
    message.push("Please enter a valid email address.");
  }

  var subject = document.getElementById('subject').value;
  if (subject == "") {
    message.push("Please enter a subject.");
  }

  var message = document.getElementById('message').value;
  if (message == "") {
    message.push("Please enter a message.");
  }

  if (message.length > 0) {
    alert(message);
    return false;
  } else {
    return true;
  }*/
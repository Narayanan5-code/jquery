$(document).ready(function() {
    $('#name').keyup(function() {
        $(this).val($(this).val().toUpperCase());
      });
    $("#regis").validate({
      rules: {
        name : {
          required: true,
        },
        number:
        {
            required:true,
            number:true,
            minlength:10
        },
        age: {
          required: true,
         
          min:13

        },
        email: {
          required: true,
          email: true
        },
       password:{
            required:true,
            password:true,
            minlength:6
       },
       repassword:{
           required:true,
           password:true,
           minlength:6,
           equalTO:"#password"
           
       }
      },

      messages : {

        name:{
            required:"This fleid is Required*"
        }
        ,

        number:{
            required:"Please enter your mobile Number",
            minlength:"Please enter a valid mobile number"
        },
        
        age: {
          required: "Please enter your age",
          min: "You must be at least 13 years old"
        },
        email: {
          email: "The email should be in the format: abd@provider.com",
          required:"Please enter your email"
        },
       password:{
       required:"Please Enter a password",
       minlength:"Password should be atleast 6 characters"
       },
       repassword:{
        required:"Please confirm your password",
        equalTO:"Please enter the same Password"
        }
      },

      submitHandler: function(form) {
        form.submit();
      }
   

    });
  });

function validateUser() {  
      
    var fname = document.reg_form.fname; 
    var lname = document.reg_form.lname;  
    var address = document.reg_form.address ;
    var gender = document.reg_form.gender;
    var email = document.reg_form.email;
    var mobile = document.reg_form.mobile;    
    var course = document.reg_form.course;  
    
      

    if (fname.value.length <= 0 ) 
    {    
        alert("Name is required");    
        fname.focus();   
        fname.style.border="solid 5px red";
        return false;    
    }    
     if (lname.value.length <= 0)
     {    
        alert("Last Name is required");    
        lname.focus();   
        lname.style.border="solid 5px red"; 
        return false;    
    }    
     if (address.value.length <= 0) {    
        alert("Address is required");    
        address.focus();  
        address.style.border="solid 5px red";  
        return false;    
    }    
    if (gender.value.length <= 0) {    
        alert("Gender is required"); 
        gender.style.border="solid 5px red";   
        gender.focus();    
        return false;    
    }    
    else if (email.value.length <= 0) {    
        alert("Email Id is required");  
        email.style.border="solid 5px red";  
        email.focus();    
        return false;    
    }    
    else if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        mobile.style.border="solid 5px red";
        return false;    
    }    
    else if (course.value == "select course") {    
        alert("Course is required");    
        course.focus();    
        course.style.border="solid 5px red";
        return false;    
    }    
    return false;    
}    
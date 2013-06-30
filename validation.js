function validateForm()
{
	var fname =document.myform.fname.value;
	var lname = document.myform.lname.value;
	var phno=document.myform.phno.value;
	var email=document.myform.email.value;
	var pass=document.myform.pass.value;
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	var len =pass.length;
	var patt1=/[A-Z]/g;
	var patt2=/[0-9]/g;
	if(fname == "" )
	{
		alert("First name is empty");
		 return false;
	}
	else if(lname==null || lname=="")
	{
		alert("Last name is empty");
		 return false;
	}
	else if(phno==null || phno=="")
	{
		alert("phone number name is empty ");
		 return false;
	}
	else if(email==null || email=="")
	{
		alert("email  is empty");
		 return false;
	}
	else if(pass==null || pass=="")
	{
	alert("password is empty");
	 return false;
	}
	else if ( isNaN(phno))
	{
		alert("Invalid phno");
		 return false;
	}

	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
  		alert("Not a valid e-mail address");
  		return false;
	}
	
	else if(len<8||len > 15)	
	{
		alert("password should have 8 to 15 charactes");
  		return false;
	}

	else if(pass.match(patt1)==null  || pass.match(patt2) == null)
	{
		alert("Password should contain at least one capital letter and one digit");
  		return false;
	}
}

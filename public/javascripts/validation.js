// validating the resume form
function formValidation() {
    if (document.getElementById('name').value == "") {
        document.getElementById('nameError').innerHTML = "please enter name"
        document.getElementById('nameError').style.display = "Block";
        return false;
    } else if (document.getElementById('name').value != "") {
        document.getElementById('nameError').style.display = "none";

    } if (document.getElementById('email').value == "") {
        document.getElementById('emailError').innerHTML = "Please Enter email"
        document.getElementById('emailError').style.display = "Block";
        return false;
    } else if (document.getElementById('email').value != "") {
        document.getElementById('emailError').style.display = "none";
    }
    var phoneno = /^\d{10}$/;
    if (document.getElementById('phone').value == "") {
        document.getElementById('phoneError').innerHTML = "Please Enter valid Contact No"
        document.getElementById('phoneError').style.display = "Block";
        return false;
    } else if (document.getElementById('phone').value != "") {
        document.getElementById('phoneError').style.display = "none";
    }
    var fileName = document.getElementById('file').value
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
    // alert(ext);
    // throw new Error();

    if (document.getElementById('file').value == "") {
        document.getElementById('fileError').innerHTML = "Please Select File"
        document.getElementById('fileError').style.display = "Block"
        return false;
    } else if (ext !== "pdf" && ext !== "doc" && ext !== "docx") {
        document.getElementById('fileError').innerHTML = "Please Select Valid File"
        document.getElementById('fileError').style.display = "Block";
        return false;
    } else if (document.getElementById('file').value != "") {
        document.getElementById('fileError').style.display = "none";
    }

    if (document.getElementById('terms').checked == false) {
        alert('please acccept T&C');
        return false;
    }
    alert("Message Send Success");
}

// validating enquiry form

function validation() {
    if (document.getElementById('person_name').value == "") {
        document.getElementById('personError').innerHTML = "Enter name";
        document.getElementById('personError').style.display = "Block";
        return false;
    } else if (document.getElementById('person_name').value != "") {
        document.getElementById('personError').style.display = "none";
    }
    if (document.getElementById('company_name').value == "") {
        document.getElementById('companyError').innerHTML = "Enter company name";
        document.getElementById('companyError').style.display = "Block";
        return false;
    } else if (document.getElementById('company_name').value != "") {
        document.getElementById('companyError').style.display = "none";
    }
    if (document.getElementById('email-invalid').value == "") {
        document.getElementById('mailError').innerHTML = "Enter E-Mail";
        document.getElementById('mailError').style.display = "Block";
        return false;
    } else if (document.getElementById('email-invalid').value != "") {
        document.getElementById('mailError').style.display = "none";
    }
    if (document.getElementById('contact_no').value == "") {
        document.getElementById('contactError').innerHTML = "Enter Contact Number";
        document.getElementById('contactError').style.display = "Block";
        return false;
    } else if (document.getElementById('contact_no').value != "") {
        document.getElementById('contactError').style.display = "none";
    }
    if (document.getElementById('designation').value == "") {
        document.getElementById('designationError').innerHTML = "Enter Your Designation";
        document.getElementById('designationError').style.display = "Block";
        return false;
    } else if (document.getElementById('designation').value != "") {
        document.getElementById('designationError').style.display = "none";
    }
    if (document.getElementById('comment').value == "") {
        document.getElementById('commentError').innerHTML = "Enter Any Queries";
        document.getElementById('commentError').style.display = "Block";
        return false;
    } else if (document.getElementById('comment').value != "") {
        document.getElementById('commentError').style.display = "none";
    }
   

}


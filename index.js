// -------------FORM VALIDATION------------

function validation() {

    var name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('user').innerHTML = "*Enter Your First Name*";
        return false;
    }
    else {
        document.getElementById('user').innerHTML = "";
    }


    var lname = document.getElementById('lname').value;
    if (lname == "") {
        document.getElementById('user1').innerHTML = "*Enter Your Last Name*";
        return false;
    }
    else {
        document.getElementById('user1').innerHTML = "";
    }


    var mail = document.getElementById('mail').value;
    if (mail.indexOf("@") <= 0) {
        document.getElementById('mailid').innerHTML = "*Enter Your Valid EmailID*";
        return false;
    }
    else {
        document.getElementById('mailid').innerHTML = "";
    }
    if (mail.charAt(mail.length - 4) != "." && mail.charAt(mail.length - 3) != ".") {
        document.getElementById('mailid').innerHTML = "*Invalid Position of '.' *";
        return false;
    }


    var date = document.getElementById('date').value;
    if (date == "") {
        document.getElementById('dob').innerHTML = "*Enter Your Date of Birth*";
        return false;
    }
    else {
        document.getElementById('dob').innerHTML = "";
    }


    var fname = document.getElementById('fname').value;
    if (fname == "") {
        document.getElementById('ffirst').innerHTML = "*Enter Your Father Name*";
        return false;
    }
    else {
        document.getElementById('ffirst').innerHTML = "";
    }

    var flname = document.getElementById('flname').value;
    if (flname == "") {
        document.getElementById('flast').innerHTML = "*Enter Last Name*";
        return false;
    }
    else {
        document.getElementById('flast').innerHTML = "";
    }


    var mname = document.getElementById('mname').value;
    if (mname == "") {
        document.getElementById('mfirst').innerHTML = "*Enter Your Mother Name*"
        return false;
    }
    else {
        document.getElementById('mfirst').innerHTML = "";
    }

    var mlname = document.getElementById('mlname').value;
    if (mlname == "") {
        document.getElementById('mlast').innerHTML = "*Enter Last Name*";
        return false;
    }
    else {
        document.getElementById('mlast').innerHTML = "";
    }



    var ntn = document.getElementById('ntn').value;
    if (ntn == "") {
        document.getElementById('nation').innerHTML = "*Enter Your Nationality*";
        return false;
    }
    else {
        document.getElementById('nation').innerHTML = "";
    }


    var add = document.getElementById('add').value;
    if (add == "") {
        document.getElementById('place').innerHTML = "*Enter Your Permanent Address*";
        return false;
    }
    else {
        document.getElementById('place').innerHTML = "";
    }


    var dis = document.getElementById('dis').value;
    if (dis == "") {
        document.getElementById('area').innerHTML = "*Enter Your District*";
        return false;
    }
    else {
        document.getElementById('area').innerHTML = "";
    }

    var coun = document.getElementById('coun').value;
    if (coun.length == "") {
        document.getElementById('countryy').innerHTML = "*Select Your Country*";
        return false;
    }
    else {
        document.getElementById('countryy').innerHTML = "";
    }


    var num = document.getElementById('num').value;
    if (num.length == "") {
        document.getElementById('number').innerHTML = "*Enter Your Contact Number*";
        return false;
    }
    else {
        document.getElementById('number').innerHTML = "";
    }
    if (num.length != 10) {
        document.getElementById('number').innerHTML = "*Contact number must consist of 10 digits* ";
        return false;
    }
    else {
        document.getElementById('number').innerHTML = "";
    }

    var num1 = document.getElementById('num1').value;
    if (num1.length == "") {
        document.getElementById('number1').innerHTML = "*Enter Your Alternate Number*";
        return false;
    }
    else {
        document.getElementById('number1').innerHTML = "";
    }
    if (num1.length != 10) {
        document.getElementById('number1').innerHTML = "*Enter Alternate Number*";
        return false;
    }
    else {
        document.getElementById('number1').innerHTML = "";
    }

    alert("Your Registration has been Submitted Successfully")
    return true;
}




// ----- Educational Qualificational Validation-------

function education() {

    var hsc = document.getElementById('hsc').value;
    if (hsc == "") {
        document.getElementById('iname').innerHTML = "*Enter Your HSC Institution Name*";
        return false;
    }
    else {
        document.getElementById('iname').innerHTML = "";
    }


    var hscboard = document.getElementById('hscboard').value;
    if (hscboard == "") {
        document.getElementById('boardd').innerHTML = "*Select Board*";
        return false;
    }
    else {
        document.getElementById('boardd').innerHTML = "";
    }


    var hscper = document.getElementById('hscper').value;
    if (hscper == "") {
        document.getElementById('mark1').innerHTML = "*Enter HSC Percentage*";
        return false;
    }
    else {
        document.getElementById('mark1').innerHTML = "";
    }
    if (isNaN(hscper)) {
        document.getElementById('mark1').innerHTML = "Invalid Percentage Mark";
        return false;
    }
    else {
        document.getElementById('mark1').innerHTML = "";
    }


    var ssc = document.getElementById('ssc').value;
    if (ssc == "") {
        document.getElementById('iname1').innerHTML = "*Enter Your SSC Institution Name*";
        return false;
    }
    else {
        document.getElementById('iname1').innerHTML = "";
    }

    var sscboard = document.getElementById('sscboard').value;
    if (sscboard == "") {
        document.getElementById('board1').innerHTML = "*Select Board*";
        return false;
    }
    else {
        document.getElementById('board1').innerHTML = "";
    }


    var sscper = document.getElementById('sscper').value;
    if (sscper == "") {
        document.getElementById('mark2').innerHTML = "*Enter Your SSC Percentage*";
        return false;
    }
    else {
        document.getElementById('mark2').innerHTML = "";
    }
    if (isNaN(sscper)) {
        document.getElementById('mark2').innerHTML = "*Invalid Percentage Mark*";
        return false;
    }
    else {
        document.getElementById('mark2').innerHTML = "";
    }



    var pur = document.getElementById('pur').value;
    if (pur == "") {
        document.getElementById('stream').innerHTML = "*Enter Your Currently Pursuing Stream*";
        return false;
    }
    else {
        document.getElementById('stream').innerHTML = "";
    }



    var c1 = document.getElementById('c1').value;
    if (c1 == "") {
        document.getElementById('iname2').innerHTML = "Enter current institution Name";
        return false;
    }
    else {
        document.getElementById('iname2').innerHTML = "";
    }



    var per1 = document.getElementById('per1').value;
    if (per1 == "") {
        document.getElementById('mark3').innerHTML = "Enter Current Percentage";
        return false;
    }
    else {
        document.getElementById('mark3').innerHTML = "";
    }
    if (isNaN(per1)) {
        document.getElementById('mark3').innerHTML = "Invalid Percentage Mark";
        return false;
    }
    else {
        document.getElementById('mark3').innerHTML = "";
    }

    alert("Your Details has been Submitted Successfully")
    return true;
}




/*File  Validation*/
function docValidation() {
    var pic = document.getElementById('file1');

    if (pic.files.length > 0) {
        for (var i = 0; i <= pic.files.length - 1; i++) {

            var fsize = pic.files.item(i).size;
            var file1 = Math.round((fsize / 1024));
            // The size of the file.
            if (file1 >= 4096) {
                alert("Select a file less than 4MB");
            }
            else if (file1 < 2048) {
                alert("Select a file greater than 2MB");
            }
            else {
                document.getElementById('size').innerHTML = '<b>'
                    + file1 + '</b> KB';
            }
        }
    }
}




function docValidation1() {
    var pic1 = document.getElementById('hscfile');
    if (pic1.files.length > 0) {
        for (var i = 0; i <= pic1.files.length - 1; i++) {

            var fsize = pic1.files.item(i).size;
            var hscfile = Math.round((fsize / 1024));
            // The size of the file.
            if (hscfile >= 4096) {
                alert(" Select a file less than 4MB");
            }
            else if (hscfile < 2048) {
                alert(" Select a file greater than 2MB");
            }
            else {
                document.getElementById('size').innerHTML = '<b>'
                    + hscfile + '</b> KB';
            }
        }
    }
}



function docValidation2() {
    var pic2 = document.getElementById('sscfile');
    if (pic2.files.length > 0) {
        for (var i = 0; i <= pic2.files.length - 1; i++) {

            var fsize = pic2.files.item(i).size;
            var sscfile = Math.round((fsize / 1024));
            // The size of the file.
            if (sscfile >= 4096) {
                alert("Select a file less than 4MB");
            }
            else if (sscfile < 2048) {
                alert("Select a file greater than 2MB");
            }
            else {
                document.getElementById('size').innerHTML = '<b>'
                    + sscfile + '</b> KB';
            }
        }
    }
}



function docValidation3() {
    var fil = document.getElementById('doc');
    if (fil.files.length > 0) {
        for (var i = 0; i <= fil.files.length - 1; i++) {

            var fsize = fil.files.item(i).size;
            var doc = Math.round((fsize / 1024));
            // The size of the file.
            if (doc >= 10096) {
                alert("Select a file less than 10MB");
            }
            else if (doc < 2048) {
                alert("Select a file greater than 2MB");
            }
            else {
                document.getElementById('size').innerHTML = '<b>'
                    + doc + '</b> KB';
            }
        }
    }

}





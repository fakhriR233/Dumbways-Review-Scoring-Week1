//Fungsi ambil data

function contactMeSubmit(){
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

//validasi
    
    if(name === "") {
            return alert("Name couldn't be empty!")
        }
        else if(email === "") {
            return alert("Email couldn't be empty!")
        }
        else if(phone === "") {
            return alert("Your Phone number is empty!")
        }
        else if(subject === "") {
            return alert("Subject is Empty!")
        }
        else if(message === "") {
            return alert ("Message can't be empty!")
        }
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    // console.log(name);

    // if(name.value.length == 0 ){
    //     alert("test");
    // }

//mail function

        let mail = "fakhriramadhan233@gmail.com"
        let a = document.createElement('a')

        a.href = `mailto:${mail}?subject=${subject}&body=Halo saya ${name} ${message} silahkan hubungi saya segera ke ${phone} atau ${email}`

        a.click()

}



let inputSlider = document.getElementById("inputSlider");
let slidervalue = document.getElementById("slidervalue");
let PassBox = document.getElementById("PassBox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let Number = document.getElementById("Number");
let Symbol = document.getElementById("Symbol");
let genBtn = document.getElementById("genBtn");
let copy = document.getElementById("copy");


// showing input slider value
slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    slidervalue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
    PassBox.value = generatepassword();
})
let lowerchar = "abcdefghijklmnopqrstuvwxyz";
let Upperchar =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Num = "0123456789";
let sym = "!@#$%6&*";

// function to generate Password
function generatepassword() {
    let genPassword = "";

    let allChar = "";
    allChar += lowercase.checked ? lowerchar : "";
    allChar += Uppercase.checked ? Upperchar : "";
    allChar += Number.checked ? Num : "";
    allChar += Symbol.checked ? sym : "";

    if(allChar == "" || allChar.length == 0){
        return genPassword; 
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++;
    }
    return genPassword; 
}

copy.addEventListener('click', () => {
    if (PassBox.value != "" || PassBox.value.length >= 1) {
        navigator.clipboard.writeText(PassBox.value);
        copy.innerText = "check";
        copy.title = "Password Copied";

        setTimeout(() => {
            copy.innerHTML = "content_copy";
            copy.title = "";
        }, 2000);
    }
})

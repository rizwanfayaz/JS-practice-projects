//all the comments are copied from Ai for better reference.

const passBox = document.querySelector("#psswrd");  //password box
const len = 12;  //password length

const upC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //all uppercase letters
const loC = "abcdefghijklmnopqrstuvwxyz";  //all lowercase letters
const num = "1234567890";  //all numbers
const sym = "@#$%&*()_+{}[]<>/=";  //some symbols
const allChar = upC + loC + num + sym;  //all characters.

createPassword = () => {  //making arrow func
    let password = "";
    password += upC[Math.floor(Math.random() * upC.length)];
    password += loC[Math.floor(Math.random() * loC.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += sym[Math.floor(Math.random() * sym.length)];
    //it will generate any random letter from above variable indexs.

    while (len > password.length) {  //The while loop continues to execute as long as the length of the password string is less than the variable len
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passBox.value = password;  //password box value will get updated with password variable.
}

copyPswrd = () => {
    passBox.select();  //This line selects the text inside the passBox element, which is likely a text input field.
    document.execCommand("copy");  //This line executes the “copy” command on the selected text, effectively copying it to the clipboard.
}

//The execCommand method is now considered obsolete, and modern web development practices recommend using the Clipboard API with navigator.clipboard.writeText() for a more secure and flexible approach to handling clipboard operations.

clr = () => {
    passBox.value = "";
}
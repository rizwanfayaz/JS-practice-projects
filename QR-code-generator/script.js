let imgBox = document.querySelector("#img-box");  //image box
let qrImg = document.querySelector("#qr-img");  //qr code
let text = document.querySelector("#input-field");  //input

genQR = () => {
    if (text.value.length > 0) {  //when text length in input field is > 0 then execute the following code
        qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;  //this api will convert input text into barcode
        imgBox.classList.add("show-img");  //adds new class defined in css line 66
    } else {
        text.classList.add("error");  //adds new class defined in css line 72
        setTimeout(() => {
            text.classList.remove("error");  //this property will be removed in 1 sec
        }, 1000)
    }
}
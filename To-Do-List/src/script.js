const input = document.querySelector("#inputbox");
const listcon = document.querySelector("#listcon");

task = () => {
    if (input.value === "") {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");  //new element = li,, li = list..
        li.innerHTML = input.value;  //list value = input value
        listcon.appendChild(li);  //here li value will get appended to list container,, check html-line 19.
        let span = document.createElement("span");
        span.innerHTML = "&times;";  //&times; = cross tag..
        li.appendChild(span);  //now it will be appended after list.
    }
    input.value = "";  //after adding values clear input field.
    savedata(); //it will save data,, chk func at line 27.
}

listcon.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {  //if we have clicked on li..
        e.target.classList.toggle("checked");  //it will add checked class name.
        savedata();
    } else if (e.target.tagName === "SPAN") {  //if we have clicked on span..
        e.target.parentElement.remove();  //it will remove parent element.
        savedata();
    }
}, false);

savedata = () => {
    localStorage.setItem("data", listcon.innerHTML); //whatever is in list container html, it will bw save to local storage.
}

showtask = () => {
    listcon.innerHTML = localStorage.getItem("data");  //it will get data from storage.
}
showtask();
Dis = (val) => {   /*Dis function is defind here which is called on click in html*/
    document.querySelector('#display').value += val;
}

clr = () => {   /*clr function is defind here which is called on click in html*/
    document.querySelector('#display').value = '';
}

sol = () => {   /*sol function is defind here which is called on click in html*/
    let prblm = document.querySelector('#display').value;
    let solution = eval(prblm);
    document.querySelector('#display').value = solution;
}

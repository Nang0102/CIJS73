const data = [];


function addData() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const item = {
        name: name,
        phone: phone
    };
    data.push(item);
    // console.log(data);
}


document.getElementById("addData").innerHTML
item.addEventListener('click', addData())
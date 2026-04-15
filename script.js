async function getData() {
    let textBoxElem = document.getElementById("textBox");
    let city = textBoxElem.value;
    // console.log(city);
    let API = ` http://api.weatherapi.com/v1/current.json?key=5dd384b1c6af4c8ab6b52035260904&q=${city}`;


    try {
        let res = await axios.get(API);
        display(res.data)


    }
    catch (e) {
        console.log(e);
        let modal=new bootstrap.Modal(document.getElementById("staticBackdrop"));
        modal.show();
    }
}


function display(d) {
    console.log(d);
    let html = `
         <div class="row gap">
            <div class="col-6">
                <h1 class="name">${d.location.name}</h1>
                <p class="text">${d.current.condition.text}</p>
                <h1 class="temp">${d.current.temp_c}<sup>o</sup>C</h1>
            </div>
            <div class="col-6">
                <img src=${d.current.condition.icon} alt="" class="icon">
            </div>
        </div>


    `
    let refElem = document.getElementById("ref");
    refElem.innerHTML = html;
}



// http://api.weatherapi.com/v1/forecast.json?key=5dd384b1c6af4c8ab6b52035260904&q=kadapa%days=3
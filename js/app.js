const loadCountry = () => {
    const inputField = document.getElementById("input-field");
    const getText = inputField.value;
    inputField.value = '';

    const url = `https://coronavirus-19-api.herokuapp.com/countries/${getText}`

    fetch(url)
        .then(res => res.json())
        .then(data => showCountry(data))
}

const showCountry = e => {
    const showItem = document.getElementById("show-item");
    showItem.textContent = '';
    const div = document.createElement('div');
    div.classList.add('background');
    div.innerHTML = `
        <h1 class="mt-5 text-white fw-bold fs-1">${e.country}</h1> </br>
        <h4 class="text-white">Cases : ${e.cases}</h4></br>
        <h4 class="text-white">TodayCases : ${e.todayCases}</h4></br>
        <h4 class="text-white">Total Deaths : ${e.deaths}</h4></br>
        <h4 class="text-white">Today Deaths : ${e.todayDeaths}</h4></br>
        <h4 class="text-white">Recovered : ${e.recovered}</h4>
      `
    showItem.appendChild(div);

}
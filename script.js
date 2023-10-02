const apikey = "864758fab7dd78077efd85064c4cc361";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +` °C`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` Km/h`;
    
}

searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
})


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const  wetherBox= document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    
    
    const APIkey = '20a0fa5502ec973705f01401e14dc2d2';
    const city = document.querySelector('.search-box input').value;
    
    if(city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {

            const image = document.querySelector('.weather-box img');
            const tempereture = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main){
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
            
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Mist':
                    image.src = 'images/mist.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;    

                default:
                    image.src = 'images/cloud.png';
                    break;
            
            }


        });



})
$(document).ready(main);

var contador = 1;
function main() {
    $('.menu_bar').click(function () {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            })
        }
    });
}

 
 window.addEventListener('load', () => { 
    /* let lon
    let lat */

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            lat = posicion.coords.latitude
            lon = posicion.coords.longitude
            /* ubicacion por latitud longitud actual 
            const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=48c7486c46ecff2048a989bb73ee6980` */

            /* ubicacion por ciudad */

            const url = `https://api.openweathermap.org/data/2.5/weather?q=ValleHermoso&lang=es&units=metric&appid=48c7486c46ecff2048a989bb73ee6980`


            /* petición a la ai por fetch */
            fetch(url)
                .then(response => { return response.json() })
                .then(data => {
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`
                    
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed}m/s`
                    /* iconos animados */
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = '/images/animated/thunder.svg'
                            console.log('Tormenta');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = '/images/animated/rainy-2.svg'
                            console.log('Llovizna');
                            break;
                        case 'Rain':
                            iconoAnimado.src = '/images/animated/rainy-7.svg'
                            console.log('Lluvia');
                            break;
                        case 'Snow':
                            iconoAnimado.src = '/images/animated/snowy-6.svg'
                            console.log('Nieve');
                            break;
                        case 'Clear':
                            iconoAnimado.src = '/images/animated/day.svg'
                            console.log('Limpio');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = '/images/animated/weather.svg'
                            console.log('Atmófera');
                            break;
                        case 'Clouds':
                            iconoAnimado.src = '/images/animated/cloudy-day-1.svg'
                            console.log('Nubes');
                            break;
                        default:
                            iconoAnimado.src = '/images/animated/cloudy-day-1.svg'
                            console.log('por defecto');
                            break;
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })

    }
 })
 window.onload=function(){
    const typed = new Typed(".typedAboutMe", {
        strings: [
            'Presentación actividades verano 2023.'
          ],
        typeSpeed: 80,
        backDelay : 250,
        backSpeed: 150,
        loop: true,
      });
}
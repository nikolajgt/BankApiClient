import axios from 'axios';

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'Copenhagen,dk',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: 'imperial',
    mode: 'xml'
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': 'c50a8c25e1msha531523845a2408p137be8jsnec835d616a8e'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


const state = () => ({
    weatherData: {

    },
    
})





export default{
    namespaced:true,
    state,
}
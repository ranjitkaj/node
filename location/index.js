const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://map-places.p.rapidapi.com/queryautocomplete/json',
  params: {
    input: 'pizza near Sydney',
    radius: '50000',
    language: 'hindi',
    location: 'patna'
  },
  headers: {
    'X-RapidAPI-Key': '71ab1b7e65msh15ae3ee12761503p144469jsnb3b5228437d0',
    'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
  }
};

try {
	const response =axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
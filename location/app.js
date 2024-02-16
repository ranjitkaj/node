const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('ip', '146.160.63.10');

const options = {
  method: 'POST',
  url: 'https://ip-location5.p.rapidapi.com/get_geo_info',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '71ab1b7e65msh15ae3ee12761503p144469jsnb3b5228437d0',
    'X-RapidAPI-Host': 'ip-location5.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response =axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
const methods = {
    GET: {
        method: 'GET',
    },
    POST: {
        method: 'POST',
    },
};

const clientId = '40262456';
const key = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9';

const executeRequest = (url, method) => {
    return fetch(url, {
        method: method,
        headers: {
            Accept: "application/json",
            "ClientId": clientId,
            "Key": key
        },
    })
        .then(resp => resp.json())
        .catch((error) => {
            // Do something when error occur.
            // For now lets just log the error.
            console.log(error);
        });
};

const fetchAusCities = () => {
    return executeRequest('http://localhost:8080/api/australia/cities', methods.GET.method);
};

const fetchCityGeocode = (city) => {
    return executeRequest(`http://localhost:8080/api/geocode/${city},Australia`, methods.GET.method);
};

const fetchWeather = (lat, lon) => {
    return executeRequest(`http://localhost:8080/api/forecast?lat=${lat}&lon=${lon}`, methods.GET.method);
};

export default {
    fetchAusCities,
    fetchCityGeocode,
    fetchWeather,
}
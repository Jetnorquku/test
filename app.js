const axios = require('axios');

const text = 'Hello World!';

console.log({ text });

// -main--------------------------------
//    - b jq / features--------> merge(pull nese do marr te rejat)

//? fetching data from the internet

axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
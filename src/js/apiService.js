const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23129630-9573c017c45744d32c0b55f39';

function fetchPicture (picture) {

return fetch(`${BASE_URL}?q=${picture}&key=${KEY}`)
    .then(data => data.json());
};

export default { fetchPicture };

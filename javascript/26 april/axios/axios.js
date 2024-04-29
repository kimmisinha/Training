const axios = require('axios');

// Function to fetch data asynchronously
async function fetchData() {
    try {
        // Fetch data from an API (e.g., JSONPlaceholder)
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        console.log(response)
        
        // Extracting the data from the response
        const data = response.data;
        
        // Logging the fetched data
        console.log('Fetched data:', data);
    } catch (error) {
        // Handling errors
        console.error('Error fetching data:', error.message);
    }
}

// Call the async function to fetch data
fetchData();

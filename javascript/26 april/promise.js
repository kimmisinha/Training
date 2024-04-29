// A Promise is an Object that links Producing code and Consuming code

// Function to simulate fetching data asynchronously
function fetchData() {
  return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from a server)
      setTimeout(() => {
          const data = { message: 'Data fetched successfully' };
          // Resolve the Promise with the fetched data
          resolve(data);
          // In case of an error, reject the Promise
          // reject(new Error('Failed to fetch data'));
      }, 2000); // Simulate a delay of 2 seconds
  });
}

// Using the Promise to fetch data
fetchData()
  .then(data => {
      // Handle the resolved Promise (success case)
      console.log('Data:', data);
  })
  .catch(error => {
      // Handle the rejected Promise (error case)
      console.error('Error:', error);
  });

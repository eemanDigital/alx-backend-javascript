function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call with a setTimeout
    setTimeout(() => {
      const data = { message: 'API response data' };
      const error = null; // Set this to a specific error object if there's an error

      if (error) {
        reject(error); // Reject the promise with an error if applicable
      } else {
        resolve(data); // Resolve the promise with the data
      }
    }, 2000); // Simulated 2-second delay
  });
}

export default getResponseFromAPI;

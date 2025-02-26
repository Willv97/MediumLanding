fetch('https://mediumapi.com/v1/user/MYUSERNAME') // Sends a request to the URL
.then(response => response.json()) //Convert the response to json
.then(data => console.log(data)) // Log the result
.catch(error => console.error('Error fetching Medium data')); // Handle errors
//fetch('https://mediumapi.com/v1/user/MYUSERNAME') // Sends a request to the URL
//.then(response => response.json()) //Convert the response to json
//.then(data => console.log(data)) // Log the result
//.catch(error => console.error('Error fetching Medium data')); // Handle errors 

// function to get medium posts
async function fetchMediumPosts() {
    const feedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@willv1357";

    try {
        const response = await fetch(feedUrl);
        const data = await response.json();

        let postsHTML = "";
        data.items.forEach(post => {
            postsHTML += `
                <div class="post">
                    <img src="${post.thumbnail}" alt="Thumbnail" class="post-thumbnail">
                    <div class="post-content">
                        <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
                        <p class="date">${new Date(post.pubDate).toDateString()}</p>
                        <p>${post.description.substring(0, 150)}...</p>
                    </div>
                </div>
            `;
        });

        document.getElementById("medium-posts").innerHTML = postsHTML;
    } catch (error) {
        console.error("Error fetching Medium Posts:", error);
    }
}

fetchMediumPosts(); //display medium posts
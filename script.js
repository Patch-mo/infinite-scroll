// Unsplash API
const count = 10;
apiKey = 'S9V3pahZrnC8cRDQzl-cdscjUXQphtnXymz3z_3fWPQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// Get photos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // catch error here
    }
}

// On Load
getPhotos();

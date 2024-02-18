const apiContainer = document.getElementById('apiContainer');

fetch('https://api.publicapis.org/entries')
.then((response)=>{
    if(!response.ok){
        console.error('Network was not responsive')
    }
    return response.json()
})
.then((data)=>{
    data.entries.forEach((entry) => {
        const card = document.createElement("div");
        card.classList.add('card');
        
        const authID = document.createElement('h1');
        authID.textContent = `ID:  ${entry.API}`

        const description = document.createElement('p');
        description.textContent = `Description: ${entry.Description}`

        const https = document.createElement('p');
        https.textContent = `HTTPS: ${entry.HTTPS}`

        const cors = document.createElement('p');
        cors.textContent = `Cors: ${entry.Cors}`

        const category = document.createElement('p');
        category.textContent = `Category: ${entry.Category}`

        const link = document.createElement('a');
        link.href = entry.Link;
        link.textContent = `Link: ${entry.Link}`

        card.appendChild(authID);
        card.appendChild(description);
        card.appendChild(https);
        card.appendChild(cors);
        card.appendChild(link);
        card.appendChild(category);
        
        apiContainer.appendChild(card);

    });
})
.catch((error)=>{
    console.error('A problem while fetching the data')
})



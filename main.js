// Function to GET data from Art Institute API
async function clickedEvent(img_index) {
    let index = img_index;
    let info = document.getElementsByTagName('img')[img_index].attributes[0].value
    console.log(info);
    let headers = new Headers([
        ['Content-Type', 'applications/json'],
        ['Accept', 'applications/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${info}`, {
            method: 'GET',
            headers: headers
        }
    );

    let result = await fetch(request);

    let response = await result.json();

    let title = response.data.title;
    let date = response.data.date_display;
    let artist = response.data.artist_title;

    console.log(response);
    console.log(title);
    console.log(date);
    console.log(artist);

    return addCode(index, title, date, artist);
}

// Function to take convert the clicked event id number to img_index
function getInfo(id) {
    switch (id) {
        case '76571':
            clickedEvent(0)
            break;

        case '90048':
            clickedEvent(1)
            break;
            
        case '82750':
            clickedEvent(2)
            break;
            
        case '86998':
            clickedEvent(3)
            break;
            
        case '87008':
            clickedEvent(4)
            break;
            
        case '20684':
            clickedEvent(5)
            break;
    }
}

// Function to insert code into HTML
function addCode(index, title, date, artist) {
    document.getElementsByTagName('img')[index].insertAdjacentHTML("afterend",
    `<h6 class="p-md-5 p-sm-5 col-lg-2 col-md-6 pe-sm-5">${date}</h6>`);
    document.getElementsByTagName('img')[index].insertAdjacentHTML("afterend",
    `<h6 class="p-md-5 p-sm-5 col-lg-2 col-md-6 pe-sm-5">${artist}</h6>`);
    document.getElementsByTagName('img')[index].insertAdjacentHTML("afterend",
    `<h6 class="p-md-5 p-sm-5 col-lg-2 col-md-6 pe-sm-5">${title}</h6>`);
}
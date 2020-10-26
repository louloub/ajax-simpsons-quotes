function fetchSimpsonJSON() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';

    axios.get(url)
        .then(function (response) {
            // let a = response.data
            // console.log(a[0].character)
            return response.data; 
        })
        .then(function (simpson) {
            console.log('data decoded from JSON:', simpson);

            // Build a block of HTML
            const simpsonHtml = `
                <p><strong>${simpson[0].character}</strong></p>
                <p>${simpson[0].quote}</p>
                <img src="${simpson[0].image}" />`;
            document.querySelector('#simpson').innerHTML = simpsonHtml;
        });
}

fetchSimpsonJSON();

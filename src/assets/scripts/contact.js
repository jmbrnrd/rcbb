export default function () {

    const api = location.host.includes('localhost')
        ? 'https://localhost:4000'
        : 'https://api.restaurantcollective.io' ;
    console.log(api);
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const userData = Object.fromEntries(new FormData(form));
        const formObj = Object.assign(userData, {
            api: 'e21421ieb2l1eb2134g21ieg21be2i1n42432',
            userCode: 'CF-418-Beta'
        });

        console.log(formObj);

        fetch(`${api}/public/sendcontactfromwebsite`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formObj)
        })
            .then(response => {
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (response.message) || response.status;
                    return Promise.reject(error);
                }
                // display success
                //dspModalMessage();
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
    });

}



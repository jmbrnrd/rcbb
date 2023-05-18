export default function () {
    const api = 'https://api.restaurantcollective.io';
    console.log(`API ${api}`);
    // grab form
    const form = document.getElementById('contactForm');
    // on submit
    form.addEventListener('submit', (e) => {

        e.preventDefault();
        // get key/value pairs
        const userData = Object.fromEntries(new FormData(form));
        // Add the keys
        const formObj = Object.assign(userData, {
            api_key: 'e21421ieb2l1eb2134g21ieg21be2i1n42432',
            user_code: 'CF-418-apptiser'
        });

        //console.log(formObj);

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
                console.log(response);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
    });

}



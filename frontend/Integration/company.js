async function getAllCompanies() {
    return fetch('http://localhost:8080/companies/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorResponse => {
                throw new Error(errorResponse.message);
            });
        }
        return response.json();
    })
    .catch(error => {
        throw error.message; // Rethrow the error to propagate it further
    });
}

async function getCompanyById(id) {
    return fetch(`http://localhost:8080/companies/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorResponse => {
                throw new Error(errorResponse.message);
            });
        }
        return response.json();
    })
    .catch(error => {
        throw error.message; // Rethrow the error to propagate it further
    });
}

async function updateCompany(id,data) {
    return fetch(`http://localhost:8080/companies/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorResponse => {
                throw new Error(errorResponse.message);
            });
        }
        return response.json();
    })
    .catch(error => {
        throw error.message; // Rethrow the error to propagate it further
    });
}

async function deleteCompanyById(id) {
    return fetch(`http://localhost:8080/companies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorResponse => {
                throw new Error(errorResponse.message);
            });
        }
        return response.json();
    })
    .catch(error => {
        throw error.message; // Rethrow the error to propagate it further
    });
}
export { getAllCompanies, getCompanyById,updateCompany,deleteCompanyById };

//All Functions are Working
//Getting All Companies
    // getAllCompanies()
    //     .then(data => {
    //         console.log(data); 
    //     })
    //     .catch(error => {
    //         console.log(error); // Handle any errors that occurred during the fetch call
    //     });

//Gettting a Company by ID
    // getCompanyById(0)
    //     .then(data => {
    //         console.log(data); // Access the data returned from the fetch call
    //         // You can work with the data here
    //     })
    //     .catch(error => {
    //         console.log(error); // Handle any errors that occurred during the fetch call
    //     });


    // const company = {
    //     "name": 'Tesla',
    //     "email": 'Tesla@gmail.com',
    //     "phoneNumber": '01144455123',
    //     "service" : 'Electronics',
    //     "description": 'An Electronic Cars Company',
    //     "address": 'Claifornia',
    //     "numberOfEmployee": '120',
    // }
    // updateCompany(9,company)
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });


    // deleteCompanyById(7)
    // .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
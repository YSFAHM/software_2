async function addApp(app) {
    return fetch('http://localhost:8080/applications/', {
        method: 'POST',
        body: JSON.stringify(app),
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

async function deleteAppById(id) {
    return fetch(`http://localhost:8080/applications/${id}`, {
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

async function getAppById(id) {
    return fetch(`http://localhost:8080/applications/${id}`, {
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


async function getAppsByJobId(jobId) {
    return fetch(`http://localhost:8080/applications/jobs/${jobId}`, {
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

export{addApp,deleteAppById,getAppById,getAppsByJobId};

// addApp(app)
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });

    // getAppById(3)
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
// getAppsByJobId(2)
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    
    // deleteAppById(2)
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

//All Functions are Working

//Example Of a Job to Add
// const app = {
// 	"name": 'Test',
// 	"email": 'Test@gmail.com',
// 	"phoneNumber": '01147159726',
// 	"cvUrl": 'https://Test.com/myCV',
// 	"jobId": '2',
// }

//How to call the Function in another file
//import {addApp} from './application.js';
// addApp(app)
//         .then(data => {
//             //ok Response
//             console.log(data);
//         })
//         .catch(error => {
//             //Not ok Response
//             console.log(error);
//         });

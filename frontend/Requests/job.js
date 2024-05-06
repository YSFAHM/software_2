async function getAllJobs() {
    return fetch('http://localhost:8080/jobs/all', {
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
async function getAllJobsForCompany(Companyid) {
    return fetch(`http://localhost:8080/jobs/companies/${Companyid}`, {
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

async function getJobById(id) {
    return fetch(`http://localhost:8080/jobs/${id}`, {
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

async function addJob(job) {
    return fetch('http://localhost:8080/jobs/', {
        method: 'POST',
        body: JSON.stringify(job),
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

async function updateJob(id,data) {
    return fetch(`http://localhost:8080/jobs/${id}`, {
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

async function deleteJobById(id) {
    return fetch(`http://localhost:8080/jobs/${id}`, {
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
export { getAllJobs, getJobById,addJob,updateJob,deleteJobById,getAllJobsForCompany};


// const job = {
// 	"title": 'UI_UX',
// 	"location": 'Berlin',
// 	"seniorityLevel": 'Junior',
// 	"salary": '$100,000 - $120,000',
// 	"description": 'sdadad',
// 	"workTime": '45',
// 	"employmentType": 'Full-time',
// 	"companyId": '6',
// }
// addJob(job)
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });


// updateJob(4,job)
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });


// deleteJobById(5)
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });


//Getting All Jobs
    // getAllJobs()
    //     .then(data => {
    //         console.log(data);
    //         //fillTable(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    
    
    //Getting All Company Jobs
    // getAllJobsForCompany(6)
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });


    //Getting a Specific Job by ID
    // getJobById(2)
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

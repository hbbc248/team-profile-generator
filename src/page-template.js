// create the enigneers section
const generateEngineers = engineersData => {
    if (!engineersData) {
        return "";
    }
    return `
        ${engineersData.map(({ name, id, email, github, role}) => {
            return `
                <div class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <div class="card-header text-white bg-primary">
                            <h3>${name}</h3>
                            <h4><i class="fas fa-user"></i> ${role}</h4>
                        </div>
                        <div class="card-body bg-light">
                            <div class="card"> 
                                <ul class=" card-body list-group list-group-flush">
                                    <li class="list-group-item">Employee ID: ${id}</li>
                                    <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
                                    <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                                </ul>
                            </div>    
                        </div>   
                    </div>
                </div>
            `;
        })
        .join("")}    
    `;
};

// create the interns section
const generateInterns = internsData => {
    if (!internsData) {
        return "";
    }
    return `
        ${internsData.map(({ name, id, email, school, role}) => {
            return `
                <div class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card">
                        <div class="card-header text-white bg-primary">
                            <h3>${name}</h3>
                            <h4><i class="fas fa-user-graduate"></i> ${role}</h4>
                        </div>
                        <div class="card-body bg-light">
                            <div class="card"> 
                                <ul class=" card-body list-group list-group-flush">
                                    <li class="list-group-item">Employee ID: ${id}</li>
                                    <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
                                    <li class="list-group-item">School: ${school}</li>
                                </ul>
                            </div>    
                        </div>   
                    </div>
                </div>
            `;
        })
        .join("")}    
    `;
};

module.exports = employeesData => {
    // take managers data only
    const managerData = employeesData[0];
    const engineersData = employeesData.filter(employeesData => employeesData.role === "Engineer");
    const internsData = employeesData.filter(employeesData => employeesData.role === "Intern");
    
    return `

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <script src="https://kit.fontawesome.com/f44a6647ff.js" crossorigin="anonymous"></script>   
        </head>

        <body>
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center bg-danger my-5 py-5 display-4 text-white">My Team</div>
                    </div>
                </div>
            </header>
            <main>
                <section class="container">
                    <div class="row justify-content-evenly">
                        <div class="col-12 col-md-6 col-xl-4 mb-4">
                            <div class="card">
                                <div class="card-header text-white bg-primary">
                                    <h3>${managerData.name}</h3>
                                    <h4><i class="fas fa-user-tie"></i> ${managerData.role}</h4>
                                </div>
                                <div class="card-body bg-light">
                                    <div class="card"> 
                                        <ul class=" card-body list-group list-group-flush">
                                            <li class="list-group-item">Employee ID: ${managerData.id}</li>
                                            <li class="list-group-item">email: <a href="mailto:${managerData.email}">${managerData.email}</a></li>
                                            <li class="list-group-item">Office phone number: ${managerData.officeNumber}</a></li>
                                        </ul>
                                    </div>    
                                </div>   
                            </div>
                        </div>
                        ${generateEngineers(engineersData)}
                        ${generateInterns(internsData)}                       
                    </div> 
                </section>
            </main>
            <footer class="container text-center py-3">
                <h4 class="text-dark">&copy; 2021 by Ibr@him</h4>
            </footer>
        </body>
    </html>
    `;
};
const fs = require ('fs');


module.exports = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            console.log(`
            ***************************************************************
            ********** YOUR TEAM PROFILE HTML HAS BEEN CREATED ************
            ******* THANK YOU FOR USING TEAM PROFILE GENERATOR v1.0 *******
            ********************* HAVE A GREAT DAY !***********************
            ***************************************************************
            `);
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


const userErrors = (error) => {
    console.log(error)
    let errors = {email:'',password:'',fullname:''};

    //error for duplicate email(unique)
    if(error.code === 1100){
        errors.email = 'Email is already taken. Please provide a new email address.';
        return;
    }
    //other validation errors from mongoose - User schema
    if(error.message.includes('User validation failed')){
        Object.values(error.errors).forEach(({properties}) => {
            const {path, message} = properties;
            console.log(path,message);
            errors[path] = message;
        });
    }


    return errors;
};

module.exports = userErrors;
const userErrors = (error) => {
    let errors = {email:'',password:'',fullname:''};
    //error for duplicate email(unique)
    if(error.code === 11000){
        errors.email = 'Email is already taken. Please provide a new email address.';
        return errors;
    }
    console.log(error);
    if(error.message === 'email'){
        errors.email = 'Login failed. Please check your email and password.';
        return errors;
    }

    if(error.message === 'password'){
        errors.password = 'Login failed. Please check your email and password.';
        return errors;
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
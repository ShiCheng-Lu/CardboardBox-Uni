const formNameHandler = (form, res) => {
    if (!form.firstName) {
        res = {
            success: false,
            message: "missing first name"
        }
        return;
    }
    if (!form.lastName) {
        res = {
            success: false,
            message: "missing last name"
        }
        return;
    }
    var age = parseInt(form.age);
    if (age < 16) {
        res = {
            success: false,
            message: "too young"
        }
        return;
    }
    
}







module.exports.names = formNameHandler;

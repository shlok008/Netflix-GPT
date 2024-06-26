export const CheckValidateData=(email,password) =>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);  

    if(!isEmailValid) return "Email not valid";
    if(!isPasswordValid) return "Password not valid";
    return null;
}
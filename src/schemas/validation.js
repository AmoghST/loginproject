import * as Yup from 'yup'

export const SignupValidation = Yup.object({
    name:Yup.string().min(2).max(10).required("please enter your name"),
    email:Yup.string().email('please enter valid email').required("Please enter correct email"),
    password:Yup.string().min(4).required("Please enter password"),
    cpassword:Yup.string().required().oneOf([Yup.ref('password'),null, "password must match"])

});

export const LoginValidation = Yup.object({
    email:Yup.string().email().required("Please enter correct email"),
    password:Yup.string().min(4).required("Please enter password")
});
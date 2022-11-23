import { emailRegex } from "../constant"

export const validation = (name, value) => { 
    switch (name) {
        case 'email':
            if(!value || !value.trim() === ""){
                return "Email is required."
            }else if(!emailRegex.test(value)){
                return "Invalid email address."
            }else return null
        case 'password':
            if(!value || !value.trim() === ""){
                return "Password is required."
            }else if(value.length < 8 || value.length > 16){
                return "Password must be 8-16 characters."
            }else return null
        default: return null
    }
}
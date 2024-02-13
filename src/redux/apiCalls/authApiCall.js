import { authActions } from "../slices/authSlice";

//Login User
export function loginSuccess(user){
    return async (dispatch) =>{
        try {
            const response = await fetch("https://virtual-surgery.onrender.com/api/auth/login",{
                method: 'POST', 
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user })
            })
            const data = await response.json();
            
            dispatch(authActions.loginSuccess(data));
            localStorage.setItem("userInfo", JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    }
}
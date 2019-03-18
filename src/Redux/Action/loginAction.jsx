function login(token){
    return {
        type:'login',token:token,loginStatus:true
    }
}


export const loginAction = (token) => {
       return (dispatch) =>{
        if(Object.getOwnPropertyNames(token).length > 0 ){
            dispatch(login(token))
        }
            return false;
    }
}
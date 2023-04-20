import axios from 'axios';

// User Authenticate
export const signUp = async(name, email, password) => {
    let response = await axios.post('/user/users/' , {
        'name': name,
        'email' : email,
        'password' : password
    })
    console.log(response.data.success)
    return response.data.success
}

export const logIn = async(email, password, setUser) => {
    let response = await axios.put('/user/users/', {
        'email' : email,
        'password' : password
    })
    window.location.reload()
    setUser(response.data)
}

export const currUser = async() =>{
    let response = await axios.get('/user/users/')
    console.log('currUser',response.data)
    return response.data
}

export const logOut = async(setUser) => {
    let response = await axios.post('/user/users/')
    if(response.data.logout){
        setUser(null)
    }
}
// Child related
export const addChild = async(name, birthdate, gender,profile_photo,username) => {
    const formData= new FormData();
    formData.append('name', name);
    formData.append('birthdate' , birthdate);
    formData.append('gender' , gender);
    formData.append('profile_photo' , profile_photo,);
    formData.append('userID' , username)
    let response = await axios.post('/child/' , formData, {
        "Content-Type": "multipart/form-data"

    })
    console.log(response.data)
    return response.data.success
}
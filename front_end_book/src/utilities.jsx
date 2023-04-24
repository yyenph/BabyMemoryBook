import axios from 'axios';
import { useParams } from 'react-router-dom';
import AddAlbum from './views/Album/AddAlbum';

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
    console.log('login',response.data)
    setUser(response.data)
    // window.location.reload()
}

export const currUser = async() =>{
    let response = await axios.get('/user/users/')
    if (response.data['name']) {//check to make sure user is actually login so user? understand correctly
        return response.data 
    }
    return null
}

export const logOut = async(setUser) => {
    let response = await axios.post('/user/users/',{} )
    setUser(null)
    
    
}

// Child related_---------------------------------------
export const addChild = async(name, birthdate, gender,profile_photo,username) => {
    const formData= new FormData();
    formData.append('name', name);
    formData.append('birthdate' , birthdate);
    formData.append('gender' , gender);
    formData.append('profile_photo' , profile_photo,);
    formData.append('username' , username)
    let response = await axios.post('/child/' , formData, {
        "Content-Type": "multipart/form-data"

    })
    console.log(response.data)
    window.location.reload()
    return response.data.success
}

export const getChildList = async()=> {
    let response= await axios.get('/child/')
    return response.data.child_list
}

//can not use UseParams here, can only use UseParams inside components that in rendered by the Route
export const getAlbumloader = async(child_name)=> {
    try{
        const response= await axios.get(`/child/${child_name}/albums/`)
        console.log(`album from ${child_name}`,response.data)
        return response.data['album_list']
    } catch (e){
        console.error(e)
        return null
    }  

}

export const albumContentLoader = async(child_name,album_name)=> {
    try{
        const response= await axios.get(`/child/${child_name}/${album_name}/`)
        console.log('albumContentLoader',response.data)
        return response.data['album_content']
    } catch (e){
        console.error(e)
        return null
    }  

}


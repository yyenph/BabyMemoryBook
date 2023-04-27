import axios from 'axios';




//API submit handler
export const submitNameHandler = async (gender,setNameList)=>{
    const response = await axios.get('https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames',{
    params: {gender: gender},    
    headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'baby-names-by-api-ninjas.p.rapidapi.com'
          }
    });
    setNameList(response.data);
  
  }
  //Lyrics finder api

export const submitLyricsHandler = async (setQuote)=>{
    // e.preventDefault();
    const response = await axios.get('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote'
    ,{
        params: {
            token: 'ipworld.info'
          },
          headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
          }
    });
   
    setQuote(response.data);

  }
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
//load entries that included in each album based on album name and child name
export const albumContentLoader = async(child_name,album_name)=> {
    try{
        const response= await axios.get(`/child/${child_name}/${album_name}/`)
        console.log('serialized_entry',response.data)
        return response.data['serialized_entry']
        
        // console.log('albumContentLoader',response.data)
        // return response.data['album_content']
    } catch (e){
        console.error(e)
        return null
    }  

}

//add new entry to album. child_name,album_name is passed from useParams, the rest are from form submit
export const newEntry =async(title,date,image,caption,album_name,username,child_name)=>{
    try{
        const formData= new FormData();
        formData.append('title', title);
        formData.append('date' , date);
        formData.append('image' , image,);
        formData.append('caption' , caption);
        formData.append('album_name' , album_name,);
        formData.append('username' , username)
        const response = await axios.post(`/child/${child_name}/${album_name}/newentry`,formData,{
            "Content-Type": "multipart/form-data"
    
        })
        console.log('newEntry',response.data)
        return response.data.sucess
    }catch (e){
        console.error(e)
        return null
    }
}
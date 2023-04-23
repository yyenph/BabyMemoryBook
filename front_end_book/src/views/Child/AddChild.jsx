import { useState } from "react";
import Select from 'react-select';
import { addChild, currUser } from "../../utilities";
import { useNavigate } from "react-router-dom";


const Gender= [
    {label: 'Girl', value:'G'},
    {label: 'Boy', value:'B'},
    {label: 'I prefer not to say', value:'N'},
]


export default function AddChild2(){
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [profile_photo,setProfile_photo] =useState('');
    const navigate=useNavigate();
    
    const handleImage =(e)=> {
        console.log(e.target.files)
        setProfile_photo(e.target.files[0])
    }

    const handleSubmit =async (e)=>{
        
            e.preventDefault();
            const curruser = await currUser();
            console.log('addchild',curruser)
            console.log(curruser['name'])
            const username=curruser['name'];
            addChild(name, birthdate, gender,profile_photo,username);
            setName('');
            setBirthdate('');
            setGender('');
            setProfile_photo(null);
            navigate('/')
            
    }

    return(
        <form onSubmit={handleSubmit
        }>
            <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="birthdate YYYY-MM-DD"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            
            <div>
                <Select 
                    options={Gender}
                    onChange={(selectedOption) => setGender(selectedOption['value'])} 
                />
            </div>
            <div>
                <input type="file" name='profile_photo' onChange={handleImage}/>
            </div>
            <input type="submit" value="Save Child" />
    
        </form>
    )
}
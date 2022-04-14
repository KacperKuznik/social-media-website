import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';

function AddAvatar() {
    const [avatar, setAvatar] = useState(null)
    async function upload(e){
       
        const data = new FormData()
        data.append('avatar', avatar)
        let config = {
            withCredentials: true,
            headers: {
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/users/upload/', data, config)
        .then(res => {
            const user = res.data;
            localStorage.setItem("user", JSON.stringify(user))
            window.location.reload(false);
        })
        
        .catch(err =>{
            console.log(err.response);
        })
    }


    return (<div>
      <input type='file'  accept=".png, .jpg" onChange={(e) => setAvatar(e.target.files[0])}></input>
      <button onClick={upload}></button>

      </div>
    );
}

export default AddAvatar;

import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';

function AddAvatar() {
    const [avatar, setAvatar] = useState(null)
    async function upload(e){
       
        let body = {
            avatar: avatar
        }
        console.log(body)
        let config = {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/api/upload/', body, config)
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

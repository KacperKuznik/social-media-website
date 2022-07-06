import axios from 'axios';
import Cookies from 'js-cookie';
import changeAvatar from '../../img/change_avatar.png'
import './ChangeAvatar.css'

function ChangeAvatar() {
    
    async function upload(avatar){
       
        const data = new FormData()
        data.append('avatar', avatar)
        let config = {
            withCredentials: true,
            headers: {
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/users/change_avatar/', data, config)
        .then(res => {
            const user = res.data;
            localStorage.setItem("user", JSON.stringify(user))
            window.location.reload(false);
        })
        .catch(err =>{
            console.log(err.response);
        })
    }


    return (
    <div>
        
        <label>
            <img src={changeAvatar} alt="change avatar" className='change-avatar'/>
            <input type='file' id='avatar-input' accept=".png, .jpg" onChange={(e) => upload(e.target.files[0]) }></input>
        </label>
    </div>
    );
}

export default ChangeAvatar;

import axios from 'axios';
import Cookies from 'js-cookie';
import addPhoto from '../../img/add_photo.png'

function UploadPhotos() {
    
    async function upload(avatar){
        console.log(avatar)
        // const data = new FormData()
        // data.append('avatar', avatar)
        // let config = {
        //     withCredentials: true,
        //     headers: {
        //     'X-CSRFTOKEN': Cookies.get('csrftoken'),
        //     }
        // }
        // await axios.post('/users/change_avatar/', data, config)
        // .then(res => {
        //     const user = res.data;
        //     localStorage.setItem("user", JSON.stringify(user))
        //     window.location.reload(false);
        // })
        // .catch(err =>{
        //     console.log(err.response);
        // })
    }


    return (
    <div>
        
        <label>
            <img src={addPhoto} className='add-photo'/>
            <input type='file' id='photo-input' accept=".png, .jpg" onChange={(e) => upload(e.target.files) } multiple></input>
        </label>
    </div>
    );
}

export default UploadPhotos;

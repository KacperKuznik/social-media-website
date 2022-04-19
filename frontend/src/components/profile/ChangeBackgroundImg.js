import axios from "axios";
import Cookies from "js-cookie";
import changeBackground from '../../img/change_background.png'
import './ChangeBackgroundImg.css'
function ChangeBackgroundImg(props){

    async function upload(background){
       
        const data = new FormData()
        data.append('background', background)
        let config = {
            withCredentials: true,
            headers: {
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/users/change_background/', data, config)
        .then(res => {
            const user = res.data;
            localStorage.setItem("user", JSON.stringify(user))
            window.location.reload(false);
        })
        .catch(err =>{
            console.log(err.response);
        })
    }

    return(
        <label className='change-background'>
        Change Background
        <img src={changeBackground} />
        <input type='file'  accept=".png, .jpg" onChange={(e) => upload(e.target.files[0]) }></input>
    </label>
    )
}
export default ChangeBackgroundImg;
import axios from 'axios';
import Cookies from 'js-cookie';
import addPhoto from '../../img/add_photo.png'
import { useState } from 'react';
import './UploadImages.css'

function UploadImages(props) {

    function addImages(files){
        props.setImages(files);        
    }


    return (
    <div>        
        <label>
            <img src={addPhoto} className='add-image'/>
            <input type='file' id='image-input' accept=".png, .jpg" onChange={(e) => addImages(e.target.files) } multiple></input>
        </label>
    </div>
    );
}

export default UploadImages;

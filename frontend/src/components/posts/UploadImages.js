import addPhoto from '../../img/add_photo.png'
import './UploadImages.css'

function UploadImages(props) {

    function addImages(files){
        props.setImages(files);        
    }


    return (
    <div>        
        <label>
            <img src={addPhoto} alt='add' className='add-image'/>
            <input type='file' id='image-input' accept=".png, .jpg" onChange={(e) => addImages(e.target.files) } multiple></input>
        </label>
    </div>
    );
}

export default UploadImages;

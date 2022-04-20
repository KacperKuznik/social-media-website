import ChangeBackgroundImg from "./ChangeBackgroundImg";

function BackgroundImg(props){
    return(<div className='background-img'>
        <img src={props.background}></img>
        {props.isMyUser ? <ChangeBackgroundImg username={props.username} />: null}
    </div>)
}
export default BackgroundImg;
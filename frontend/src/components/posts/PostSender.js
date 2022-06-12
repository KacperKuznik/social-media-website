import './PostSender.css'

function PostSender(props){
    return (
        <div className="post-sender">
            <img src={props?.avatar} alt='user avatar'/>
            <h3>{props?.first_name + " " + props?.last_name}</h3>
        </div>
    )


}
export default PostSender;
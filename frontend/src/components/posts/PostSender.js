import './PostSender.css'
function PostSender(props){

    return (
        <div className="post-sender">
            <img src={props.avatar} />
            <h3>{props.firstname + " " + props.lastname}</h3>
        </div>
    )


}
export default PostSender;
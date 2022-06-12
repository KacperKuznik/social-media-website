function PostData(props){
    return (
        <div >
            {props?.post?.text}
            {props?.post?.image_set?.map((image, index) => <img src={image.image} alt="post content" style={{'width': '100%', 'max-height': '700px', 'object-fit': 'cover'}} key={index}/>)}
        </div>
    )
}
export default PostData;
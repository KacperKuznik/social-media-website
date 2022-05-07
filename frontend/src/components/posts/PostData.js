function PostData(props){

    return (
        <div >
            {props?.post?.text}
            {props?.post?.images?.map((image, index) => <img src={image} style={{'width': '100%', 'max-height': '700px', 'object-fit': 'cover'}} key={index}/>)}
        </div>
    )


}
export default PostData;
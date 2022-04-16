import './Post.css'
import PostActionButtons from './PostActionButtons';
import PostSender from './PostSender';

import img from '../wp5568745-archlinux-anime-wallpapers.png'
function Post(){

    return (
        <div className="post" >
            <PostSender avatar={img} firstname={"jan"} lastname={""}/>
            {/* <PostData />
            
            <PostComment /> */}
             siema to mój piewszy post
           
           
            <hr></hr>
            <PostActionButtons />
        </div>
    )


}
export default Post;
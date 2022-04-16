function BackgroundImg(props){
    console.log(props)
    return(<div className='background-img'>
        <img src={props.img}></img>
    </div>)
}
export default BackgroundImg;
import "./RoundedBox.css"
const RoundedBox = (props) => {
    return(
    <div className="rounded-box">
        {props.children}
    </div>)
  }

export default RoundedBox;
import './DropdownMenu.css'
const DropdownMenu = (props) => {
    
    return(
        <div className="dropdown-menu">
            {props.children}
        </div>
    )
}
export default DropdownMenu
const Overlay = (props) => {
    const overlayStyles = {
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }
    
    return(<div>
        
      <div style={overlayStyles} onClick={() => props.onClick()}/>

    </div>)
  }

export default Overlay;
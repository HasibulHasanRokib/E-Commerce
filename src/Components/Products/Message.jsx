 import "./Products.css"

const Message = ({message}) => {
  return (
    <div>
      <div 
      className={`message-section ${message && 'message-section--open'}`}
      >
        <h2>Item has been added to the cart ✅</h2>
      </div>
    </div>
  )
}

export default Message

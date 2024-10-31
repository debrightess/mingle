import { FaCircleArrowLeft } from "react-icons/fa6";

const ChatHeader = () => {
  return (
    <div className="chat-container-header" >
      <div className="profile">
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <h3>UserName</h3>
      </div>
      <i className="log-out-icon"> <FaCircleArrowLeft/> </i>
    </div>
  )
}

export default ChatHeader
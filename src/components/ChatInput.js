import { useState } from "react"

const ChatInput = () => {
  const [textArea, setTextArea] = useState(null)

  return (
    <div className="chat-input">
      <textarea/>
      <button className="secondary-button">Submit</button>
    </div>
  )
}

export default ChatInput
import React, { useEffect, useState, useRef } from 'react'
import { useChatRoom } from '../../utils/connector'
import ChatRoom from '../../component/chatRoom'

const Messenger = () => {
  const { messages, sendMessage } = useChatRoom()
  const [newMessage, setNewMessage] = useState('')
  const messageRef = useRef()
  useEffect(() => messageRef.current)

  return (
    <React.Fragment>
      <ChatRoom
        messages={messages}
        messageRef={messageRef}
        newMessage={newMessage}
        handleNewMessageChange={e => {
          setNewMessage(e.target.value)
        }}
        handleKeyUp={e => {
          if (e.key === 'Enter') {
            if (newMessage !== '') {
              sendMessage(newMessage)
              setNewMessage('')
            }
          }
        }}
        handleSendMessage={() => {
          if (newMessage !== '') {
            sendMessage(newMessage)
            setNewMessage('')
          }
        }}
      />
    </React.Fragment>
  )
}

export default Messenger

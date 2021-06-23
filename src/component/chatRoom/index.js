import React from 'react'
import {
  Container,
  StyledCard,
  Action,
  SendButton,
  MessageInput,
  MessageContainer,
  OwnerLi,
  GuestLi,
  StyledOl
} from './styles'
const ChatRoom = ({
  messages,
  messageRef,
  newMessage,
  handleNewMessageChange,
  handleKeyUp,
  handleSendMessage
}) => {
  return (
    <Container>
      <StyledCard>
        <MessageContainer>
          <StyledOl>
            {messages.map((message, i) => {
              if (message.isOwner) {
                return (
                  <OwnerLi key={i}>
                    <span>{message.body}</span>
                  </OwnerLi>
                )
              }
              return (
                <GuestLi key={i}>
                  <span>{message.body}</span>
                </GuestLi>
              )
            })}
          </StyledOl>
          <div ref={messageRef}></div>
        </MessageContainer>
        <Action>
          <MessageInput
            id='message'
            label='Message'
            placeholder='enter message here'
            variant='outlined'
            value={newMessage}
            onChange={handleNewMessageChange}
            onKeyUp={handleKeyUp}
          />
          <SendButton
            disabled={!newMessage}
            variant='contained'
            color='primary'
            onClick={handleSendMessage}
          >
            Send
          </SendButton>
        </Action>
      </StyledCard>
    </Container>
  )
}
export default ChatRoom

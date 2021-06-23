import styled from 'styled-components'
import { Input, Card, Button } from 'antd'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #263238;
`
export const StyledCard = styled(Card)`
  width: 50em;
  height: 80%;
  position: relative;
`

export const Action = styled.div`
  display: flex;
  width: 96%;
  align-items: center;
  margin: 1em;
  position: absolute;
  bottom: 0;
`
export const SendButton = styled(Button)`
  width: 10em;
  height: 50%;
  margin: 0 2em;
`
export const MessageInput = styled(Input)`
  width: 100%;
`
export const MessageContainer = styled.div`
  overflow-y: auto;
  height: 85%;
`

export const OwnerLi = styled.li`
  margin: 1em;
  background-color: #0091ea;
  padding: 0.5em 1.5em;
  border-radius: 20px;
  color: #fff;
  word-break: break-word;
  max-width: 65%;
  width: fit-content;
  margin-right: auto;
`
export const GuestLi = styled.li`
  margin: 1em;
  background-color: #8bc34a;
  padding: 0.5em 1.5em;
  border-radius: 20px;
  color: #fff;
  word-break: break-word;
  max-width: 65%;
  width: fit-content;
  margin-left: auto;
`
export const StyledOl = styled.ol`
  padding-inline-end: 40px;
`

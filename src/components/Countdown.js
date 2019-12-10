import React from 'react'
import styled from 'styled-components/macro'
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'

JavascriptTimeAgo.locale(es)

const CountDownWrapper = styled.div`
  margin: 0.15rem auto;
  display: inline-block;
  font-size: 0.85rem;
  padding: 0.35rem 0.5rem 0.25rem;
  color: ${({ theme }) => theme.success};
  border-radius: 4px;
  &.current {
    background-color: ${({ theme }) => theme.success};
    color: white;
  }
  &.inactive {
    background-color: inherit;
    color: ${({ theme }) => theme.danger};
    opacity: 0.5;
    font-size: 0.75rem;
    padding: 0.15rem 0.25rem;
  }
`

const CountDown = props => {
  return (
    <CountDownWrapper
      className={`${props.inactive ? 'inactive' : ''} ${
        props.current ? 'current' : ''
      }`}
    >
      <ReactTimeAgo date={props.date} locale="es" />
    </CountDownWrapper>
  )
}

export default CountDown

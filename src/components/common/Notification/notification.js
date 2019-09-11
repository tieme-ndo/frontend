import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';




const Notification = ({ user }) => {

  const [top, setTop] = React.useState(-100)

  const NotificationDisplay = styled.div`
  background-color: palevioletred;
  color: black;
  padding: 16px;
  position: absolute;
  top: ${top}px;
  right: 16px;
  z-index: 999;
  transition: top 0.5s ease;
`
  // const onShow = () => {

  // }

  React.useEffect(function showNotification() {
    setTop(16)
  }, [])
  return (
    <>
      <button onClick={setTop}>
        {
          user && user.isAdmin ? (
            <i className="fa fa-bell fa-2x" style={{ padding: '12px', color: 'palevioletred' }}></i>
          ) : null
        }
      </button>
      <NotificationDisplay>Hellur!</NotificationDisplay>
    </>
  )
}

export default Notification;

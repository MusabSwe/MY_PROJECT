import React, { useEffect } from 'react'

const Alert = (props) => {
  // remove alert after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []) // run when the component call

  return <p className={`alert alert-${props.type}`} >{props.alertMsg}</p>
}

export default Alert
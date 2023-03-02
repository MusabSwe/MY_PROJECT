import React, { useEffect } from 'react'

const Alert = (props) => {
  return <p className={`alert alert-${props.type}`} >{props.alertMsg}</p>
}

export default Alert
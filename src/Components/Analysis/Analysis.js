import React from 'react'
import './Analysis.css'

const Analysis = (props) => {
  return(
    <h3>The current tone for {props.currency} is {props.tones[0]}.</h3>
  )
}

export default Analysis

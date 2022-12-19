import React from 'react'

export default function Button(props) {
  return (
    <button style={props.BtnStyle} className={'OrangeButton'}>
        <span style={props.BtnTxtStyle}>{props.BtnContent}</span>
    </button>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { ColorSchema } from '../../Utils/Context/ColorThemes'

export default function Button(props) {
  const Colors = React.useContext(ColorSchema)
  return (
    <Link to={props.Path} style={{ textDecoration: 'none' }} >
      <button style={props.BtnStyle} className={Colors.isDarkMode ? 'OrangeButton' : 'OrangeButtonNonGradient'} onClick={props.onClick}>
          <span style={props.BtnTxtStyle}>{props.BtnContent}</span>
      </button>
    </Link>
  )
}

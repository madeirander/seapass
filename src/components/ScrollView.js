import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { PropTypes } from 'prop-types'

function renderThumbVertical() {
  const thumbStyle = {
    backgroundColor: `#7AB6E7`,
    borderRadius: '5px',
    right: '0px',
  }
  return <div className="custom-thumb" style={thumbStyle} />
}

function renderTrackVertical() {
  const trackStyle = {
    position: 'absolute',
    width: '6px',
    right: '0px',
    bottom: '0px',
    top: '0px',
  }
  return <div className="custom-track" style={trackStyle} />
}

export default function ScrollView(props) {
  const { style, children, ...otherProps } = props

  return (
    <div style={style}>
      <Scrollbars
        autoHide
        // * these are the default values
        autoHideTimeout={1000} // *
        autoHideDuration={200} // *
        renderThumbVertical={renderThumbVertical}
        renderTrackVertical={renderTrackVertical}
        {...otherProps}
      >
        {children}
      </Scrollbars>
    </div>
  )
}

ScrollView.propTypes = {
  style: PropTypes.shape({}),
}

ScrollView.defaultProps = {
  style: {},
}

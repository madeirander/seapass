import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { PropTypes } from 'prop-types';
import css from 'dom-css';

function renderThumbVertical() {
  const thumbStyle = {
    backgroundColor: `#7AB6E7`,
    borderRadius: '5px',
    right: '0px',
  };
  return <div className="custom-thumb" style={thumbStyle} />;
}

function renderTrackVertical() {
  const trackStyle = {
    position: 'absolute',
    width: '6px',
    right: '0px',
    bottom: '0px',
    top: '0px',
  };
  return <div className="custom-track" style={trackStyle} />;
}

export default class ScrollView extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      scrollTop: 0,
      scrollHeight: 0,
      clientHeight: 0,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    const { scrollTop, scrollHeight, clientHeight } = this.state;
    const shadowTopOpacity = (1 / 20) * Math.min(scrollTop, 20);
    const bottomScrollTop = scrollHeight - clientHeight;
    const shadowBottomOpacity =
      (1 / 20) * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));
    css(this.shadowTop, { opacity: shadowTopOpacity });
    css(this.shadowBottom, { opacity: shadowBottomOpacity });
  }

  render() {
    const { style, ...props } = this.props;
    const containerStyle = {
      ...style,
      position: 'relative',
    };
    const shadowTopStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
    };
    const shadowBottomStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 10,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
    };
    return (
      <div style={containerStyle}>
        <Scrollbars
          autoHide
          // * these are the default values
          autoHideTimeout={1000} // *
          autoHideDuration={200} // *
          renderThumbVertical={renderThumbVertical}
          renderTrackVertical={renderTrackVertical}
          onUpdate={this.handleUpdate}
          {...props}
        />
        <div
          ref={c => {
            this.shadowTop = c;
          }}
          style={shadowTopStyle}
        />
        <div
          ref={c => {
            this.shadowBottom = c;
          }}
          style={shadowBottomStyle}
        />
      </div>
    );
  }
}

ScrollView.propTypes = {
  style: PropTypes.shape({}),
};

ScrollView.defaultProps = {
  style: {},
};

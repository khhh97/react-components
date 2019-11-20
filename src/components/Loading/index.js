import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/index.scss';

function Loading(props) {
  let { tip, className, style } = props;
  className = classNames('loading-line');
  return (
      <div className={className} style={style}>
        <div className="loading-line-content">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {
          tip && <p>{tip}</p>
        }
      </div>
  );
}

Loading.propTypes = {
  tip: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

Loading.defaultProps = {
  tip: '正在加载...'
};

export default Loading;

import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  title,
  description,
  onClick,
  itemStyles,
  className,
}) => {
  const itemStyle = className
    ? {}
    : {
      padding: '10px',
      cursor: onClick ? 'pointer' : 'default',
      ...itemStyles,
    };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick(e);
    }
  };

  return (
    <div
      className={className}
      style={itemStyle}
      onKeyDown={onKeyDown}
      onClick={onClick}
      tabIndex={0}
      role="menuitem"
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  itemStyles: PropTypes.object, // eslint-disable-line
  className: PropTypes.string,
};

ListItem.defaultProps = {
  title: '',
  description: '',
  onClick: null,
  itemStyles: {},
  className: '',
};

export default ListItem;

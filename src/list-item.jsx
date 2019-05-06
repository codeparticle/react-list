import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  item,
  onClick,
  itemStyles,
  className,
  tag,
}) => {
  const itemStyle = className
    ? {}
    : {
      cursor: onClick ? 'pointer' : 'default',
      ...itemStyles,
    };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick(e);
    }
  };
  const Tag = tag === 'dt' ? 'dd' : 'li';

  return (
    <Tag
      className={className}
      style={itemStyle}
      onKeyDown={onKeyDown}
      onClick={onClick}
      tabIndex={0}
      role="menuitem"
    >
      {item}
    </Tag>
  );
};

ListItem.propTypes = {
  tag: PropTypes.string.isRequired,
  item: PropTypes.string,
  onClick: PropTypes.func,
  itemStyles: PropTypes.object, // eslint-disable-line
  className: PropTypes.string,
};

ListItem.defaultProps = {
  item: '',
  onClick: null,
  itemStyles: {},
  className: '',
};

export default ListItem;

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './list-item';

const List = ({
  listItems,
  containerStyles,
  itemRenderer,
  className,
}) => {
  const renderedListItems = listItems.map((item) => {
    if (itemRenderer) {
      return <itemRenderer {...item} />;
    }

    return <ListItem {...item} />;
  });
  const containerStyle = className
    ? {}
    : {
      height: '100%',
      width: '200px',
      ...containerStyles,
    };

  return (
    <div
      style={containerStyle}
      className={className}
    >
      {renderedListItems}
    </div>
  );
};

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  containerStyles: PropTypes.object, // eslint-disable-line
  itemRenderer: PropTypes.node,
  className: PropTypes.string,
};

List.defaultProps = {
  containerStyles: {},
  itemRenderer: null,
  className: '',
};

export default List;

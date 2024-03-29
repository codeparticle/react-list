import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './list-item';

function List({
  listItems,
  containerStyles,
  itemRenderer,
  className,
  title,
  Tag,
}) {
  const renderedListItems = listItems.map((item) => {
    if (itemRenderer) {
      return <itemRenderer key={item.item} {...item} />;
    }

    return <ListItem key={item.item} {...item} tag={Tag} />;
  });
  const containerStyle = className
    ? {}
    : {
      display: 'flex',
      ...containerStyles,
    };
  const renderedTitle = title ? <h1>title</h1> : null;

  return (
    <Tag
      style={containerStyle}
      className={className}
    >
      {renderedTitle}
      {renderedListItems}
    </Tag>
  );
}

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  containerStyles: PropTypes.object, // eslint-disable-line,
    itemRenderer: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  Tag: PropTypes.string,
};

List.defaultProps = {
  containerStyles: {},
  itemRenderer: null,
  className: '',
  title: '',
  Tag: 'ul',
};

export default List;

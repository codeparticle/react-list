import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './list-item';

const List = ({
  listItems,
}) => {
  const renderedListItems = listItems.map((item) => {
    return <ListItem {...item} />
  });

  return (
    <ul>
      {renderedListItems}
    </ul>
  );
};

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;

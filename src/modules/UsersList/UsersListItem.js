import React from 'react';

function UsersListItem(props) {
  const {
    user: { name, age },
    clickHandler,
  } = props;

  return (
    <li onClick={clickHandler}>
      <p>
        {name} {age}
      </p>
    </li>
  );
}

export default UsersListItem;

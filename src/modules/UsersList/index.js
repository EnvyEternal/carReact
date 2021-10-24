import React, { Component } from 'react';
import UsersListItem from './UsersListItem';

const usersDB = [
  { id: 1, name: 'Grut', age: 25 },
  { id: 2, name: 'Elsa', age: 20 },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDB.map((u) => ({
        ...u,
        isSelected: false,
      })),
    };
  }

  mapUsers = (u, index) => {
    const { id } = u;
    const clickHandler = () => {
      const { users } = this.state;
      const newUsers = [...users];
      newUsers[index] = {
        ...newUsers[index],
        isSelected: !newUsers[index].isSelected,
      };
      this.setState({ users: newUsers });
    };

    return <UsersListItem key={id} user={u} clickHandler={clickHandler} />;
  };

  //[user1, user2] [<li>user1<li>,</li>user2</li>]
  // Для key брать id
  // Брать index опасно!!!
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUsers)}</ul>;
  }
}

export default UsersList;

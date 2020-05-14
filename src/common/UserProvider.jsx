import React, { Component, createContext } from 'react';
import { auth, getUserDocument } from './firebase';

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth == null) {
        this.setState({
          user: null,
        });
        return;
      }
      const doc = await getUserDocument(userAuth.uid);

      this.setState({
        user: {
          ...userAuth,
          displayName: userAuth.displayName ?? doc.displayName,
          photoURL: userAuth.photoURL ?? doc.photoURL,
        },
      });
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;

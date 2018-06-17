import React from 'react';
import Storage from './Storage';

export default class ComponentNeedingStorage extends React.Component {
  state = {
    username: '',
    favoriteMovie: '',
    isFetching: false,
  }

  fetchData = (save) => {
    this.props.reallyLongApiCall()
      .then((user) => {
        save('username', user.username);
        save('favoriteMovie', user.favoriteMovie);

        this.setState({
          username: user.username,
          favoriteMovie: user.favoriteMovie,
          isFetching: false,
        });
      }); 
  }

  render() {
    const { username, isFetching, favoriteMovie } = this.state;

    return (
      <Storage
        render={({ load, save, remove, state }) => {
          const user = load('username') || username;
          const favorite = load('favoriteMovie') || favoriteMovie;
      
          if (!username || !favoriteMovie) {
            if (!isFetching) {
              this.fetchData(save);               
            }

            return <div>Loading...</div>; 
          }

          console.log(state);
      
          return (
            <div>
              My username is {user}, and I love to watch {favorite}.

              <h1>{state.localStorageAvailable}</h1>
            </div>
          );
        }}
      />
    )
  }
}
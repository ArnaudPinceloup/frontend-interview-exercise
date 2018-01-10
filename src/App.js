import React, { Component } from 'react';

import './App.css';

import PROFILES from './profiles.json';

import Ranking from './components/Ranking';
import Modal from './components/Modal';
import UserInfo from './components/UserInfo';


class App extends Component {
  state = {
    profiles: [],
  };

  componentWillMount() {
    this.setState({
      profiles: PROFILES,
    });
  }

  render() {
    return (
      <div>
        <Ranking
          profiles={this.state.profiles}
          onSelectProfile={() => {}}
        />
        <div>
          <Modal show={false} onHide={() => {}}>
            <UserInfo
              picture={null}
              name=""
              points={0}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;

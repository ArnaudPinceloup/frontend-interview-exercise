import React, { Component } from 'react';

import './styles';

import PROFILES from './profiles.json';

import Ranking from './components/Ranking';
import Modal from './components/Modal';
import UserInfo from './components/UserInfo';


class App extends Component {
  state = {
    profiles: [],
    modal: false,
    selectedProfile: {
      picture: null,
      name: '',
      points: 0
    }
  };

  componentWillMount() {
    this.setState({
      profiles: PROFILES,
    });
  }

  // set selected profile in local state, and open modal
  onSelectProfile = selectedProfile => {
    this.setState({ selectedProfile });
    this.toggleModal();
  }

  // toggle modal with local state
  toggleModal = () => {
    this.setState({modal: !this.state.modal});
  }

  render() {
    const {profiles, modal, selectedProfile: { picture, name, points }} = this.state;

    return (
      <div>
        <Ranking
          profiles={profiles}
          onSelectProfile={this.onSelectProfile}
        />
        <Modal show={modal} onHide={this.toggleModal}>
          <UserInfo
            picture={picture}
            name={name}
            points={points}
          />
        </Modal>
      </div>
    );
  }
}

export default App;

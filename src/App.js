import React, { Component } from 'react';
import './App.css';
import FmData from './assets/FmData';
import ReactAudioPlayer from 'react-audio-player';


class App extends Component {
  state = {
    url: 'http://kantipur-stream.softnep.com:7248/;stream.nsv&type=mp3',
    playing: false
  }

  _play = () => {
    console.log('play');
    this.setState({playing: true});
    this.player.audioEl.play();
  }
  
  _pause = () => {
    console.log('pause');
    this.setState({playing: false});
    this.player.audioEl.pause();
  }

  _changeFM = async (fm) => {
    await this.setState({url: fm.url});
    this._play();
  }

  render() {
    return (
      <div className="App">
        {FmData.map(fm=>{
          return(
            <div onClick={()=>this._changeFM(fm)} className="fm-item" key={fm.name}>
              <span>{fm.name}</span>
            </div>
          )
        })}
        <ReactAudioPlayer
          src={this.state.url}
          autoPlay={this.state.playing}
          ref={(c) => this.player = c}
        />
        <button onClick={this._pause}>Pause</button>
        <button onClick={this._play}>play</button>
      </div>
    );
  }
}

export default App;

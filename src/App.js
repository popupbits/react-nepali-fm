import React, { Component } from 'react';
import './App.css';
import FmData from './assets/FmData';
import ReactAudioPlayer from 'react-audio-player';


class App extends Component {
  state = {
    selectedFm: FmData[0],
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
    await this.setState({selectedFm: fm});
    this._play();
  }

  render() {
    return (
      <div className="App">
        <div className="App-Bar">
          <img src={require('./assets/equalizer.gif')} />
          {this.state.playing && <button className="paused" onClick={this._pause}></button>}
          {!this.state.playing && <button onClick={this._play}></button>}
          <span>{this.state.selectedFm.name}</span>
        </div>
        {FmData.map(fm=>{
          return(
            <div onClick={()=>this._changeFM(fm)} className="fm-item" key={fm.name}>
              <span>{fm.name}</span>
            </div>
          )
        })}
        <ReactAudioPlayer
          src={this.state.selectedFm.url}
          autoPlay={this.state.playing}
          ref={(c) => this.player = c}
        />
        
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import GifList from './components/GifList';
import request from'superagent';
import GifModal from './components/GifModal';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      gifs:[],
      selectedGif:null,
      modalIsOpen:false
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  openModal(gif) {
    this.setState({
        modalIsOpen: true,
        selectedGif: gif
    });
}

closeModal() {
    this.setState({
        modalIsOpen: false,
        selectedGif: null
    });
}
  handleTermChange(term){
    const url=`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
    request.get(url,(err,res)=>{
      this.setState({gifs:res.body.data});
    });
   
  };
  render(){
    return(
      <div >
        <Searchbar onTermChange={term=>this.handleTermChange(term)}/>
        <GifList gifs={this.state.gifs} onGifSelect={selectedGif=>this.openModayl(selectedGif)} />
        <GifModal modalIsOpen={this.state.modalIsOpen} selectedGif={this.state.selectedGif}
                          onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
  

}
export default App;

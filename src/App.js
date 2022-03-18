import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Data from "./data.json";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
      numberOfHornes: Data
      //favorited: false
    }
  }
  hideModal = () => {
    this.setState({
      showModal: false,
    });
  }
   
  openModal = (beast) => {
    this.setState({
      showModal: true,
      beast,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const targetValue = parseInt(e.target.value)
    let filteredBeasts = Data.filter((beasts) => {
      switch (targetValue) {
        case 1:
        case 2:
          return beasts.hornes === targetValue;
        case 3: 
          return beasts.hornes >= targetValue;
        default: return true;
      }
    });
    this.setState({numberOfHornes: filteredBeasts});
  }
  render() {
    return (
      <>
        <Header/>
        <Main
          data={Data}
          openModal={this.openModal}
          hideModal={this.hideModal}
          beast={this.state.beast}
          showModal={this.state.showModal}
          handleSubmit={this.handleSubmit}
          numberOfHornes={this.state.numberOfHornes}
        />
        <Footer/>
      </>
    );
  }
}
export default App;

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
      // data: Data,
      showModal: false,
      beast: Data[0],
      numberOfHornes: Data
      //favorited: false
    }
  }
  hideModal = () => {
    this.setState({
      showModal: false,
    });
  }
  
  openModal = (title) => {
    const selectedBeast = Data.find((beast) => beast.title === title)
    this.setState({
      showModal: true,
      beast: selectedBeast
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const targetValue = parseInt(e.target.value)
    let filteredBeasts = Data.filter((beasts) => {
      switch (targetValue) {
        case 1:
        case 2:
          return beasts.horns === targetValue;
        case 3: 
          return beasts.horns >= targetValue;
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

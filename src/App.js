import React from "react";
import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import BeastModal from "./BeastModal";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: '',
      //favorited: false
    }
  }
  handleChangeState = () => {
    this.setState({
      testing: "Hello from App.js",
      favorited: true
    });
    console.log(this.state.testing);
  }; 
    
  
  render() {
    return (
      <>
        <Header />
        <Main
          data={data} 
        />
        <Footer />
        <BeastModal
          testing={this.handleChangeState}
        />

      </>
    )
  }
}



export default App;

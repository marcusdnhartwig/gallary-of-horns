import React from "react";


// import Button from "react-bootstrap/Button";
//import "./HornedBeast.css";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }
  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  };

  render() {
    console.log(this.state);
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p> Graced with 🥃 - {this.state.favorites} times</p>
          <img
            onClick={this.handleFavorites}
            src={this.props.imgUrl}
            alt={this.props.description}
            title={this.props.title}>
          </img>
        
        <p id="disc">{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
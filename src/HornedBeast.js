import React from "react";
import { Button, Card } from "react-bootstrap";
import "./HornedBeast.css";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      // favorited: false
    }
  }
  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
      // favorited: true
    });
  };
  handleShowModal = () => {
    this.props.openModal(this.props.name);
  }

  render() {
    
    return (

      <Card className="hornedBeast">
        
        <Card.Title onClick={this.handleShowModal}> {this.props.title} </Card.Title>
        <Card.Text> Graced with 🥃 - {this.state.favorites} 'times'</Card.Text>
        <Card.Img className="HornedImg"
          onClick={this.handleFavorites}
          src={this.props.imgUrl}
          alt={this.props.description}
          title={this.props.title}>
        </Card.Img>
        <Card.Text id="disc">{this.props.description}</Card.Text>
      </Card>
    )
  }
}

export default HornedBeast;
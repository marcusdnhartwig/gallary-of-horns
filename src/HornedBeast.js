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
  favorited = () => {
    this.setState({
      favorites: this.state.favorites + 1
      // favorited: true
    });
  };
  handleClick = () => {
    this.favorited();
    this.props.openModal(this.props.title);
  }

  render() {
    return (
      <>
        <Card className="BeastCard">
          <Card.Img
            className="image"
            varian="top"
            alt={this.props.title}
            src={this.props.imgUrl}
            onClick={this.handleClick}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Favored with {this.state.favorites} 🥃  </Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Button
              variant="primary"
              className="activate"
              onClick={this.favorited}
            >
              Get this Horned Beast a 🥃  .   !
            </Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
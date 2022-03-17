import React from "react";
import HornedBeast from "./HornedBeast.js";
import "./Main.css";
import {Container, Row} from "react-bootstrap";



class Main extends React.Component {
  render () {
    return (
      <Container>
        <Row xs={1} md={2} lg={3} xl={4}>
          {this.props.data.map(hornedBeast => 
            <HornedBeast
              imgUrl= {hornedBeast.imgUrl} 
              title= {hornedBeast.title}
              description= {hornedBeast.description}
              keyword= {hornedBeast.keyword}
              horns= {hornedBeast.horns}
              key= {this.props.data.indexOf(hornedBeast)}
            />
          )}
        </Row>
      </Container>
    )
  }
}
export default Main;
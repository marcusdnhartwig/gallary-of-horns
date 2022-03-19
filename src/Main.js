import React from "react";
import HornedBeast from "./HornedBeast.js";
import {Col, Container, Row, Form} from "react-bootstrap";
import BeastModal from "./BeastModal.js";
import "./Main.css";



class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
    }
  }
  
  render () {
    return (
      <main>
        <BeastModal
          showModal={this.props.showModal}
          beast={this.props.beast}
          hideModal={this.props.hideModal}
        />
        <Form>
          <Form.Label>
            Show this many horns of the Beasts.
          </Form.Label>
          <Form.Group>
            <Form.Select onChange={this.props.handleSubmit}>
              <option value="0">All the Horns</option>
              <option value="1">Mono Horned</option>
              <option value="2">Dual Horned</option>
              <option value="3">Tri Horned</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Container>
          <Row xs={1} md={2} lg={3} xl={4}>
            {this.props.numberOfHornes.map((beast, index) => (
              <Col key={index}>
                <HornedBeast
                  // beast={beast}
                  title={beast.title}
                  name={beast.name}
                  imgUrl={beast.imgUrl}
                  description={beast.description}
                  horns={beast.horns}
                  index={index}
                  openModal={this.props.openModal}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    )
  }
}
export default Main;
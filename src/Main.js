import React from "react";
import HornedBeast from "./HornedBeast.js";
import "./Main.css";



class Main extends React.Component {
  render () {
    let beast = []
    this.props.data.forEach((hornedBeast, index) => {
      beast.push(
        <HornedBeast
        imgUrl= {hornedBeast.imgUrl} 
        title= {hornedBeast.title}
        description= {hornedBeast.description}
        keyword= {hornedBeast.keyword}
        horns= {hornedBeast.horns}
        key= {index}
        />
      )
    });
    return (
      <main>
        {beast}
      </main>
    )
  }
}
export default Main;
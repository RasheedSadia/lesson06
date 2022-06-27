import React,{useEffect, useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import axios from "./axios";


function TinderCards() {
    const[people, setPeople]=useState([]);

    useEffect(() => {
      async function fetchData() {
          const req = await axios.get("/tinder/cards");
  
           setPeople(req.data);
      }
  
      fetchData();
    }, []);


const swiped = (direction,  nameToDelete) =>{
    console.log("removing:" + nameToDelete);
   
};
const outOfFrame=(name) =>{
    console.log(name +"left th screen");
}
  return (
    <div className="tinderCards">
    <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          noSwipe={(dir) => swiped(dir, person.name)}
          noCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div
            style={{ backgroundImage: `url(${person.imgUrl})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  </div>
);
}

export default TinderCards
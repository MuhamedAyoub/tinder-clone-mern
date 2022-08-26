import TinderCard from "../../lib/tinder_card";
import "../../lib/tinder_card/style.css";

const data = [
  {
    name: "Richard Hendricks",
    url: "https://imgur.com/Q9WPlWA.png",
  },
  {
    name: "Erlich Bachman",
    url: "https://imgur.com/Gg6BpGn.png",
  },
  {
    name: "Monica Hall",
    url: "https://imgur.com/wDmRJPc.png",
  },
  {
    name: "Jared Dunn",
    url: "https://imgur.com/Gg6BpGn.png",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://imgur.com/Q9WPlWA.png",
  },
];

const TinderCards = ({ setLastDirection }) => {
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  const characters = data;
  return (
    <div className="card-container">
      {characters.map((character) => (
        <TinderCard
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
          onCardLeftScreen={() => outOfFrame(character.name)}
        >
          <div
            style={{ backgroundImage: "url(" + character.url + ")" }}
            className="card"
          >
            <h3>{character.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;

import React from "react";
import CardCharacter from "./CardCharacter";

const ContainerCharacter = ({ character }) => {
  return (
    <div className="row">
      {character.length === 0 ? (
        <div className="fw-bolder fs-1">Loading...</div>
      ) : (
        character.map((item) => <CardCharacter key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ContainerCharacter;

import React from "react";
import Player from "./Player";
import playersData from "./players";

const PlayersList = () => {
  return (
    <div className="container">
      <div className="row">
        {playersData.map((player, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <Player {...player} />
          </div>
        ))}
      </div>
    </div>
  );
};



export default PlayersList;

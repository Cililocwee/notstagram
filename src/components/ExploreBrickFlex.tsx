import React from "react";
import "./exploreBrick.css";

// ** fakerandom will eventually plug into db results
interface Props {
  flag?: string;
  fakeRandom: string[];
}
export default function ExploreBrickFlex({ flag, fakeRandom }: Props) {
  if (flag === "right") {
    return (
      <div className="row">
        <div className="column">
          <img loading="lazy" src={fakeRandom[0]} />
          <img loading="lazy" src={fakeRandom[1]} />
        </div>

        <div className="column">
          <img loading="lazy" src={fakeRandom[2]} />
          <img loading="lazy" src={fakeRandom[3]} />
        </div>

        <div className="column-big">
          <img loading="lazy" src={fakeRandom[4]} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="column-big">
          <img loading="lazy" src={fakeRandom[4]} />
        </div>

        <div className="column">
          <img loading="lazy" src={fakeRandom[0]} />
          <img loading="lazy" src={fakeRandom[1]} />
        </div>

        <div className="column">
          <img loading="lazy" src={fakeRandom[2]} />
          <img loading="lazy" src={fakeRandom[3]} />
        </div>
      </div>
    );
  }
}

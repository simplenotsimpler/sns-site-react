import "./Positions.css";
//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchWork } from "../../fetchers/fetchWork.js";

import { formatWorkDate } from "../../helpers.js";

const Highlight = ({ highlight }) => {
  return <li>{highlight}</li>;
};

const Position = ({ position }) => {
  return (
    <article>
      <header className="positionHeader">
        <p className="positionTitle">{position.position}</p>
        <p className="positionDate">
          {formatWorkDate(position.startDate)} -{" "}
          {formatWorkDate(position.endDate)}
        </p>
        <p className="positionCompany">{position.company}</p>
        <p className="positionLocation">{position.location}</p>
      </header>
      <ul className="positionDescription resumeList">
        {position.highlights.map((highlight, index) => {
          return <Highlight key={index} highlight={highlight} />;
        })}
      </ul>
    </article>
  );
};

const Positions = () => {
  const {
    data: positions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["work"],
    queryFn: fetchWork,
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading positions...</h1>;
  }

  return (
    <>
      {positions.map((position, index) => {
        return <Position position={position} key={index} />;
      })}
    </>
  );
};
export default Positions;

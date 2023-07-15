import "./Positions.css";
//data stuff
import { usePositions } from "../../hooks/usePositions.js";

import { formatWorkDate } from "../../helpers.js";

const Highlight = ({ highlight }) => {
  return <li>{highlight}</li>;
};

const PositionSkillsUsed = ({ skills }) => {
  return (
    <section className="resumeSkillsUsed">
      <h3 className="resumeSkillsUsedTitle">Skills Used:</h3>
      <ul className="resumeSkillsUsedList">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};
const Position = ({ position }) => {
  return (
    <li>
      <article className="positionItem">
        <header className="positionHeader">
          <p className="positionInfo">
            <span className="positionTitle">{position.position}</span>,{" "}
            <span className="positionCompany">{position.company}</span> |{" "}
            <span className="positionLocation">{position.location}</span>
          </p>

          <p className="positionDate">
            {formatWorkDate(position.startDate)} -{" "}
            {formatWorkDate(position.endDate)}
          </p>
        </header>
        <section>
          <ul className="positionDescription resumeList">
            {position.highlights.map((highlight, index) => {
              return <Highlight key={index} highlight={highlight} />;
            })}
          </ul>
        </section>
        <PositionSkillsUsed skills={position.skillsUsed} />
      </article>
    </li>
  );
};

const Positions = () => {
  const { data: positions, isLoading, isError } = usePositions();

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading positions...</h1>;
  }

  return (
    <>
      <ul className="positionsList">
        {positions.map((position, index) => {
          return <Position position={position} key={index} />;
        })}
      </ul>
    </>
  );
};
export default Positions;

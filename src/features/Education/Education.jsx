import "./Education.css";
import { formatYear } from "../../helpers.js";

//data stuff
import { useEducation } from "../../hooks/useEducation.js";

const EducationItem = ({ education }) => {
  return (
    <li>
      <article className="resumeEducationItem">
        <header className="institutionHeader">
          <p className="degreeInfo">
            <span className="resumeDegree">
              {education.studyType && `${education.studyType}, `}
              {education.area}
            </span>
            ,{" "}
            <span className="resumeDegreeInstitution">
              {education.institution}
            </span>{" "}
            | {education.location}
          </p>
          <p className="resumeDegreeDate">
            {formatYear(education.startDate)} - {formatYear(education.endDate)}
          </p>
        </header>
      </article>
    </li>
  );
};

const Education = () => {
  const { data: education, isLoading, isError } = useEducation();

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading education...</h1>;
  }
  return (
    <>
      <ul className="educationList">
        {education.map((education, index) => {
          return <EducationItem education={education} key={index} />;
        })}
      </ul>
    </>
  );
};
export default Education;

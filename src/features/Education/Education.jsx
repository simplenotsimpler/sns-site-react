import "./Education.css";
import { formatYear } from "../../helpers.js";

//data stuff
import { useEducation } from "../../hooks/useEducation.js";

const EducationItem = ({ education }) => {
  return (
    <li>
      <article className="resumeEducationItem">
        <header className="institutionHeader">
          <p className="resumeDegree">
            {education.studyType && `${education.studyType}, `}
            {education.area}
          </p>

          <p className="resumeDegreeDate">
            {formatYear(education.startDate)} - {formatYear(education.endDate)}
          </p>
          <p className="resumeDegreeInstitution">{education.institution}</p>
          <p className="resumeDegreeLocation">{education.location}</p>
        </header>
        <p className="resumeDegreeGrade">
          Grade: {`${education.score} / 4.000`}
        </p>
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

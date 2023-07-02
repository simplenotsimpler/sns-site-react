import "./Education.css";
import { formatYear } from "../../helpers.js";

//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchEducation } from "../../fetchers/fetchEducation.js";

const EducationItem = ({ education }) => {
  return (
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
      <p className="resumeDegreeGrade">Grade: {`${education.score} / 4.000`}</p>
    </article>
  );
};

const Education = () => {
  const {
    data: education,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["edcuation"],
    queryFn: fetchEducation,
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading education...</h1>;
  }
  return (
    <>
      {education.map((education, index) => {
        return <EducationItem education={education} key={index} />;
      })}
    </>
  );
};
export default Education;

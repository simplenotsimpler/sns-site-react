import Education from "../../features/Education/Education.jsx";
import Positions from "../../features/Positions/Positions.jsx";
import Projects from "../../features/Projects/Projects.jsx";
import ResumeHeader from "../../features/ResumeHeader/ResumeHeader.jsx";
import Skills from "../../features/Skills/Skills.jsx";
import ProfessionalProfile from "../../features/ProfessionalProfile/ProfessionalProfile.jsx";
import "../Resume/Resume.css";

//data stuff
import { useBasics } from "../../hooks/useBasics.js";

//helper
import SEO from "../../components/layout/SEO.jsx";

//updated to h1 since these are h1 per section
const Section = ({ children, sectionClass, heading }) => {
  return (
    <section className={`resumeSection ${sectionClass}`}>
      <h1 className="resumeSectionHeading">{heading}</h1>
      {children}
    </section>
  );
};

const ResumeMain = ({ basics }) => {
  return (
    <main className="resumeMain">
      <Section sectionClass="resumeProfile" heading="Professional Profile">
        <ProfessionalProfile professionalProfile={basics.professionalProfile} />
      </Section>
      <Section sectionClass="resumeSkills" heading="Skills">
        <Skills forResume={true} />
      </Section>
      <Section sectionClass="resumeEducation" heading="Relevant Education">
        <Education />
      </Section>
      <Section sectionClass="resumeWork" heading="Relevant Work">
        <Positions />
      </Section>

      <Section sectionClass="resumeProjects" heading="Projects">
        <Projects forResume={true} />
      </Section>
    </main>
  );
};

const ResumeForITMain = () => {
  return (
    <main className="resumeMainIT">
      <Section sectionClass="resumeWork" heading="Relevant Work">
        <Positions forIT={true} />
      </Section>
      <Section sectionClass="resumeEducation" heading="Relevant Education">
        <Education />
      </Section>
      <Section sectionClass="resumeSkills" heading="Skills">
        <Skills forResume={true} />
      </Section>
    </main>
  );
};

const Resume = ({ forIT = false }) => {
  const { data: basics, isLoading, isError } = useBasics();

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading resume...</h1>;
  }

  return (
    <div className="resumePage">
      <SEO
        // title={`${basics.siteName} | Resume`}
        title={`${basics.name} | Resume`}
        description={basics.summary}
        keywords={basics.keywords}
        name={basics.siteName}
        type={basics.twitterCardType}
        websiteUrl={`${basics.website}/resume`}
      />

      <ResumeHeader basics={basics} />
      {forIT ? <ResumeForITMain /> : <ResumeMain basics={basics} />}
    </div>
  );
};
export default Resume;

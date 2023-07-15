import Education from "../../features/Education/Education.jsx";
import Positions from "../../features/Positions/Positions.jsx";
import Projects from "../../features/Projects/Projects.jsx";
import ResumeHeader from "../../features/ResumeHeader/ResumeHeader.jsx";
import Skills from "../../features/Skills/Skills.jsx";
import "../Resume/Resume.css";

//data stuff
import { useBasics } from "../../hooks/useBasics.js";

//helper
import SEO from "../../components/layout/SEO.jsx";

const SkillsSection = () => {
  return (
    <section className="resumeSection resumeSkills">
      <h2 className="resumeSectionHeading">Skills</h2>
      <Skills forResume={true} />
    </section>
  );
};

const EducationSection = () => {
  return (
    <section className="resumeSection resumeEducation">
      <h2 className="resumeSectionHeading">Relevant Education</h2>
      <Education />
    </section>
  );
};

const PostionsSection = () => {
  return (
    <section className="resumeSection resumeWork">
      <h2 className="resumeSectionHeading">Relevant Work</h2>
      <Positions />
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section className="resumeSection resumeProjects">
      <h2 className="resumeSectionHeading">Projects</h2>
      <Projects forResume={true} />
    </section>
  );
};
const Resume = () => {
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

      <main className="resumeMain">
        <SkillsSection />
        <EducationSection />
        <PostionsSection />
        <ProjectsSection />
      </main>
    </div>
  );
};
export default Resume;

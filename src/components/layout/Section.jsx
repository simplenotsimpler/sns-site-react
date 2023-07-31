//updated to h1 since these are h1 per section
const Section = ({
  children,
  sectionClass,
  heading,
  forResume = false,
  ...props
}) => {
  return (
    <section className={`${forResume ? "resumeSection" : ""} ${sectionClass}`} {...props}>
      <h1 className={`${forResume ? "resumeSectionHeading": "sectionTitle" }`}>{heading}</h1>
      {children}
    </section>
  );
};
export default Section;

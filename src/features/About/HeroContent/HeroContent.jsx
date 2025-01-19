import "./HeroContent.css";
import { Link } from "react-router-dom";
import ReactScrollLink from "../../../components/ReactScrollLink.jsx";

//updated intro to h2 since WAVE Evaluation suggested it may be a heading
//manually set tabIndex b/c wasn't correct order. probably due to mix of Link and ReactScrollLinks
/* 
  accessibility note: Firefox accessibility inspector said should have tabindex 0 but then on re-test complains about not being focusable :(
  https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard?utm_source=devtools&utm_medium=a11y-panel-checks-keyboard#avoid_using_tabindex_attribute_greater_than_zero
  https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard?utm_source=devtools&utm_medium=a11y-panel-checks-keyboard#clickable_elements_must_be_focusable_and_should_have_interactive_semantics
  */
const HeroContent = ({ intro, hero }) => {
  return (
    <div className="heroContent">
      <div className="introContainer">
        <h2 className="intro">{intro}</h2>
      </div>
      <div className="summary">
        <p>
          {hero.lead} Please feel free to check out my{" "}
          <ReactScrollLink to="portfolio" className="heroLink" tabIndex={0}>
            portfolio
          </ReactScrollLink>
          {" "}or{" "}
          <ReactScrollLink to="skills" className="heroLink" tabIndex={0}>
            skills
          </ReactScrollLink>
          .
        </p>

        <div className="cta">
          <h2 className="ctaHeader">Let's Connect!!!</h2>
          <p className="ctaText">
            {hero.ctaIntro} Please feel free to email me at{" "}
            <Link
              to="mailto:contact@simplenotsimpler.com"
              className="heroLink"
              tabIndex={0}
            >
              contact@simplenotsimpler.com
            </Link>{" "}
            or drop me a line via one of my other{" "}
            <ReactScrollLink to="contact" className="heroLink" tabIndex={0}>
              contact
            </ReactScrollLink>{" "}
            methods.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroContent;

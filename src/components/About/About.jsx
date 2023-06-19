import HeroContent from "../HeroContent/HeroContent.jsx";
import "./About.css";

import Quote from "../Quote/Quote.jsx";

//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchBasics } from "../../fetchers/fetchBasics.js";

const About = () => {
  const {
    data: basics,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["basics"],
    queryFn: fetchBasics,
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading basics...</h1>;
  }
  return (
    <div className="aboutContent">
      <HeroContent intro={basics.intro} summary={basics.summary} />

      <div className="spotlight">
        <div className="einsteinImgHolder">
          <img src="/images/einstein_stencil.png" alt="" />
        </div>
        <Quote quote={basics.quote} />
      </div>
    </div>
  );
};
export default About;

import { Link } from "react-router-dom";
import "./NotFound.css";

import SEO from "../../components/layout/SEO.jsx";

const NotFound = () => {
  return (
    <>
      <SEO title={`Not found`} />

      <main className="container">
        <div className="notFound">
          <h1>Sorry, page not found.</h1>
          <Link to="/">Back to the homepage</Link>
        </div>
      </main>
    </>
  );
};
export default NotFound;

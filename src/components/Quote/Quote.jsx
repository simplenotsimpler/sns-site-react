import "./Quote.css";
import { Link } from "react-router-dom";

const Quote = ({ quote }) => {
  return (
    <figure className="quoteContainer">
      <q className="quoteText">{quote.text}</q>
      <figcaption>
        &mdash;{quote.author}
        <cite>
          <Link to={quote.citeHref} target="_blank" rel="noopener noreferrer">
            {quote.citeName}
          </Link>
        </cite>
      </figcaption>
    </figure>
  );
};

export default Quote;

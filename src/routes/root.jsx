import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import ErrorBoundary from "../ErrorBoundary";

export default function Root() {
  return (
    <>
      <h1>Welcome to our website...</h1>
      <p>
        Please check our <Link to="/Counter">counter app</Link>
      </p>
      <ErrorBoundary>
        <ErrorTest />
      </ErrorBoundary>
    </>
  );
}
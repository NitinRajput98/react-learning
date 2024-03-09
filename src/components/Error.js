import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>{err.error.message}</h1>
      <div>This is cutom error Page</div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;

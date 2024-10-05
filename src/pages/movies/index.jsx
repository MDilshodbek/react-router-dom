import { Outlet, useOutlet } from "react-router-dom";
import Body from "../../body";

const Movies = () => {
  const hasChild = useOutlet();

  if (hasChild) {
    return <Outlet />;
  }

  return (
    <div>
      <Body />
    </div>
  );
};

export default Movies;

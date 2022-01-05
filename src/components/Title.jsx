import { NavLink } from "react-router-dom";

const Title = ({ title, more = false }) => {
  return (
    <header className="flex items-center justify-between mb-4">
      <NavLink to={more && "#"}>
        <h3 className="text-2xl font-medium tracking-tight text-white hover:underline">
          {title}
        </h3>
      </NavLink>
      {more && (
        <NavLink
          to={more}
          className={
            "text-xs font-semibold uppercase text-link tracking-wider hover:underline"
          }
        >
          see more
        </NavLink>
      )}
    </header>
  );
};

export default Title;

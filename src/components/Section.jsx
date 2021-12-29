import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";

const Section = ({ title, more = false, items }) => {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more && '#'}>
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

      <div className="grid grid-cols-5 gap-x-6 py-2">
        {items.map((item) => (
         <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Section;

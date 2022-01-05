import SongItem from "./SongItem";
import Title from "./Title";

const Section = ({title, more = false,items }) => {
  return (
    <section>
      <Title more={more}title={title} />
      <div className="grid grid-cols-5 gap-x-6 py-2">
        {items.map((item) => (
         <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Section;

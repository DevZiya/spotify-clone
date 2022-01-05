import Title from "../components/Title";
import category from "../data/categories";
import favoriteCategories from "../data/favorite-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useState, useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Category from '../components/CategoryItem'
import WideCategory from '../components/WideCategoryItem'

const Search = () => {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      const handleScroll = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setNext(!isEnd);
        setPrev(!isBegin);
      };

      favoritesRef.current.addEventListener("scroll", handleScroll);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [favoritesRef]);

  const handlePrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };
  const handleNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };

  return (
    <>
      <section className="mb-8">
        <Title title="En çok dinlediklerin" />
       <div className="relative">
       {prev && (
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white absolute z-10 -translate-y-1/2 top-1/2 -left-6 hover:scale-[1.06]"
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl text-black" />
          </button>
        )}
        {next && (
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white absolute z-10 -translate-y-1/2 top-1/2 -right-6 hover:scale-[1.06]"
          >
            <MdOutlineKeyboardArrowRight className="text-2xl text-black" />
          </button>
        )}
        <ScrollContainer
          innerRef={favoritesRef}
          className="flex overflow-x gap-x-6 scroll-smooth"
        >
          {favoriteCategories.map((cat, index) => (
            <WideCategory category={cat} key={index} />
          ))}
        </ScrollContainer>
       </div>
      </section>
      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-5 gap-6">
          {category.map((cat, index) => (
            <Category category={cat} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;

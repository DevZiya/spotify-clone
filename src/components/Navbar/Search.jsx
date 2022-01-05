import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="mr-auto ml-4">
      <div className="flex items-center justify-centert bg-white rounded-3xl">
        <BsSearch className="text-black w-6 h-6 bg-white rounded-3xl ml-3"/>
        <input
        autoFocus={true}
        type="text"
        className="h-10 rounded-3xl pl-6 bg-white text-black placeholder:to-black text-sm max-w-full w-[22.75rem] outline-none"
        placeholder="Sanatçılar,şarkılar ve ya podcatslar"
      />
      </div>
      
    </div>
  );
};

export default Search;

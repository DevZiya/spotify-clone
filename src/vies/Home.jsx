import Section from "../components/Section";
import songs from '../data/Song'

const Home = () => {

  return (
    <div className="flex flex-col gap-y-8">
      <Section
       title="Recently played" 
       more={"/RecentlyPlayed"}
       items={songs}       
       />
      <Section
       title="Shows to Try" 
       more={"/ShowstoTry"}
       items={songs}       
       />
      <Section
       title="Player Ziya Jafarli" 
       more={"/ShowstoTry"}
       items={songs}       
       />
    </div>
  );
};

export default Home;

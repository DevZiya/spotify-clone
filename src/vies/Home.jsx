import Section from "../components/Section";

const Home = () => {

    const items = [
        {
            id:1,
            title:'Mettalica One',
            artist:'metallica',
            desc:'original series',
            img:'https://m.media-amazon.com/images/I/815rCx0ZWjL._AC_UX522_.jpg',
            type:'album',
            src:'https://freesound.org/data/previews/613/613043_28867-lq.mp3'
        },
        {
            id:2,
            title:'Mettalica Nothing Else Matters',
            artist:'metallica',
            desc:'original series',
            img:'https://e-cdn-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/264x264-000000-80-0-0.jpg',
            type:'artist',
            src:'https://freesound.org/data/previews/613/613036_5674468-lq.mp3'
        },
        {
            id:3,
            title:'Mettalica Enter Sandman',
            desc:'original series',
            artist:'metallica',
            img:'https://upload.wikimedia.org/wikipedia/en/f/fb/Metallica_-_One_cover.jpg',
            type:'podcast',
            src:'https://freesound.org/data/previews/612/612985_5674468-lq.mp3'
        },
        {
            id:4,
            title:'Mettalica The Unforgiven',
            desc:'original series',
            artist:'metallica',
            img:'https://m.media-amazon.com/images/M/MV5BZTNmNThlNzUtMTFkMS00ZTk3LWEyNjQtNGUyZWM1OGJhNjQzXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg',
            type:'album',
            src:'https://freesound.org/data/previews/612/612955_2244250-lq.mp3'
        },
        {
            id:5,
            title:'Mettalica Blackend',
            desc:'original series',
            artist:'metallica',
            img:'https://steemitimages.com/640x0/https://pbs.twimg.com/media/C3QltsfVMAEhjuQ.jpg',
            type:'album',
            src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
        },
    ]

  return (
    <div className="flex flex-col gap-y-8">
      <Section
       title="Recently played" 
       more={"/RecentlyPlayed"}
       items={items}       
       />
      <Section
       title="Shows to Try" 
       more={"/ShowstoTry"}
       items={items}       
       />
      <Section
       title="Player Ziya Jafarli" 
       more={"/ShowstoTry"}
       items={items}       
       />
    </div>
  );
};

export default Home;

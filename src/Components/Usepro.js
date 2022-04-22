import React,{ useState, useEffect } from "react";
// import VideoPlayer from 'react-video-js-player';
// import Mp from './img/video.mp4';
import "./Usepro.css";

function Usepro() {
  const [datas, setData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'top-stories-of-kuensel.p.rapidapi.com',
      'X-RapidAPI-Key': '04555d15e2msh78efe703aa2e87fp180e2ejsn56468028e006'
    }
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://top-stories-of-kuensel.p.rapidapi.com/news', options)
      const actualData = await response.json();
      setData(actualData)
      
    }
    getData()
  }, [])

  return (
    <div className='Usepro'>
    <div className='react'>
    <p style={{fontWeight: 'bolder',fontSize:'large',textAlign: 'center'}}>Top Stories of <span style={{fontSize:'25px', fontFamily:'Playfair Display'}}>Kuensel</span></p>
    <div className='Kuensel'>
      {
        datas.map((data) => (
          <div className='link' key={data.id}>
            <a href={data.Url} target='_SEJ' rel='noreferrer'>{data.title}.</a>
            <p>{data.date}</p>
          </div>
        ))
    }
        
       
    </div>

    </div>
    {/* <div className='video'>
        <VideoPlayer
            controls={true}
            src={Mp}
            width="250"
            height="250"
        />
    </div> */}
    
    </div>
  )
}

export default Usepro
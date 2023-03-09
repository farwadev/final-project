import React from 'react';
// import video
import video from '../images/Adil Saeed1.mp4'




function slider(props) {
  return (
    <div>
     {/* video */}
        <video src={video} width="100%" autoPlay loop muted></video>
       
    </div>


  );
}

export default slider;
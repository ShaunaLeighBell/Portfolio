import React from 'react';
import myImage from '../Images/161098801_10219638257562267_5439585981444626132_n copy.jpg'; 

const Image = () => {
  return (
    <div className="image-container"> 
      <img src={myImage} alt="Image of me" className="my-image"/>
    </div>
  );
};

export default Image;
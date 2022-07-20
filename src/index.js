import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';


ReactDom.render(
<>
  <h1 className='heading_style'> Netflix K-drama</h1>
 { Sdata.map((val)=>{
  return(
    <Card 
  imgsrc={val.imgsrc}
  title={val.title}
  aname={val.aname}
  alink={val.alink}
  /> 
  );
 })}  
</>
, document.getElementById('root')
);
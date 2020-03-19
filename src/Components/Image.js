import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageTitle from './ImageTitle';
import DataWrap from './ImageData';
function Image() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [copy, setCopy] = useState('');
  const [hdUrl, setHdUrl] = useState('');
  //   console.log(image);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=7Voh9x5iQKuj6Mim8CalT7oANy1l3bAutKG6gObx`
      )
      .then(response => {
        console.log(response);
        setImage(response.data.url);
        setTitle(response.data.title);
        setDate(response.data.date);
        setDesc(response.data.explanation);
        setCopy(response.data.copyright);
        setHdUrl(response.data.hdurl);
      })
      .catch(err => console.log('Your error: ', err));
  }, []);
  return (
    <div className='wrapper'>
      <ImageTitle title={title} date={date} />
      <div className='imageWrap'>
        <img src={image} alt={title} />
      </div>

      <DataWrap desc={desc} copy={copy} />
    </div>
  );
}

export default Image;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageTitle from './ImageTitle';
import DataWrap from './ImageData';
import styled from 'styled-components';
const Day = styled.input`
  border: none;
  height: 20px;
  width: 70px;
  margin: 10px;
  background: transparent;
  color: rgba(211, 211, 211, 0.75);
`;
const Month = styled.input`
  border: none;
  height: 20px;
  width: 75px;
  margin: 10px;
  background: transparent;
  color: rgba(211, 211, 211, 0.75);
`;
const Year = styled.input`
  border: none;
  height: 20px;
  width: 90px;
  margin: 10px;
  background: transparent;
  color: rgba(211, 211, 211, 0.75);
`;

const Btn = styled.button`
  border: none;
  background-color: rgba(211, 211, 211, 0.75);
  height: 30px;
  width: 200px;
  color: black;
  border-radius: 5px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid rgba(211, 211, 211, 0.75);
    transition: 0.4s ease-in;
    color: rgba(211, 211, 211, 0.75);
  }
`;

function Image() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [copy, setCopy] = useState('');
  const [hdUrl, setHdUrl] = useState('');
  const [inVal, setInVal] = useState('');

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
  function click() {
    setInVal(date.value);
  }
  const Wrap = styled.div`
  background-image: url('${image}');
  background-size: 100% 100%;
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
  const HeadWrap = styled.section`
    display: flex;
    margin-top: -3%;
    margin-bottom: 20%;
  `;

  return (
    <Wrap className='wrapper'>
      <HeadWrap className='date-wrapper'>
        <Day className='day' placeholder='Day: 00' type='number' />
        <Month className='month' placeholder='Month: 00' type='number' />
        <Year className='year' placeholder='Year: 0000' type='number' />
        <Btn onClick={click}>Set The Date Change The Pic!</Btn>
      </HeadWrap>

      <ImageTitle title={title} date={date} styled={styled} />
      <div className='imageWrap'>{/* <img src={image} alt={title} /> */}</div>
      <DataWrap desc={desc} copy={copy} styled={styled} />
    </Wrap>
  );
}

export default Image;

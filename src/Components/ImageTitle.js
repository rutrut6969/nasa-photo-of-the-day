// Imports
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Components

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background: rgba(211, 211, 211, 0.75);
  width: 85%;
  border-radius: 10px;
  color: black;
`;
function ImageTitle(props) {
  const title = props.title;
  const date = props.date;

  // Reformatting the Date
  const reArrDate = date.split('-');
  const newDate = [];
  newDate.push(reArrDate[1]);
  newDate.push(reArrDate[2]);
  newDate.push(reArrDate[0]);
  const absDate = newDate.join('/');
  //   console.log(absDate);

  return (
    <TitleWrap>
      <p className='title'>{title},</p>
      <p className='date'> {absDate}</p>
    </TitleWrap>
  );
}
// Exports

export default ImageTitle;

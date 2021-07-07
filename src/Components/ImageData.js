import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const DataWrap = props => {
  const desc = props.desc;
  const copy = props.copy;
  const DataWrap = styled.section`
    background: rgba(211, 211, 211, 0.45);
    width: 85%;
    height: 350px;
    color: black;
    border-radius: 30px;
    margin-bottom: 0.5%;
    margin-top: 1%;
  `;
  const CopyRight = styled.p`
    margin-top: 10%;
  `;
  const DataText = styled.p`
    margin: 2%;
  `;

  return (
    <DataWrap>
      <div className='dataWrapper'>
        <DataText className='desc'>{desc}</DataText>

        <CopyRight className='copy'>&copy;{copy}</CopyRight>
      </div>
    </DataWrap>
  );
};
export default DataWrap;

import React, { useState, useEffect } from 'react';

const DataWrap = props => {
  const desc = props.desc;
  const copy = props.copy;
  return (
    <>
      <div className='dataWrapper'>
        <p className='desc'>{desc}</p>

        <p className='copy'>&copy;{copy}</p>
      </div>
    </>
  );
};
export default DataWrap;

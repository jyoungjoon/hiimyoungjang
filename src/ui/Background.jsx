import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  background-image: url('noise-tv.gif');
`;

function Background() {
  return <Overlay />;
}

export default Background;

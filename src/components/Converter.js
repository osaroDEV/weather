import React from 'react';
import { WiFahrenheit, WiCelsius } from 'react-icons/wi';
import styled from 'styled-components';

const Pad = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const Converter = ({ setShowFah, setShowCel, showFah, showCel }) => {
  if (showFah) {
    return (
      <Pad>
        <WiFahrenheit style={{ fontSize: '2em', color: 'blue' }} />
      </Pad>
    );
  } else {
    return (
      <Pad>
        <WiCelsius style={{ fontSize: '2em', color: 'blue' }} />
      </Pad>
    );
  }
};

export default Converter;

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MdLocationCity } from 'react-icons/md';
// import { FaTemperatureHigh } from 'react-icons/fa';
import Converter from './Converter';
import { FiWind } from 'react-icons/fi';
import {
  WiHumidity,
  WiCelsius,
  WiFahrenheit,
  WiDaySunny,
  WiCloudy,
  WiDayRain,
  WiRain,
  WiDayThunderstorm,
  WiSnow,
  WiNightAltPartlyCloudy,
} from 'react-icons/wi';

const Container = styled.div`
  border: 1px solid;
  font-size: 1em;
  border-radius: 0.5em;
  height: auto;
  width: 80%;
  margin: 3em auto;
  padding: 1em;
  box-shadow: 10px 15px rgba(0, 0, 0, 0.7);
  background: #fff;

  @media (min-width: 480px) {
    font-size: 1.2em;
    background: red;
  }

  @media (min-width: 768px) {
    font-size: 1.5em;
    background: green;
  }

  @media (min-width: 1025px) {
    font-size: 2.5em;
    background: blue;
  }
`;

const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TempSpan = styled.div`
  font-size: 3em;
  font-weight: bold;
  @media (max-width: 450px) {
    font-size: 2em;
  }
`;

const Desc = styled.span`
  // text-transform: capitalize;
`;

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Weather = ({ weatherData }) => {
  const [temperature, setTemperature] = useState(weatherData.main.temp);
  const [celsius, setCelsius] = useState(true);
  const [hour, setHour] = useState(new Date().getHours());
  const [showFah, setShowFah] = useState(true);
  const [showCel, setShowCel] = useState(false);

  const toFahrenheit = () => {
    if (celsius === true) {
      setCelsius(false);
      setShowFah(false);
      setShowCel(true);
      setTemperature((temperature) => {
        return (temperature * (9 / 5) + 32).toFixed(2);
      });
    }
    if (celsius === false) {
      setCelsius(true);
      setShowCel(false);
      setShowFah(true);
      setTemperature((temperature) => {
        return ((temperature - 32) * (5 / 9)).toFixed(2);
      });
    }
    return temperature;
  };

  let minute = new Date().getMinutes().toLocaleString();
  let minuteFormat = '0' + minute;

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // border: '1px solid',
        }}
      >
        <Section
          // style={{ border: '1px solid' }}
        >
          <div className="time">{weekdays[new Date().getDay()]}</div>
          <span>,&nbsp;</span>
          <Section>
            <div className="time">{new Date().getHours().toLocaleString()}</div>
            <span>:</span>
            <div className="time">{minute < 10 ? minuteFormat : minute}</div>
            {hour >= 12 ? 'PM' : 'AM'}
          </Section>
        </Section>
        <div
          style={{
            display: 'flex', alignItems: 'center',
            // border: '1px solid'
          }}
        >
          <p
            // style={{ border: '1px solid' }}
          >
            <MdLocationCity /> {weatherData.name}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          // border: '1px solid',
        }}
      >
        <div style={{ position: 'relative' }}>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 3 }}
            transition={{ yoyo: Infinity }}
            style={{ fontSize: '5em', 
            // border: '1px solid' 
          }}
          >
            {weatherData.weather[0].icon === '01d' ? (
              <WiDaySunny />
            ) : weatherData.weather[0].icon === '02d' ? (
              <WiCloudy />
            ) : weatherData.weather[0].icon === '03d' ? (
              <WiCloudy />
            ) : weatherData.weather[0].icon === '04d' ? (
              <WiCloudy />
            ) : weatherData.weather[0].icon === '09d' ? (
              <WiDayRain />
            ) : weatherData.weather[0].icon === '10d' ? (
              <WiRain />
            ) : weatherData.weather[0].icon === '11d' ? (
              <WiDayThunderstorm />
            ) : weatherData.weather[0].icon === '13d' ? (
              <WiSnow />
            ) : (
              <WiNightAltPartlyCloudy />
            )}
          </motion.div>
          <p
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%)',
              bottom: '80px',
              fontSize: '.4em',
            }}
          >
            {weatherData.weather[0].description}
          </p>
        </div>
        <Temp>
          <TempSpan>
            {temperature}
            {celsius ? <WiCelsius /> : <WiFahrenheit />}
          </TempSpan>{' '}
          |{' '}
          <div onClick={toFahrenheit}>
            <Converter
              setShowCel={setShowCel}
              setShowFah={setShowFah}
              showFah={showFah}
              showCel={showCel}
            />
          </div>
        </Temp>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2em',
        }}
      >
        <p>
          <FiWind />
          &nbsp;<Desc>{weatherData.wind.speed}km/h</Desc>
        </p>
        <p>
          <WiHumidity />
          &nbsp;{weatherData.main.humidity}%
        </p>
      </div>
    </Container>
  );
};

export default Weather;

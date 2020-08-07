import React from "react";
import styled from '@emotion/styled';

import Location from './../../components/WeatherCard/Location'
import Temp from './../../components/WeatherCard/Temp'
import Icon from './../../components/WeatherCard/Icon'
import Condition from './../../components/WeatherCard/Condition'

const WeatherCard = (props) => {

  // Color Logic 
  let highColor = (1 - (props.temp - 12) / 28) * 255;
  let lowColor = highColor - 150;

  const Card = styled.div`
    background: linear-gradient(to top, rgba( ${highColor},255,0), rgb(255 , ${lowColor} , 0));
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
  `

  return (
    <Card>
      <Location />
      <Temp />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;

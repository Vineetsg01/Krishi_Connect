import React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/base/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './weather.scss';
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Related to weather
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState({});


  useEffect(() => {
    const getData = async () => {
      try {
        const appid = "a8e23636a016db9a4204c0b0959157f7";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid + "&units=metric#";

        const res = await axios.get(url);
        const data = res.data;
        setWeather({
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          weatherDescription: data.weather[0].description,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          weatherCity: data.name,
          imgUrl: "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        });

      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [city]);


  return (
    <div className='weather'>
      {weather ? (
        <>
          <TriggerButton className='detail-out' onClick={handleOpen}>{weather.temp}°C
          </TriggerButton>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: StyledBackdrop }}
          >
            <Fade in={open} className='open'>
              <ModalContent sx={style}>

                <div className="top-bar">
                  <input
                    type="text" onChange={(e) => setCity(e.target.value)} className='city-input' placeholder="Search Location"
                  />
                </div>



                <div className="weather-image">
                  <img src={weather.imgUrl} alt="weather-img" />
                </div>

                <div className="weather-temp">{weather.temp}°c</div>
                <div className="weather-location">{city}</div>


                <div className="data-container">
                  <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                      <div className="humidity-percentage">{weather.humidity}%</div>
                      <div className="text">Humidity</div>
                    </div>
                  </div>
                  <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                      <div className="wind-rate">{Math.ceil(weather.wind)} km/h</div>
                      <div className="text">Wind Speed</div>
                    </div>
                  </div>
                </div>


              </ModalContent>
            </Fade>
          </Modal>
        </>
      ) : (
        "Loading ..."
      )}

    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

// css for open model
const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
  `,
);


// For bottom position of Weather
const TriggerButton = styled(Button)(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    position: fixed;
    z-index : 999;
    bottom : 30px;
    right : 20px;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);


    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);
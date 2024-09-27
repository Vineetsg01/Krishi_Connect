import React from 'react';
import './banner.scss';
import Carousel from 'react-material-ui-carousel';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import BannerImg1 from './Banner_img_1';
import BannerImg2 from './Banner_img_2';
import BannerImg3 from './Banner_img_3';
import BannerImg4 from './Banner_img_4';

function Banner() {

    return (
        <div className='banner'>
            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                interval={5000}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}
                NextIcon={<KeyboardDoubleArrowRightIcon />}
                PrevIcon={<KeyboardDoubleArrowLeftIcon />}
            >

                <BannerImg4 />
                <BannerImg1 />
                <BannerImg3 />
                <BannerImg2 />

            </Carousel>
        </div>
    )
}

export default Banner;

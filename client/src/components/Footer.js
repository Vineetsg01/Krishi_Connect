import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon color='secondary'/>
                            <FacebookIcon />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon color='secondary'/>
                            <XIcon />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon color='secondary'/>
                            <GoogleIcon />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon color='secondary'/>
                            <InstagramIcon />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon color='secondary'/>
                            <LinkedInIcon />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon color='secondary'/>
                            <GitHubIcon />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    Krishi Connect
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Fruits
                                    </a>
                                </p>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Vegetables
                                    </a>
                                </p>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Seeds
                                    </a>
                                </p>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Pesticides
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='/' className='text-reset'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Contact Us
                                    </a>
                                </p>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Lovely Professional University, Punjab
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    krishi.connect@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 1234 567 889
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold' href='/'>
                        KrishiConnect.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer;

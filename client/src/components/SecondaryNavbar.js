import React from 'react';
import './secondaryNavbar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function SecondaryNavbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const myStyle = {
        height: "40px",
        backgroundColor: "#8fbe7b",
    }

    return (
        <AppBar className='secondary-navbar' position="static" sx={myStyle}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >   
                            <Link className="link" to={'/'}>
                            <MenuItem
                                style={{ minWidth: "300px" }} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/all'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">All Prodcuts</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/vegetables'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Vegetables</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/fruits'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Fruits</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/crops'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Crops</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/seeds'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Seeds</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/pesticides'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Pesticides</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/fertilizers'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Fertilizers</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/category/equipments'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Equipments</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/about'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About Us</Typography>
                            </MenuItem>
                            </Link>

                            <Link className="link" to={'/contact'}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Contact Us</Typography>
                            </MenuItem>
                            </Link>

                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link className="link" to={'/'}><Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Home
                        </Button>
                        </Link>

                        <Link className="link" to={'/category/all'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            All Products
                        </Button>
                        </Link>

                        <Link className="link" to={'/category/vegetables'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Vegetables
                        </Button>
                        </Link>
                        
                        <Link className="link" to={'/category/fruits'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Fruits
                        </Button>
                        </Link>

                        <Link className="link" to={'/category/crops'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Crops
                        </Button>
                        </Link>
                        
                        <Link className="link" to={'/category/seeds'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Seeds
                        </Button>
                        </Link>
                        
                        <Link className="link" to={'/category/pesticides'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Pesticides
                        </Button>
                        </Link>

                        <Link className="link" to={'/category/fertilizers'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Fertilizers
                        </Button>
                        </Link>

                        <Link className="link" to={'/category/equipments'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Equipments
                        </Button>
                        </Link>

                        <Link className="link" to={'/about'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            About Us
                        </Button>
                        </Link>


                        <Link className="link" to={'/contact'} >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            style={{ marginRight: "20px" }}
                        >
                            Contact Us
                        </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default SecondaryNavbar

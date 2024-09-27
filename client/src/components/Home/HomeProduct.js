import React from 'react';
import './homeproduct.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ProductCard from '../ProductCard';
import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';

function HomeProduct() {
    const [active, setActive] = useState(1);
    const context = useContext(UserContext);
    const { products } = context;

    const Vegetables = products.VEGETABLES;
    const Fruits = products.FRUITS;
    const Seeds = products.SEEDS;



    return (
        <div className='home-product'>

            <span className="head">OUR BEST SELLER</span>
            <Stack direction="row" spacing={2}>
                <Button className={`btn ${active === 1 ? 'bold' : ""}`} variant="outlined" onClick={() => setActive(1)}>NEW ARRIVALS</Button>
                <Button className={`btn ${active === 2 ? 'bold' : ""}`} variant="outlined" onClick={() => setActive(2)}>BEST SELLERS</Button>
                <Button className={`btn ${active === 3 ? 'bold' : ""}`} variant="outlined" onClick={() => setActive(3)}>TOP RATES</Button>
            </Stack>

            {Vegetables ? (
                <div className="container-fluid">
                    {active === 1 && <div className="row">
                        {Vegetables.map((product, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <ProductCard product={product} />
                            </div>
                        ))}

                    </div>}

                    {active === 2 && <div className="row">
                        {Fruits.map((product, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>}

                    {active === 3 && <div className="row">
                        {Seeds.map((product, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>}

                </div>
            ) : (
                ""
            )}



            <div className="poster container-fluid">
                <span className="big">Flat 50% off on fresh organic</span>
                <span className="small">Additional 50% off on Vegetables & Fruits</span>
            </div>
        </div>
    )
}

export default HomeProduct;

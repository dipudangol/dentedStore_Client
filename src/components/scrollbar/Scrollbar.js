import React from 'react'
import { Carousel } from 'react-bootstrap'

export const Scrollbar = ({ productList }) => {
    console.log(productList)

    return (
        <div>
            <Carousel  className='m-5 bg-dark border'>
                {productList.map((item,i) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item ? "http://localhost:8000" + item.thumbnail : null}
                            alt={item.sku}
                            crossOrigin='anonymous' width="100%" height="300px"
                        />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            {/* <p>{item.description}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                )
                )}
            </Carousel>
        </div>
    )
}

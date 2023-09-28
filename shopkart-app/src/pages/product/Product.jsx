import star2 from '../../assets/img/star2.png';
import rightarrow from '../../assets/img/rightarrow.png';
import leftarrow from '../../assets/img/leftarrow.png';
import item1 from '../../assets/img/item1.png';
import btn from '../../assets/img/btn.png';

import './product.css';
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log('data->', data);

  return (
    <div className="Products">
      <div className="product-header">
        <div className="product-heading">
          <h2>New Products</h2>
          <div className="heading-line">
            <img src={star2} />
            <span></span>
          </div>
        </div>
        <ul className="arrows">
          <li>
            <img src={leftarrow} />
          </li>
          <li>
            <img src={rightarrow} />
          </li>
        </ul>
      </div>
      <div className="product-container">
        <div className="product-left-item">
          <ul>
            <li>Apparel</li>
            <li>Accessories</li>
            <li>Best sellers</li>
            <li>50% off</li>
          </ul>
        </div>
        <div className="product-right-item">
          {data ? (
            data.map((item) => (
              <Card
                img={item.image}
                title={item.title}
                desc={item.description}
                price={item.price}
              />
            ))
          ) : (
            <h6>Fetching error</h6>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;

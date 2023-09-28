import './card.css';
// import item1 from '../../assets/img/item1.png';
import btn from '../../assets/img/btn.png';
function Card({ img, title, desc, price }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} className="card-img" />
        <img src={btn} className="btn-img" />
      </div>
      <div className="product-details">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Card;

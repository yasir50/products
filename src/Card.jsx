import PropTypes from "prop-types";
export default function Card({ id, title, desc, cate, img, rating, price }) {
  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Category: {cate}</li>
          <li className="list-group-item">Rating: {rating}/5</li>
          <li className="list-group-item">Price: {price}$</li>
        </ul>
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  cate: PropTypes.string,
  img: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
};

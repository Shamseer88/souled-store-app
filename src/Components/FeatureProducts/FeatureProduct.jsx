import "./FeatureProduct.css";

export default function FeatureProduct({ displayImage, name, brand }) {
  return (
    <div className="feature-product-card">
      <div className="feature-product-image-div">
        <img src={displayImage} alt={name} />
        <div className="featured-product-details-div">
          <p>
            {brand} : {name}
          </p>
        </div>
      </div>
    </div>
  );
}

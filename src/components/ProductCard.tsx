type ProductCardProps = {
  title: string;
  subtitle: string;
  image: string;
};

const ProductCard = ({ title, subtitle, image }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={image} alt={title} />
      </div>
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__subtitle">{subtitle}</p>
    </div>
  );
};

export default ProductCard;

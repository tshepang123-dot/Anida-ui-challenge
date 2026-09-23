import ProductCard from './ProductCard';

const PRODUCTS = [
  {
    title: 'Arcu volut fat vitae',
    subtitle: 'Phestiers 1geart',
    image: '/orange_card.png',
  },
  {
    title: '$19,99, 90,99e',
    subtitle: 'Orviste past brops',
    image: '/orange_fruit.png',
  },
  {
    title: 'Sfiely tun dienard',
    subtitle: 'Ongand sunlers',
    image: '/berrybowl.png',
  },
];



const ProductsSection = () => {
  return (
    <section className="products section-padding">
      <div className="container products__grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
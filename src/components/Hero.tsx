import Button from "./button";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Premium Restaurant</p>
          <h1 className="hero__title">
            Anida <br /> Dedelay
          </h1>

          <p className="hero__subtitle">
            Best healthy salad served in our restaurant
          </p>
          <Button>Learn more</Button>
        </div>

        <div className="hero__visual">
          <button className="hero__signin">Sign in</button>

          {/* Replace the plate visuals with your image */}
          <img
            src="/herofruit.png"
            alt="Fruit bowl"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

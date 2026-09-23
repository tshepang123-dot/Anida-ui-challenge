const OrangeBenefit = () => {
  return (
    <section className="orange-benefit">
      <div className="container orange-benefit__inner">
        <div className="orange-benefit__content">
          <h2 className="orange-benefit__title">Orange Benefit</h2>

          {/* Orange icon */}
          <div className="orange-benefit__icon">🍊</div>

          <p className="orange-benefit__subtitle">
            Fresh orange juice packed with vitamins and energy.
          </p>
          <button className="orange-benefit__learn">Learn more</button>
        </div>

        {/* Replace old designs with your image */}
        <div className="orange-benefit__visual">
          <img
            src="/orange_juice.png"
            alt="Orange Juice"
            className="orange-benefit__image"
          />
        </div>
      </div>
    </section>
  );
};

export default OrangeBenefit;


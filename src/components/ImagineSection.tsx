import Button from './button';

const ImagineSection = () => {
  return (
    <section className="imagine section-padding">
      <div className="container imagine__inner">
        <h2 className="imagine__title">
          Just imagine seeds and summer in gell sunshine.
        </h2>

        <div className="imagine__image">
          <img src="/strawberries.png" alt="Strawberries" />
        </div>

        <div className="imagine__card">
          <h3>
            Ebee wous <br /> benefit.
          </h3>
          <p>With 5 seid, ma senemes streers. Furocroll lo motion.</p>
          <Button>Head more</Button>
        </div>
      </div>
    </section>
  );
};

export default ImagineSection;

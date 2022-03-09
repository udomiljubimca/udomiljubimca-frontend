import HeroBg from "../../assets/images/home/hero.jpg";

const Hero = () => {
    const heroStyle = {
        backgroundImage: "url(" + HeroBg + ")"
    };
    return (
        <section className="hero" style={heroStyle}>
            <div className="container">
                <div className="hero__caption">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                        Nam condimentum tempus diam, ultricies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export { Hero };

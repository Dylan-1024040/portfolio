export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section-content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello I'm Dylan</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">React</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        I'm a full stack developer with experience in React, Python, and
                        SQL.
                        <br /> I'm passionate about creating responsive and 
                        user-friendly applications and websites.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="#" alt="#" />
            </div>
        </section>
    );
}
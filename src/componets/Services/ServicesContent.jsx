import React from "react";

const ServicesContent = () => {
    return (
        <div className="services__content container">
            <h1 className="services__title">IT'S TIME TO START YOUR ADVENTURES</h1>
            <span className="line"></span>
            <p className="services__description">
                Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe pulvinar.
            </p>
            <div className="services__blog__container">
                <div className="services__blog">
                    <img src="/images/home/hiking-1.jpg" alt="hiking" />
                    <div className="services__blog__body">
                        <h3>Backpacking Trips</h3>
                        <p>
                            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                            liberioris inistra possedit.
                        </p>
                    </div>
                </div>

                <div className="services__blog">
                    <img src="/images/services/outdoor-2.jpg" alt="hiking" />
                    <div className="services__blog__body">
                        <h3>Family Hiking Trips
                        </h3>
                        <p>
                            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                            liberioris inistra possedit.
                        </p>
                    </div>
                </div>

                <div className="services__blog">
                    <img src="/images/services/outdoor-3.jpg" alt="hiking" />
                    <div className="services__blog__body">
                        <h3>Water Sports</h3>
                        <p>
                            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                            liberioris inistra possedit.
                        </p>
                    </div>
                </div>

                <div className="services__blog">
                    <img src="/images/services/outdoor-4.jpg" alt="hiking" />
                    <div className="services__blog__body">
                        <h3>Winter Sports</h3>
                        <p>
                            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                            liberioris inistra possedit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesContent;

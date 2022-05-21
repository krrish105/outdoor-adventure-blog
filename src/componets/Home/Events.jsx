import React from "react";

const Events = () => {
    return (
        <section className="events">
            <h1 className="events__title">upcoming events</h1>
            <span className="line"></span>
            <div className="events__container container">
                <div className="events__blog">
                    <img src="/images/home/hiking-1.jpg" alt="hiking" />
                    <div className="events__blog__body">
                        <h3>everest camp trek</h3>
                        <p>
                            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                            liberioris inistra possedit.
                        </p>
                        <a href="#" className="btn">learn more </a>
                    </div>
                </div>

                <div className="events__blog">
                    <img src="/images/home/hiking-2.jpg" alt="walking" />
                    <div className="events__blog__body">
                        <h3>everest camp trek</h3>
                        <p>
                            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                            liberioris inistra possedit.
                        </p>
                        <a href="#" className="btn">learn more </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;

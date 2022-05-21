import React from "react";

const Upcoming = () => {
    return (
        <section className="upcoming">
            <div className="upcoming__container container">
                <div className="upcoming__data">
                    <h1>upcoming tours & destination</h1>
                    <span className="line"></span>
                    <p>
                        Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
                        liberioris. Sinistra possedit litora ut nabataeaque. Setucant
                        coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque
                        constaque cepit sublime flexi nullus.
                    </p>
                    <a href="#" className="btn">Learn More</a>
                </div>
                <div className="upcoming__images">
                    <div className="upcoming__images-1">
                        <img src="/images/home/ski-1.jpg" alt="" />
                    </div>
                    <div className="upcoming__images-2">
                        <img src="/images/home/ski-2.jpg" alt="" />
                    </div>
                    <div className="upcoming__images-3">
                        <img src="/images/home/ski-3.jpg" alt="" />
                    </div>
                    <div className="upcoming__images-4">
                        <img src="/images/home/ski-4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Upcoming;

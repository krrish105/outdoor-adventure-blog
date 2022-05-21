import React from 'react'
import Featured from '../componets/global/Featured'
import ServicesContent from '../componets/Services/ServicesContent'
import ServicesInfo from '../componets/Services/ServicesInfo'

const Services = () => {
    return (
        <>
            <Featured title="services" />
            <section className="services">
                <div className="services__container">
                    <ServicesContent />
                    <ServicesInfo />
                </div>
            </section>
        </>
    )
}

export default Services
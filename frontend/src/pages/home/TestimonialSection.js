import React from "react";
import SectionName from "../../components/SectionName";

const TestimonialSection = () => {
    return (
        <section className="testimonial-section">
            <div className='container'>
                <div className='text-placeholder'>
                    <SectionName text='Svedočenja'/>
                    <h3 className="section-title">Šta kažu ljudi koji su udomili ljubimce</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti id molestiae
                        quaerat? Cum cupiditate quisquam ratione saepe voluptatibus.
                        Animi eligendi expedita magni nulla odit perferendis quasi quibusdam rem vel?
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti id molestiae
                        quaerat? Cum cupiditate quisquam ratione saepe voluptatibus.
                        Animi eligendi expedita magni nulla odit perferendis quasi quibusdam rem vel?
                    </p>

                    <a href="/" className='btn--default custom-btn btn-primary d-block'>Procitajte vise</a>
                </div>
            </div>
        </section>
    );
};

export { TestimonialSection };

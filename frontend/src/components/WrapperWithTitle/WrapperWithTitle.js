import React from 'react';
import './WrapperWithTitle.css'

const WrapperWithTitle = ({ title, children }) => {

    return (
        <section className='container'>
            <h1 className="page-title mt-4">{title}</h1>
            <div className='wrapper-with-title'>
                {children.length ? children.map(child => child) : children}
            </div>
        </section>

    );
}

export default WrapperWithTitle;

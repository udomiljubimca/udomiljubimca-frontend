import React from 'react';
import './WrapperWithTitle.css'

const WrapperWithTitle = ({ title, children }) => {

    return (
        <section className='container'>
            <h1 className="page-title">{title}</h1>
            <div className='wrapper-with-title'>
                {children && children.length ? children.map(child => child) : children}
            </div>
        </section>

    );
}
export default WrapperWithTitle;

import React from 'react'
import {useGlobalContext} from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
    const {closeSubMenu} = useGlobalContext()

    return (
        <section className="hero" onMouseOver={closeSubMenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>payments infrastructure for the internet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos dolorem illum
                        mollitia pariatur quibusdam quidem rem rerum suscipit voluptate!</p>
                    <button className="btn">
                        Start Now
                    </button>
                </article>


                <article className="hero-images">
                    <img src={phoneImg} className="phone-img" alt="phone"/>
                </article>
            </div>
        </section>
    )
}

export default Hero

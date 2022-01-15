import React from 'react';
import "./personCard.css";
import userpic from "../../assets/images/person-image1.png";

const PersonCard = ({name, img}) => {
    return (
        <section className='personCard'>
            <section className='person-img'>
                    <img src={img} alt="user-pic" width={98} height={98}/>
            </section>
            <section className='personal-details'>
                    <h3>{name}</h3>
                    <p>Forklift Driver</p>
            </section>
            <section className='left2-Card'>
                <sction className="person-details-card list-intrest">List of intrests </sction>
                <sction className="person-details-card list-training">List of Trainings </sction>
            </section>
            <section className='right2-Card'>
                <sction className="person-details-card list-certif">List of certificates  </sction>
                <sction className="person-details-card perfor-indicator">Performance Indicator </sction>
            </section>
            <section className='person-plan-cards'>
            <sction className="person-plan-card">Create personalized plan </sction>
            <sction className="person-plan-card">View personalized plan </sction>
            </section>
        </section>
    )
}

export default PersonCard

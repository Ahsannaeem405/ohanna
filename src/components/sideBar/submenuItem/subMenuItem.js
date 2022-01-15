import React from 'react'
import './subMenuItem.css';
import { Link } from 'react-router-dom';
import { ActiveSubMenu, SubMenuDot } from '../../constants/Icons';

const SubMenuItem = ({subRouter, path, name}) => {
    console.log("sublink name:", name)
    return (
        <>
            <section className={path === subRouter ? "active-link" : "subMenuItem"}>
                <Link to={subRouter} >
                <section className='sub-link'>
                    {
                        path === subRouter ?
                         <section className='sub-link-icons'>{ActiveSubMenu}</section> 
                         :
                         <section className='sub-link-icons'>{SubMenuDot}</section>
                    }
                    
                    <section className='sub-link-name'>{name}</section>
                </section>
                </Link>
            </section>
        </>
    )
}

export default SubMenuItem;

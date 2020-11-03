import React from 'react';
import classes from './index.module.scss';
import Logo from '../logo/logo';
import Filter from '../filter/filter';

const {mainLg} = classes

export default function Main () {
    return (
        <main className={mainLg}>
        <Logo />
        <Filter />
        </main>
    )
}
import * as React from 'react';
import Icon from '../images/icon';
import './container.scss';
import { NavLink } from 'react-router-dom';

interface ICategory {
    name: string;
}
const entertainment: ICategory = {name: 'entertainment'};
const general: ICategory = {name: 'general'};
const health: ICategory = {name: 'health'};
const science: ICategory = {name: 'science'};
const sport: ICategory = {name: 'sport'};
const technology: ICategory = {name: 'technology'};
const business: ICategory = {name: 'business'};

const categories: Array<ICategory> = [
    entertainment, general, health, science, sport, technology, business
];

class Sidenav extends React.Component<ICategory> {
    render() {
        return (   
            categories.map((category: ICategory, index: number) => {
                return (
                    <div className="icons" key={index}>
                        <NavLink to={ category.name } activeClassName="active"><Icon iconName={ category.name } /></NavLink>
                    </div>
                );
            }
        ));
    }
}

export default Sidenav;



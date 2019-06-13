import * as React from 'react';
import Icon from '../images/icon';
import './container.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
    isActive(category: string) {
        return window.location.pathname === '/'+category ? true: false;
    }
    render() {
        const { countryCode }: any = this.props; 
        return (   
            categories.map((category: ICategory, index: number) => {
                return (
                    <div className="icons">
                    <NavLink to={ `${category.name}` } isActive={() =>this.isActive(category.name)} activeClassName="activeCat">
                        <Icon countryCode={countryCode}  iconName={ category.name } />
                    </NavLink>
                    </div>
                );
            }
        ));
    }
}

const mapStateToProps = (state: any) => {
    return {
        countryCode: state.countryCode
    };
};

export default connect(mapStateToProps)(Sidenav);



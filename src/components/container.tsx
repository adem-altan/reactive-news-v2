import * as React from "react";
import Sidenav from "./sidenav";
import "./container.scss";
import Icon from "../images/icon";
import { NavLink } from "react-router-dom";
import Content from '../components/content';
import {connect} from 'react-redux';

class Container extends React.Component {
  render() {
    const { articles }: any = this.props;
    const { isLoading }: any = this.props;
    console.log(isLoading);
    return (
      <div className="page-container">
        <div className="header" />
        <div className="side-nav">
          <div className="icons">
            <NavLink to="/" activeClassName="active">
              <Icon iconName="home" />
            </NavLink>
          </div>
          <Sidenav name="categories" />
        </div>
        <div className="content">
        <Content  articles={ articles }/> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
        articles: state.articles,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Container);

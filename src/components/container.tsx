import * as React from "react";
import Sidenav from "./sidenav";
import "./container.scss";
import Content from '../components/content';
import {connect} from 'react-redux';
import Flag from "../images/flags";
import { PacmanLoader as Loading }  from 'react-spinners';

interface IState {
  category: string,
  articles: Array<object>,
  isLoading: boolean,
  countryCode: string
}

class Container extends React.Component<IState> {
  render() {
    const  category = this.props.category;
    const isLoading  = this.props.isLoading;
    const countryCode = this.props.countryCode;
    const articles = this.props.articles;

    return (
      <div className="page-container">
        <div className="header">
          <Flag category={category} countryCode={countryCode}/>
        </div>
        <div className="side-nav">
          <Sidenav name="categories" />
        </div>
        <div className="content">
        {isLoading || articles.length === 0 ? 
          <div className="loader"><Loading /></div>
        :
          <Content  articles={ articles }/> 
        }
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
    return {
      articles: state.articles,
      category: state.category,
      countryCode: state.countryCode,
      isLoading: state.isLoading
    }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    makeQuery: (countryCode: string, category: string) => {
      dispatch({ type: "GET_ARTICLES", countryCode: countryCode, category: category });
    }
  }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);

import * as React from "react";
import Sidenav from "./sidenav";
import "./container.scss";
import Content from '../components/content';
import {connect} from 'react-redux';
import Flag from "../images/flags";
import { PacmanLoader as Loading }  from 'react-spinners';
import { makeQuery } from '../store/actions/newsArticleaction';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_END_POINT = process.env.REACT_APP_API_END_POINT;

interface IState {
  category: string,
  articles: Array<object>,
  isLoading: boolean,
  countryCode: string
}

class Container extends React.Component<IState> {
  articles: any = [];
  async componentDidUpdate(prevProps: any) {
    if(this.props.category !== prevProps.category) {
      let response = await axios.get(
        API_END_POINT +
          "top-headlines?country=" +
          this.props.countryCode +
          "&category=" +
          this.props.category +
          "&apiKey=" +
          API_KEY
      );
      this.articles = response.data.articles;
    }
  }
  render() {
    const  category = this.props.category;
    const isLoading  = this.props.isLoading;
    const countryCode = this.props.countryCode;
    const articles = this.articles;

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

export default connect(mapStateToProps)(Container);

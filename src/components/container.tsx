import * as React from "react";
import Sidenav from "./sidenav";
import "./container.scss";
import Content from '../components/content';
import {connect} from 'react-redux';
import Flag from "../images/flags";
import { PacmanLoader as Loading }  from 'react-spinners';

interface IState {
  isLoading: boolean,
  makeQuery: any,
  articles: any
}
class Container extends React.Component<{makeQuery: any}> {
  componentWillReceiveProps() {
    this.setState({isLoading: this.props});
  }
  componentWillMount() {
    this.props.makeQuery('au', 'general');
  }
  render() {
    const { articles }: any = this.props;
    const { category }: any = this.props;
    const { isLoading }: any = this.props;
    return (
      <div className="page-container">
        <div className="header">
          <Flag category={category}/>
        </div>
        <div className="side-nav">
          <Sidenav name="categories" />
        </div>
        <div className="content">
        {isLoading ? 
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

const mapStateToProps = (state: any) => {
    return {
        articles: state.articles,
        category: state.category,
        countryCode: state.category,
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

import * as React from "react";
import "materialize-css/dist/css/materialize.min.css";

class Content extends React.Component<{articles: Array<Object>}> {
  defaultImageLoader(source: any) {
    source.target.src = require("../images/news.jpg");
  }

  render() {
    let articles = this.props.articles;
    const listOfArticles = articles.length
      ? articles.map((eachArticle: any, index: number) => {
          return (
            <div className="col s12 m6 l3" key={index}>
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    onError={this.defaultImageLoader}
                    src={eachArticle.urlToImage}
                    alt={eachArticle.title}
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {eachArticle.title}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>{eachArticle.description}</p>
                  <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={eachArticle.url}>
                      View Source
                    </a>
                  </div>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    {eachArticle.title}
                    <i className="material-icons right">close</i>
                  </span>
                  <p>{eachArticle.content}</p>
                </div>
              </div>
            </div>
          );
        })
      : null;
    return <div className="row">{listOfArticles}</div>;
  }
}

export default Content;

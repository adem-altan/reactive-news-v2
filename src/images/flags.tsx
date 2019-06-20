import * as React from "react";
import { connect } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";

interface IFLAG {
  name: string;
  code: string;
  value: string;
}

let FLAGS: Array<IFLAG> = [
  {
    name: "Australia",
    code: "au",
    value: ""
  },
  {
    name: "USA",
    code: "us",
    value: ""
  },
  {
    name: "Turkey",
    code: "tr",
    value: ""
  },
  {
    name: "Russia",
    code: "ru",
    value: ""
  },
  {
    name: "Italy",
    code: "it",
    value: ""
  },
  {
    name: "Germany",
    code: "de",
    value: ""
  }
];

class Flag extends React.Component<{ changeCountry: any, category: string, countryCode: string}> {
  changeCountry(countryCode: string, category: string) {
    this.props.changeCountry(countryCode, category);
  }
  isActive(code: string, countryCode: string): string {
    return code === countryCode ? 'waves-effect waves-light btn' : 'waves-effect waves-light btn nonActive';
  }
  render() {
    const countries = FLAGS;
    const { category } = this.props;
    const { countryCode } = this.props;
    return (
      <div>
        {countries.map((country: any, index: number) => (
          <ul key={index}>
            <a
              className={this.isActive(country.code, countryCode)}
              onClick={() => this.changeCountry(country.code, category)}
            >
              <i className="material-icons left">near_me</i>
              {country.name}
            </a>
          </ul>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeCountry: (countryCode: string, category: string) => {
      dispatch({ type: "GET_ARTICLES", countryCode: countryCode, category: category });
    }
  };
};

export default connect(null, mapDispatchToProps)(Flag);

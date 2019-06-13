import * as React from "react";
import { connect } from "react-redux";

interface IICONS {
  [name: string]: string;
}

let ICONS: IICONS = {};
ICONS["business"] =
  "M598 298v-84h-172v84h172zM854 298c46 0 84 40 84 86v128c0 46-38 86-84 86h-256v-86h-172v86h-256c-48 0-84-38-84-86v-128c0-46 38-86 84-86h170v-84l86-86h170l86 86v84h172zM426 682h172v-42h298v170c0 48-38 86-86 86h-596c-48 0-86-38-86-86v-170h298v42z";
ICONS["entertainment"] =
  "M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z";
ICONS["general"] =
  "M896 256v-128h-896v704c0 35.346 28.654 64 64 64h864c53.022 0 96-42.978 96-96v-544h-128zM832 832h-768v-640h768v640zM128 320h640v64h-640zM512 448h256v64h-256zM512 576h256v64h-256zM512 704h192v64h-192zM128 448h320v320h-320z";
ICONS["health"] =
  "M896 256h-192v-128c0-35.2-28.8-64-64-64h-256c-35.2 0-64 28.8-64 64v128h-192c-70.4 0-128 57.6-128 128v512c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-512c0-70.4-57.6-128-128-128zM384 128h256v128h-256v-128zM768 704h-192v192h-128v-192h-192v-128h192v-192h128v192h192v128z";
ICONS["science"] =
  "M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z";
ICONS["technology"] =
  "M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z";
ICONS["sport"] =
  "M348 466.286l164-118.857 164 118.857-62.286 192h-202.857zM512 0c282.857 0 512 229.143 512 512s-229.143 512-512 512-512-229.143-512-512 229.143-512 512-512zM865.714 771.429c53.714-73.143 85.143-162.286 85.143-259.429v-1.714l-58.286 50.857-137.143-128 36-184.571 76.571 6.857c-54.286-74.857-132-132.571-222.286-161.143l30.286 70.857-164 90.857-164-90.857 30.286-70.857c-90.286 28.571-168 86.286-222.286 161.143l77.143-6.857 35.429 184.571-137.143 128-58.286-50.857v1.714c0 97.143 31.429 186.286 85.143 259.429l17.143-75.429 186.286 22.857 79.429 170.286-66.286 39.429c42.857 14.286 89.143 22.286 137.143 22.286s94.286-8 137.143-22.286l-66.286-39.429 79.429-170.286 186.286-22.857z";
ICONS["home"] =
  "M512 32l-512 512 96 96 96-96v416h256v-192h128v192h256v-416l96 96 96-96-512-512zM512 448c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64z";


class Icon extends React.Component<{ countryCode: any, iconName: any, setCategory: any }> {
    setCategory(countryCode: string, category: string) {
        this.props.setCategory(countryCode, category);
    }
  render() {
    const { countryCode } = this.props;
    return ( 
      <span onClick={() => this.setCategory(countryCode, this.props.iconName)}>
        <svg width="32" height="32" viewBox="0 0 1024 1024">
          <path d={ICONS[this.props.iconName]} />
        </svg>
        <span>{this.props.iconName}</span>
      </span>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCategory: (countryCode: string, category: string) => {
      dispatch({ type: "GET_ARTICLES", countryCode: countryCode, category: category });
    }
  };
};

export default connect(null, mapDispatchToProps)(Icon);



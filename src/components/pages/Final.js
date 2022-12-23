// import React from 'react';
// import '../../App.scss';

// export default function Assemble() {
//   return <h1 className='products'>PRODUCTS</h1>;
// }

import React from "react";
import { connect } from 'react-redux';
import Picture from "../Picture";
import "../../App.scss";

class Final extends React.PureComponent {
  render = () => {
    return (
      <div className="Board">
        {this.props.board.map((picture) => {
          return <Picture url={picture.img} id={picture.id} />;
        })}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    board: state.board.data
  };
};

export default connect(mapStateToProps)(Final);


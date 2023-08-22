import { connect } from 'react-redux';
import React from 'react';
export function Message(props) {
<div>{props.message}</div>
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
};


export default connect(mapStateToProps)(Message);
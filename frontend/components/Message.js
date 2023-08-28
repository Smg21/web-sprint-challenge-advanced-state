import { connect } from 'react-redux';
import React from 'react';

function Message(props) {
  return (
    <div>{props.message}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.infoMessage,
  };
};

export default connect(mapStateToProps)(Message);

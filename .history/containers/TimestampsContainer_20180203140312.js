import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Timestamps from '../components/Timestamps.js';

const mapStateToProps = state => ({
  timestamps: state
})

const mapDispatchToProps = (dispatch) => ({
  timestamps: () => { dispatch({ type: 'TIMESTAMP' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Timestamps)
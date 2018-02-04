import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';

const mapStateToProps = state => ({
  timestamps: state
})

const mapDispatchToProps = (dispatch) => ({
  timestamp: () => { dispatch({ type: 'TIMESTAMP' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
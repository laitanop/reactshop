import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        checkLocalStorageForFirebase();
        //this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        checkLocalStorageForFirebase();
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function checkLocalStorageForFirebase() {
      let hasLocalStorageUser = false;

        for (const key in localStorage) {
          if (key.startsWith('firebase:authUser:')) {
            hasLocalStorageUser = true;
          }
        }

        if (!hasLocalStorageUser) {
          this.context.router.push('/signin');
        }
    }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}

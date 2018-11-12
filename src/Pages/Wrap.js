import React, { Component } from "react";
import  { Container } from "native-base";
import { UnAuthStackNavigator, AuthStackNavigator } from '../Navigation/App.Navigation';
import { connect} from "react-redux";
import Dispatcher from "../Middleware/Dispatcher";

class WrapScreen extends Component {
    state={
        auth:false
    }
  render() {
      return (<Container>
        {<AuthStackNavigator/>}
      </Container>)
  }
};

const mapPropsToState = state =>{
    return {
        auth: state.auth
    }
    
}

export default connect(mapPropsToState, Dispatcher)(WrapScreen);
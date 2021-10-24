import React, { Component } from 'react';
import { connect } from 'react-redux';
import BFC from '../../statics/bfc.002.jpeg';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={BFC} alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
});

export default connect(null,mapDispatchToProps)(Home);
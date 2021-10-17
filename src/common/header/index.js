import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from './style';
import { actionCreators } from './store';

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
        <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={300}
            classNames="slide"
          >
            <NavSearch
              className={
                focused
                ? "focused"
                : ""
              }
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span 
            className={
              focused
              ? "focused iconfont"
              : "iconfont"
            }
          >
            &#xe637;
          </span>
        </SearchWrapper>
        
      </Nav>
      <Addition>
        <Button className="writing">
        <span className="iconfont">&#xe659;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  const { searchFocus, searchBlur } = actionCreators;
  return {
    handleInputFocus(){
      dispatch(searchFocus());
    },
    handleInputBlur(){
      dispatch(searchBlur());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
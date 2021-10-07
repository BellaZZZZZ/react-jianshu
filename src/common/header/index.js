import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  Logo, 
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button 
} from './style';

class Header extends Component {
  render(){
    return (
      <div>
        <HeaderWrapper>
          <Logo href='/' />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
              <i className='iconfont'>&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focused ? 'focused' : ''}
                  onFocus={this.props.handleInputFocus}
                  onBlur={this.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='writting'>
              <i className='iconfont'>&#xe724;</i>
              写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      console.log(123);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
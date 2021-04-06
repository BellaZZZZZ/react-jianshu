import React, { Component } from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      focused: true
    }
  }
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
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
              ></NavSearch>
              <i className='iconfont'>&#xe62d;</i>
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

export default Header;
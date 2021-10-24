import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends Component {
  render() {
    const { list, getMoreList } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get("id")}>
                <img 
                  className="list-img"
                  src={item.get("imgUrl")}
                  alt=""
                />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"])
  }
}

const mapDsipatchToProps = (dispatch) => ({
  getMoreList() {
    const action = actionCreators.getList();
    dispatch(action);
  }
  // 点击“阅读更多”重新获取ajax请求
})

export default connect(mapStateToProps, mapDsipatchToProps)(List);
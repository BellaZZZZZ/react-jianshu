import axios from 'axios';
import { fromJS } from 'immutable';
import { actionTypes } from './';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    }) 
  }
};

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
});
// List把一个普通的数组转化成一个immutable的数组(只转换外层)；fromJS外层内层都转化

export const getList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      const action = addHomeList(result, page+1);
      dispatch(action);
    }).catch((error) => {
      console.log('error');
    })
  }
};

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
});
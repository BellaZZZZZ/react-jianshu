import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})
// action可以复用吗？
export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})

export const login = (account, password) => {
  return (dispatch) => {
    // 实际应该用post？为什么？
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data;
      if(result) {
        dispatch(changeLogin())
      } else {
        alert('登录失败')
      }
    })
  }
}
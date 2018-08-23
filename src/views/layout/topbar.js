import React, { Component } from 'react';

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      name: '',
      userinfo: '',
    }
  }
  goLogin = () => {
    console.log('登录啊啊啊')
  }
  goLogin(){}
  render() {
    return (
      <h1>我是头部{this.props.userName}哈哈哈哈</h1>
    )
    
  }
}

export default TopBar;
import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class IL extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = (e) => {
        e.preventDefault()
        window.location.hash='#/login'
    }
    render() {
        return <a href="" onClick={this.handleClick}>登录</a>
    }
}
export default IL;
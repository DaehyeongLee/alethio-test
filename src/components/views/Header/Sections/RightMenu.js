import React from 'react'
import { Menu } from 'antd';

function RightMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="service">
                <a href="/">Service</a>
            </Menu.Item>
            <Menu.Item key="signup">
                <a href="/sign-up">Signup</a>
            </Menu.Item>
            <Menu.Item key="login">
                <a href="/login">Login</a>
            </Menu.Item>
        </Menu>
    )
}

export default RightMenu

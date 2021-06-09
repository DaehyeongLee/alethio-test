import React from 'react'
import { Menu } from 'antd';
import { useSelector} from 'react-redux';

function RightMenu(props) {

    const user = useSelector(state => state.user)

    if (user.auth && user.auth.token) {
        //로그인 된 경우
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="service">
                    <a href="/">Service</a>
                </Menu.Item>
                <Menu.Item key="mypage">
                    <a href="/mypage/order">MyPage</a>
                </Menu.Item>
                <Menu.Item key="logout">
                    <a href="/logout">LogOut</a>
                </Menu.Item>
            </Menu>
        )
    }
    else {
        //로그인 안된 경우
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
    
}

export default RightMenu

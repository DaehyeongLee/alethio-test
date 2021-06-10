import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import { useSelector} from 'react-redux';

function RightMenu(props) {

    const user = useSelector(state => state.user)

    //Link - redux state 초기화 없이 이동
    if (user.auth && user.auth.token) {
        //로그인 된 경우
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="service">                   
                    <Link key="/" to="/">Service</Link>
                </Menu.Item>
                <Menu.Item key="mypage">
                    <Link key="/mypage/order" to="/mypage/order">MyPage</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                    <Link key="/logout" to="/logout">LogOut</Link>
                </Menu.Item>
            </Menu>
        )
    }
    else {
        //로그인 안된 경우
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="service">
                    <Link key="/" to="/">Service</Link>
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link key="/sign-up" to="/sign-up">Signup</Link>                  
                </Menu.Item>
                <Menu.Item key="login">
                    <Link key="/login" to="/login">Login</Link>                    
                </Menu.Item>
            </Menu>
        )
    }
    
}

export default RightMenu

import React from 'react'
import { Form, Button } from 'antd';
import { useSelector} from 'react-redux';
import image from '../../../uploads/tree.jpg'

function LandingPage(props) {

    const user = useSelector(state => state.user)

    const onSubmit = () => {
        if (user.auth && user.auth.token) {
            //로그인 된 경우 (토큰 있음) 주문 성공 Alert
            alert("Your order has been submitted successfully.")
        } else {
            //로그인 안된 경우 (토큰 없음) 로그인 요청 Alert이 발생 후 /login 페이지로 이동
            alert("Please proceed after login.")
            props.history.push("/login");
        }
    }

    return (
        <div className="root">
            
            <Form style={{ minWidth: '350px' }} onSubmit = {onSubmit}> 
                <img src = {image} alt = 'serviceImage' style = {{width: '100%'}}/>
                <Button onClick={onSubmit} style = {{marginTop: '10px', minWidth: '100%'}} type="primary">
                    Submit
                </Button>
            </Form>
        
        </div>
    )
}

export default LandingPage

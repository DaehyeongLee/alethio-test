import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { HOST_ADDRESS } from '../../Config';
import '../Commons/Table.css';

function MyPageDetail(props) {

    const itemId = props.match.params.id; //URL에서 Item Id를 가져옴
    const [orderDetail, setorderDetail] = useState({})  //Detail 정보 저장될 State

    useEffect( async () => {
        //Order Detail: 
        //백엔드 API : GET /order/{id}
        const response = await Axios.get(`${HOST_ADDRESS}/order/${itemId}`)

        //백엔드를 통해 받은 Detail 초기화
        setorderDetail(response.data)

    }, [])

    return (
        <div className="root">
            <h2>Order Detail</h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                    </tr>
                </thead>
                <tbody>
                    {/*orderDetail 있을 시 좌측에 id, 우측에 itemName을 배치  */}
                    {orderDetail &&
                        <tr>
                            <td>{orderDetail.id}</td>
                            <td>{orderDetail.itemName}</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyPageDetail

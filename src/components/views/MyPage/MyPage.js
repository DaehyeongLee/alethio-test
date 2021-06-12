import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { HOST_ADDRESS } from '../../Config';
import '../Commons/Table.css';
import Pagination from './Sections/Pagination';

function MyPage() {

    const [orderList, setorderList] = useState([]) //주문 목록 리스트
    const [totalPages, settotalPages] = useState(0) //전체 페이지 넘버
    const [currentPage, setcurrentPage] = useState(0) //현재 페이지 넘버
    const [loading, setloading] = useState(false) //아이템 불러오는 중 로딩 표시 위함

    useEffect(() => {
        getOrderList()
    }, [currentPage]) //currentPage 변경시 재호출
    
    //페이지넘버에 따라 호출되는 Order List
    const getOrderList = async () => {
        //Order 목록: 
        //백엔드 API : GET /order
        setloading(true) //로딩 표시 on
        const response = await Axios.get(`${HOST_ADDRESS}/order?page=${currentPage}`)

        settotalPages(response.data.totalPages) //백엔드로부터 가져온 Total Page 숫자 State에 저장
        setorderList(response.data.content) //백엔드로부터 가져온 리스트 State에 저장
        setloading(false) //로딩 표시 off
    } 

    return (
        <div className="root">
            <h2>Order List</h2>
            <hr />
            {/*로딩 메시지 */}
            {loading &&
                <div style={{ fontSize: '18px', fontWeight: 'bold', paddingTop: '5px' }}> loading... </div>
            }

            {!loading &&
                <table>
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 아이템 목록을 테이블 형식으로 표시 */}
                        {orderList && orderList.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    {/*각 주문 아이템을 클릭 시, 상세 주문 페이지로 이동. 클릭시 id를 URL 파라미터로 넘김. */}
                                    <td><Link key= {`/mypage/order/${item.id}`} to= {`/mypage/order/${item.id}`}>{item.itemName}</Link></td>
                                </tr>   
                            })
                        }                        
                    </tbody>
                </table>                
            }
            {/*페이지네이션 */}
            <Pagination totalPages={totalPages} setcurrentPage={setcurrentPage}/>
        </div>

    )
}

export default MyPage

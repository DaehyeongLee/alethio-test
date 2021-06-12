import React from 'react'

function Pagination(props) {

    const pageNumbers = [] //표시될 페이지 넘버

    //페이지네이션 숫자 정보 저장
    for (let i = 1; i <= Math.ceil(props.totalPages); i++) {
        pageNumbers.push(i);
    }

    const renderPages = pageNumbers.map((number, index) => {
        return <li key = {index} style = {{display: 'inline-block', fontSize: '18px', padding: '10px'}}>
            {/*페이지 번호가 1인 경우, 백엔드 API 는 number-1인 0을 보내줘 /order?page=0 을 호출한다 */}
            <a onClick={() => props.setcurrentPage(number-1)}>{number}</a>
        </li>
    })

    return (
        <div>
            {renderPages}
        </div>
    )
}

export default Pagination

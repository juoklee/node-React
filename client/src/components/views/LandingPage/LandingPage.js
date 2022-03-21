import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LandingPage() {

    useEffect(() => {
        //get으로 지정된 API에서 정보를 가져온다.
        axios.get('/api/hello')
        //그 다음(then) 정보를 로그로 보여준다.
        .then(response => { console.log(response) })

    }, [])


    let navigate = useNavigate();

    const OnclickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                navigate('/login')
            } else {
                alert('Failed to logout')
            }
        })
    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <br/>
            <button onClick={OnclickHandler}>
                로그아웃
            </button>

        </div>
    )
}

export default LandingPage;
import React, { useEffect } from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        //get으로 지정된 API에서 정보를 가져온다.
        axios.get('/api/hello')
        //그 다음(then) 정보를 로그로 보여준다.
        .then(response => { console.log(response) })

    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
        </div>
    )
}

export default LandingPage
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    //dispatch
    const dispatch = useDispatch();

    //state, 처음state = ""
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    //event 발생할 때 state를 변경
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }


    let navigate = useNavigate();

    const onSubmitHandler = (event) => {
        //페이지 refresh 방지
        event.preventDefault();

        // console.log('Email', Email)
        // console.log('Password', Password)

        //보내줄 data
        let body = {
            email: Email,
            password: Password
        }

        //'loginUser'라는 action
        dispatch(loginUser(body))
            .then(response => {
                console.log(response.data)

                if(response.payload.loginSuccess) {
                    navigate('/') //v.6
                    // props.history.push('/') //v.5
                } else {
                    alert('Error!!')
                }
            })
    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }} 
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br/>
                <button type="submit">
                    Login
                </button>
            </form>   
        </div>
    )
}

export default LoginPage
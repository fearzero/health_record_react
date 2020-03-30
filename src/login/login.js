import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
require('./login.css')
class Login extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user:"",
            password:"",
        }
    }
    handleGetUserValue =(event) =>{
        this.setState({
            user:event.target.value,
        })
    }
    handleGetPasswordValue =(event) =>{
        this.setState({
            password:event.target.value,
        })
    }

     postLogin(){
        let text={user_name:this.state.user,user_password:this.state.password}
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/system/login`,{
            method:'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: sendData
            }
        ).then(res=>res.json()).then(
            data=>{
                if(data.code==="200"){
                    window.open("/home/navbar/welcome")
                }else {
                    window.alert("账户密码错误")
                }
            }
        )
     }
    handleLoginPost=()=>{
        this.postLogin()
    }

    render(){
        return(
            <div id='style1'>
            <div id='style2'>
            </div>
            <div id='style3'>
                <Segment id='style4' style={{textAlign:'center'}}>
                    <h2>请登录</h2>
                    <Input id='user'
                           value={this.state.user}
                           onChange={this.handleGetUserValue}
                           placeholder='用户名'
                           style={{marginBottom:'10px'}}
                    /><br/>
                    <Input id='password'
                           value={this.state.password}
                           onChange={this.handleGetPasswordValue}
                           type='password'
                           placeholder='密码'
                           style={{marginBottom:'10px'}}
                    />
                    <br/>
                        <Button primary
                                content='登录'
                                onClick={this.handleLoginPost}
                                style={{marginBottom:'10px'}}
                        />

                    <Link to="/register">
                    <Button content='注册' style={{marginLeft:'20px'}}/>
                    </Link>
                </Segment>
            </div>
            </div>
        )
    }
}
export default Login;

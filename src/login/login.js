import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
require('./login.css')
class Login extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div id='style1'>
            <div id='style2'>
            </div>
            <div id='style3'>
                <Segment id='style4' style={{textAlign:'center'}}>
                    <h2>请登录</h2>
                    <Input id='user' placeholder='用户名' style={{marginBottom:'10px'}}/><br/>
                    <Input id='password' type='password' placeholder='密码' style={{marginBottom:'10px'}}/>
                    <br/>
                    <Link to="/home">
                        <Button primary content='登录' style={{marginBottom:'10px'}}/>
                    </Link >
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

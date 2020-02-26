import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
require('./register.css')
class register extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div id='register_style1'>
                <div id='register_style2'>
                </div>
                <div id='register_style3'>
                    <Segment id='register_style4' style={{textAlign:'center'}}>
                        <h2>请注册</h2>
                        <Input id='user' placeholder='用户名' style={{marginBottom:'10px'}}/><br/>
                        <Input id='password' type='password' placeholder='密码' style={{marginBottom:'10px'}}/>
                        <br/>
                        <Input id='password2' type='password' placeholder='确认密码' style={{marginBottom:'10px'}}/>
                        <br/>
                        <Input id='really_name' placeholder='真实姓名' style={{marginBottom:'10px'}}/><br/>
                        <Input id='ID_num' placeholder='证件号' style={{marginBottom:'10px'}}/><br/>
                        <Input id='phone_num' placeholder='手机号' style={{marginBottom:'10px'}}/><br/>
                        <Input id='address' placeholder='居住地址' style={{marginBottom:'10px'}}/><br/>
                        <Link to="/home">
                            <Button primary content='注册' style={{marginBottom:'10px'}}/>
                        </Link>
                        <Button content='重置' style={{marginLeft:'20px'}}/>
                    </Segment>
                </div>
            </div>
        )
    }
}
export default register;

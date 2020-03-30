import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
require('./register.css')
class register extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user:"",
            password:"",
            password2:"",
            really_name:"",
            ID_num:"",
            phone_num:"",
            address:"",
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
    handleGetPassword2Value =(event) =>{
        this.setState({
            password2:event.target.value,
        })
    }
    handleGetReally_nameValue =(event) =>{
        this.setState({
            really_name:event.target.value,
        })
    }
    handleGetID_numValue =(event) =>{
        this.setState({
            ID_num:event.target.value,
        })
    }
    handleGetPhone_numValue =(event) =>{
        this.setState({
            phone_num:event.target.value,
        })
    }
    handleGetAddressValue =(event) =>{
        this.setState({
            address:event.target.value,
        })
    }
    postRegister(){
        let text={user_name:this.state.user,user_password:this.state.password}
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/system/register`,{
                method:'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: sendData
            }
        ).then(res=>res.json()).then(
            data=>{
                if(data.code==="200"){
                    window.open("/home/navbar1/mess1")
                }else {
                    window.alert("注册失败请重试")
                }
            }
        )
    }
    handleRegisterPost=()=>{
        if(this.state.password===this.state.password2)
        {this.postRegister()}
        else{
            window.alert("两次输入密码不一致")
            window.open("/register")
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
                        <Input id='user'
                               value={this.state.user}
                               onChange={this.handleGetUserValue}
                               placeholder='用户名' style={{marginBottom:'10px'}}/><br/>
                        <Input id='password'
                               value={this.state.password}
                               onChange={this.handleGetPasswordValue}
                               type='password' placeholder='密码' style={{marginBottom:'10px'}}/>
                        <br/>
                        <Input id='password2'
                               value={this.state.password2}
                               onChange={this.handleGetPassword2Value}
                               type='password' placeholder='确认密码' style={{marginBottom:'10px'}}/>
                        <br/>
                        <Input id='really_name'
                               value={this.state.really_name}
                               onChange={this.handleGetReally_nameValue}
                               placeholder='真实姓名' style={{marginBottom:'10px'}}/><br/>
                        <Input id='ID_num'
                               value={this.state.ID_num}
                               onChange={this.handleGetID_numValue}
                               placeholder='证件号' style={{marginBottom:'10px'}}/><br/>
                        <Input id='phone_num'
                               value={this.state.phone_num}
                               onChange={this.handleGetPhone_numValue}
                               placeholder='手机号' style={{marginBottom:'10px'}}/><br/>
                        <Input id='address'
                               value={this.state.address}
                               onChange={this.handleGetAddressValue}
                               placeholder='居住地址' style={{marginBottom:'10px'}}/><br/>
                        <Link to="/home">
                            <Button
                                primary content='注册'
                                style={{marginBottom:'10px'}}
                                onClick={this.handleRegisterPost}
                            />
                        </Link>
                        <Button content='重置' style={{marginLeft:'20px'}}/>
                    </Segment>
                </div>
            </div>
        )
    }
}
export default register;

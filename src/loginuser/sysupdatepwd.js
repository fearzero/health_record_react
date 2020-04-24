import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
class sysupdatepwd extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {

            password:"",
            password2:"",

        }
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


    postRegister(){
        let text={
            password1:this.state.password,
            password2:this.state.password2
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/systemUser/updatePWD`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization':localStorage.getItem("Authorization"),
                    'sign':localStorage.getItem("sign"),
                },
                body: sendData
            }
        ).then(res=>res.json()).then(
            data=>{
                if(data.CODE==="200"){
                    window.open("/home/navbar4/mess1")
                    window.close()

                }else {
                    window.alert("修改失败")

                }
            }
        )
    }
    handleUpdatePWDPost=()=>{
        this.postRegister()

    }
    render(){
        return(

            <div id='in_page1'>
                <div id='userpage1'>
                    <Segment id="systemuserpage7" secondary={true}>
                        <div style={{textAlign:"center"}}>
                            <Segment id="systemuserpage1"><h1>个人中心</h1></Segment>
                        </div>
                        <Segment.Group id="systemuserpage2">
                            <Segment><h3>个人密码修改</h3></Segment>
                            <Segment id='systemuserpage6' style={{textAlign:'center'}}>
                                <br/>
                                <br/>
                                <Input id='password'
                                       value={this.state.password}
                                       onChange={this.handleGetPasswordValue}
                                       type='password' placeholder='旧密码' style={{marginBottom:'10px'}}/>
                                <br/>
                                <Input id='password2'
                                       value={this.state.password2}
                                       onChange={this.handleGetPassword2Value}
                                       type='password' placeholder='新密码' style={{marginBottom:'10px'}}/>
                                <br/>
                                <br/>


                                    <Button
                                        primary content='确认修改'
                                        style={{marginBottom:'10px'}}
                                        onClick={this.handleUpdatePWDPost}
                                    />


                            </Segment>

                        </Segment.Group>

                    </Segment>
                </div>
            </div>

        )
    }
}
export default sysupdatepwd;
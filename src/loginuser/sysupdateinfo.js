import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
class sysupdateinfo extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user:"",
            birthday:"",
            really_name:"",
            ID_num:"",
            phone_num:"",
            address:"",
            job:"",
            email:"",
            sex:""
        }
    }
    handleGetJobValue =(event) =>{
        this.setState({
            job:event.target.value,
        })
    }
    handleGetEmailValue =(event) =>{
        this.setState({
            email:event.target.value,
        })
    }
    handleGetSexValue =(event) =>{
        this.setState({
            sex:event.target.value,
        })
    }
    handleGetBirthdayValue =(event) =>{
        this.setState({
            birthday:event.target.value,
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
        let text={
            real_name:this.state.really_name,
            address:this.state.address,
            sex:this.state.sex,
            job:this.state.job,
            birthday:this.state.birthday,
            phone_num:this.state.phone_num,
            email:this.state.email,
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/hd/systemUser/updateSysUserInfo`,{
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
    handleUpdatePost=()=>{

        this.postRegister()

    }
    render(){
        return(

            <div id='in_page1'>
                <div id='userpage1'>
                    <Segment id='systemuserpage7' secondary={true}>
                        <div style={{textAlign:"center"}}>
                            <Segment id="systemuserpage1"><h1>个人中心</h1></Segment>
                        </div>
                        <Segment.Group id="systemuserpage2">
                            <Segment><h3>个人资料修改</h3></Segment>
                            <br/>
                            <br/>
                            <Segment id='systemuserpage5' style={{textAlign:'center'}}>
                                <br/>
                                <Input id='really_name'
                                       value={this.state.really_name}
                                       onChange={this.handleGetReally_nameValue}
                                       placeholder='真实姓名' style={{marginBottom:'10px'}}/><br/>
                                <Input id='ID_num'
                                       value={this.state.ID_num}
                                       onChange={this.handleGetID_numValue}
                                       placeholder='证件号' style={{marginBottom:'10px'}}/><br/>
                                <Input id='user'
                                       value={this.state.birthday}
                                       onChange={this.handleGetBirthdayValue}
                                       placeholder='生日' style={{marginBottom:'10px'}}/><br/>
                                <Input id='password'
                                       value={this.state.sex}
                                       onChange={this.handleGetSexValue}
                                       placeholder='性别' style={{marginBottom:'10px'}}/>
                                <br/>
                                <Input id='password2'
                                       value={this.state.email}
                                       onChange={this.handleGetEmailValue}
                                       placeholder='邮箱号码' style={{marginBottom:'10px'}}/>
                                <br/>
                                <Input id='phone_num'
                                       value={this.state.phone_num}
                                       onChange={this.handleGetPhone_numValue}
                                       placeholder='手机号' style={{marginBottom:'10px'}}/><br/>
                                <Input id='job'
                                       value={this.state.job}
                                       onChange={this.handleGetJobValue}
                                       placeholder='工作' style={{marginBottom:'10px'}}/><br/>
                                <Input id='address'
                                       value={this.state.address}
                                       onChange={this.handleGetAddressValue}
                                       placeholder='居住地址' style={{marginBottom:'10px'}}/><br/>

                                    <Button
                                        primary content='修改'
                                        style={{marginBottom:'10px'}}
                                        onClick={this.handleUpdatePost}
                                    />

                                <Button content='重置' style={{marginLeft:'20px'}}/>
                            </Segment>

                        </Segment.Group>

                    </Segment>
                </div>
            </div>

        )
    }
}
export default sysupdateinfo;
import React from 'react';
import {Segment} from "semantic-ui-react";
require("./systemuserpage.css")
class userpage extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            name:"-1",
            age:"-1",
            sex:"-1",
            contact_num:"-1",
            birthday:"-1",
            address:"-1",
            job:"-1",
            email:"-1",
            rank_name:"-1",
            status_name:"-1",
            real_name:"-1",

        }
    }
    postSelectInfo1(){
        let text={
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/systemUser/selectSysUserInfo`,{
                method:'POST',
                mode: 'cors',
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
                  this.setState({
                      name:data.DATA.sys_user_name,
                      sex:data.DATA.sex,
                      contact_num:data.DATA.phone_num,
                      birthday:data.DATA.birthday,
                      address:data.DATA.address,
                      job:data.DATA.job,
                      email:data.DATA.email,
                      rank_name:data.DATA.rank_name,
                      status_name:data.DATA.status_name,
                      real_name:data.DATA.real_name,

                  })
                }else {
                    window.alert("信息录入失败")
                }
            }
        )
    }


    componentDidMount(){
        this.postSelectInfo1()

    }

    render(){

        return(
            <div id='in_page1'>
                <div id='userpage1'>
                    <Segment id='userpage1' secondary={true}>
                    <div style={{textAlign:"center"}}>
                        <Segment id="systemuserpage1"><h1>个人中心</h1></Segment>
                    </div>
                    <Segment.Group id="systemuserpage2">
                        <Segment><h3>个人信息详情</h3></Segment>
                        <Segment.Group>
                            <Segment.Group horizontal>
                                <Segment.Group id="systemuserpage3">
                                    <Segment >用户名</Segment>
                                    <Segment > 真实姓名</Segment>
                                    <Segment >性别</Segment>
                                    <Segment> 邮箱号码</Segment>
                                    <Segment > 联系号码</Segment>
                                    <Segment>生日</Segment>
                                    <Segment >家庭住址</Segment>
                                    <Segment>工作</Segment>
                                    <Segment >用户角色</Segment>
                                    <Segment >账户状态</Segment>
                                </Segment.Group>
                                <Segment.Group id="systemuserpage4">
                                    <Segment>{this.state.name}</Segment>
                                    <Segment>{this.state.real_name}</Segment>
                                    <Segment>{this.state.sex}</Segment>
                                    <Segment >{this.state.email}</Segment>
                                    <Segment>{this.state.contact_num} </Segment>
                                    <Segment >{this.state.birthday}</Segment>
                                    <Segment>{this.state.address}</Segment>
                                    <Segment >{this.state.job}</Segment>
                                    <Segment >{this.state.rank_name}</Segment>
                                    <Segment >{this.state.status_name}</Segment>
                                </Segment.Group>
                            </Segment.Group>
                        </Segment.Group>

                    </Segment.Group>

                    </Segment>
                </div>
            </div>

        );
    }
}

export default userpage;

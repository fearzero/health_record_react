import React from 'react';
import {Segment} from "semantic-ui-react";
require("./userpage.css")
class userpage extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user_id:this.props.location.state.user_id,
            name:"zhao",
            age:"15",
            sex:"男",
            iden_id:"89544125",
            contact_num:"89741263652",
            birthday:"2020-03-01",
            address:"山东",
            job:"职业",
            is_marriage:"是",
            create_time:"2020-01-02",
            count:"1001",
            height:"172",
            weight:"75",
            lung_capacity:"5000",
            s_blood_pressure:"88",
            d_blood_pressure:"160",
            d_type:"-1",
            d_desc: "-1",
            d_name: "-1",
        }
    }
    postSelectInfo1(){
        let text={
            user_id:this.state.user_id,
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/hd/management/selectuser`,{
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
                      name:data.DATA.basic_name,
                      age:data.DATA.basic_age,
                      sex:data.DATA.basic_sex,
                      iden_id:data.DATA.identity_id,
                      contact_num:data.DATA.basic_contact,
                      birthday:data.DATA.basic_birthday,
                      address:data.DATA.basic_address,
                      job:data.DATA.basic_job,
                      is_marriage:data.DATA.is_marriage,
                      create_time:data.DATA.basic_time,

                  })
                }else {
                    window.alert("信息录入失败")
                }
            }
        )
    }
    postSelectInfo2(){
        let text={user_id:this.state.user_id,
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/hd/management/selectuserinfo`,{
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
                        count:data.DATA.count,
                        height:data.DATA.height,
                        weight:data.DATA.weight,
                        lung_capacity:data.DATA.lung_capacity,
                        s_blood_pressure:data.DATA.s_blood_pressure,
                        d_blood_pressure:data.DATA.d_blood_pressure,
                    })
                }else {
                    window.alert("信息查询失败")
                }
            }
        )
    }
    postSelectInfo3(){
        let text={user_id:this.state.user_id,
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/hd/management/selectudisease`,{
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
                        d_type:data.DATA.d_type,
                        d_desc:data.DATA.d_desc,
                        d_name:data.DATA.d_name,

                    })
                }else {
                    window.alert("信息查询失败")
                }
            }
        )
    }

    componentDidMount(){
        this.postSelectInfo1()
      this.postSelectInfo2()
        this.postSelectInfo3()
    }

    render(){

        return(
            <div id='in_page1'>
                <div id='userpage1'>
                    <Segment id='userpage1' secondary={true}>
                    <div style={{textAlign:"center"}}>
                        <Segment id="userpage6"><h1>健康信息详情</h1></Segment>
                    </div>
                    <Segment.Group id="userpage2">
                        <Segment><h3>个人档案信息</h3></Segment>
                        <Segment.Group>
                            <Segment.Group horizontal>
                                <Segment.Group id="userpage4">
                                    <Segment >用户编码</Segment>
                                    <Segment > 姓名</Segment>
                                    <Segment>年龄</Segment>
                                    <Segment >性别</Segment>
                                    <Segment> 证件号</Segment>
                                    <Segment > 联系号码</Segment>
                                    <Segment>生日</Segment>
                                    <Segment >家庭住址</Segment>
                                    <Segment>工作</Segment>
                                    <Segment >婚姻状态</Segment>
                                    <Segment >建立时间</Segment>
                                </Segment.Group>
                                <Segment.Group id="userpage5">
                                    <Segment>{this.state.user_id}</Segment>
                                    <Segment>{this.state.name}</Segment>
                                    <Segment >{this.state.age}</Segment>
                                    <Segment>{this.state.sex}</Segment>
                                    <Segment >{this.state.iden_id}</Segment>
                                    <Segment>{this.state.contact_num} </Segment>
                                    <Segment >{this.state.birthday}</Segment>
                                    <Segment>{this.state.address}</Segment>
                                    <Segment >{this.state.job}</Segment>
                                    <Segment >{this.state.is_marriage}</Segment>
                                    <Segment >{this.state.create_time}</Segment>
                                </Segment.Group>
                            </Segment.Group>
                        </Segment.Group>

                    </Segment.Group>
                    <Segment.Group id="userpage3">
                        <Segment ><h3>体检信息</h3></Segment>
                        <Segment.Group >
                            <Segment.Group horizontal>
                                <Segment.Group id="userpage4">
                                    <Segment> 体检编次</Segment>
                                    <Segment > 身高</Segment>
                                    <Segment> 体重</Segment>
                                    <Segment > 肺活量</Segment>
                                    <Segment> 收缩压</Segment>
                                    <Segment >舒张压</Segment>


                                </Segment.Group>
                                <Segment.Group id="userpage5">
                                    <Segment >{this.state.count}</Segment>
                                    <Segment>{this.state.height}cm</Segment>
                                    <Segment >{this.state.weight}kg</Segment>
                                    <Segment>{this.state.lung_capacity}mL</Segment>
                                    <Segment >{this.state.s_blood_pressure}mmHg</Segment>
                                    <Segment>{this.state.d_blood_pressure}mmHg</Segment>

                                </Segment.Group>

                            </Segment.Group>

                        </Segment.Group>
                        <Segment ><h3>疾病历史</h3></Segment>
                        <Segment.Group >
                            <Segment.Group horizontal>
                                <Segment.Group id="userpage4">
                                    <Segment> 疾病类型</Segment>
                                    <Segment > 疾病名称</Segment>
                                    <Segment> 描述</Segment>
                                </Segment.Group>
                                <Segment.Group id="userpage5">
                                    <Segment>{this.state.d_type}</Segment>
                                    <Segment>{this.state.d_desc}</Segment>
                                    <Segment>{this.state.d_name}</Segment>
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

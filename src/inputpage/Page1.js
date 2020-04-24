import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";
require('./Page1.css')

class Page1 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            name:"",
            age:"",
            sex:"",
            iden_id:"",
            contact_num:"",
            birthday:"",
            address:"",
            job:"",
            is_marriage:"",
        }
    }
    handleGetNameValue =(event) =>{
        this.setState({
            name:event.target.value,
        })
    }
    handleGetAgeValue =(event) =>{
        this.setState({
            age:event.target.value,
        })
    }
    handleGetSexValue =(event) =>{
        this.setState({
            sex:event.target.value,
        })
    }
    handleGetIden_idValue =(event) =>{
        this.setState({
            iden_id:event.target.value,
        })
    }
    handleGetContact_numValue =(event) =>{
        this.setState({
            contact_num:event.target.value,
        })
    }
    handleGetBirthdayValue =(event) =>{
        this.setState({
            birthday:event.target.value,
        })
    }
    handleGetAddressValue =(event) =>{
        this.setState({
            address:event.target.value,
        })
    }
    handleGetJobValue =(event) =>{
        this.setState({
            job:event.target.value,
        })
    }
    handleGetIs_marriageValue =(event) =>{
        this.setState({
            is_marriage:event.target.value,
        })
    }
    postInput1(){
        let text={basic_name:this.state.name,
            basic_age:this.state.age,
            basic_sex:this.state.sex,
            identity_id:this.state.iden_id,
            basic_contact:this.state.contact_num,
            basic_birthday:this.state.birthday,
            basic_address:this.state.address,
            basic_job:this.state.job,
            is_marriage:this.state.is_marriage,
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/hd/management/insertuser`,{
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
                if(data.code==="200"){
                     let { history } = this.props
                    history.push("/home/navbar1/mess1")
                    // 
                }else {
                    window.alert("信息录入失败")
                }
            }
        )
    }
    handleInputPost1=()=>{
        this.postInput1()
    }
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='in_page3'>
                        <h3>用户个人信息录入</h3>
                    <Input id='name'
                           value={this.state.name}
                           onChange={this.handleGetNameValue}
                           className='page1_input1' placeholder='姓名'/><br/>
                    <Input id='age'
                           value={this.state.age}
                           onChange={this.handleGetAgeValue}
                           className='page1_input1' placeholder='年龄'/><br/>
                    <Input id='sex'
                           value={this.state.sex}
                           onChange={this.handleGetSexValue}
                           className='page1_input1' placeholder='性别'/><br/>
                    <Input id='iden_id'
                           value={this.state.iden_id}
                           onChange={this.handleGetIden_idValue}
                           className='page1_input1'placeholder='证件号'/><br/>
                    <Input id='contact_num'
                           value={this.state.contact_num}
                           onChange={this.handleGetContact_numValue}
                           className='page1_input1'placeholder='联系号码'/><br/>
                    <Input id='birthday'
                           value={this.state.birthday}
                           onChange={this.handleGetBirthdayValue}
                           className='page1_input1'placeholder='生日 (YYYY-MM-dd)'/><br/>
                    <Input id='address'
                           value={this.state.address}
                           onChange={this.handleGetAddressValue}
                           className='page1_input1'placeholder='家庭住址'/><br/>
                    <Input id='job'
                           value={this.state.job}
                           onChange={this.handleGetJobValue}
                           className='page1_input1'placeholder='工作'/><br/>
                    <Input id='is_marriage'
                           value={this.state.is_marriage}
                           onChange={this.handleGetIs_marriageValue}
                           className='page1_input1'placeholder='婚姻状态'/><br/>
                        <Button
                            primary content='录入'
                            style={{marginBottom:'10px'}}
                            onClick={this.handleInputPost1}
                            // as={Link}
                            // to="/home/navbar1/mess1"
                        />
                    </Segment>
                </div>

            </div>)

    }
}

export default Page1;

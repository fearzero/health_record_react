import React from 'react';
import {Button, Input, Segment, TextArea} from "semantic-ui-react";
require('./Page1.css')

class Page2 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user_id:"",
            count:"",
            d_type:"",
            d_name:"",
            d_desc:"",

        }
    }
    handleGetUser_idValue =(event) =>{
        this.setState({
            user_id:event.target.value,
        })
    }
    handleGetCountValue =(event) =>{
        this.setState({
            count:event.target.value,
        })
    }
    handleGetD_typeValue =(event) =>{
        this.setState({
            d_type:event.target.value,
        })
    }
    handleGetD_nameValue =(event) =>{
        this.setState({
            d_name:event.target.value,
        })
    }
    handleGetD_descValue =(event) =>{
        this.setState({
            d_desc:event.target.value,
        })
    }
    postInput3(){
        let text={
            user_id:this.state.user_id,
            count:this.state.count,
            d_type:this.state.d_type,
            d_name:this.state.d_name,
            d_desc:this.state.d_desc
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/management/insertdisease`,{

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
                    window.open("/home/navbar1/mess1")
                    window.close()
                }else {
                    window.alert("信息录入失败")
                }
            }
        )
    }
    handleInputPost3=()=>{
        this.postInput3()
    }
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='in_page3'>
                        <h3>疾病信息录入</h3>
                        <h5>用户信息</h5>
                        <Input id='user_id'
                               value={this.state.user_id}
                               onChange={this.handleGetUser_idValue}
                               className='page1_input1'
                               placeholder='体检用户编码'/><br/>
                        <Input id='count'
                               value={this.state.count}
                               onChange={this.handleGetCountValue}
                               className='page1_input1'
                               placeholder='体检编次'
                        /><br/>
                        <h5>疾病信息</h5>
                        <Input id='d_type'
                               value={this.state.d_type}
                               onChange={this.handleGetD_typeValue}
                               className='page1_input1'
                               placeholder='疾病类型'/><br/>
                        <Input id='d_name'
                               value={this.state.d_name}
                               onChange={this.handleGetD_nameValue}
                               className='page1_input1'
                               placeholder='疾病名称'/><br/>
                        <div>
                        <TextArea id='d_desc'
                                  value={this.state.d_desc}
                                  onChange={this.handleGetD_descValue}
                                  className='page_text1'
                                  placeholder='病情描述'/>
                        </div>
                        <Button
                            primary content='录入'
                            style={{marginBottom:'10px'}}
                            onClick={this.handleInputPost3}
                        />
                    </Segment>
                </div>

            </div>)

    }
}

export default Page2;


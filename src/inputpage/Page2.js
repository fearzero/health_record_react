import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";
require('./Page1.css')

class Page2 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user_id:"",
            count:"",
            height:"",
            weight:"",
            lung_capacity:"",
            s_blood_pressure:"",
            d_blood_pressure:"",

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
    handleGetHeightValue =(event) =>{
        this.setState({
            height:event.target.value,
        })
    }
    handleGetWeightValue =(event) =>{
        this.setState({
            weight:event.target.value,
        })
    }
    handleGetLung_capacityValue =(event) =>{
        this.setState({
            lung_capacity:event.target.value,
        })
    }
    handleGetS_blood_pressureValue =(event) =>{
        this.setState({
            s_blood_pressure:event.target.value,
        })
    }
    handleGetD_blood_pressureValue =(event) =>{
        this.setState({
            d_blood_pressure:event.target.value,
        })
    }
    postInput2(){
        let text={
            user_id:this.state.user_id,
            count:this.state.count,
            height:this.state.height,
            weight:this.state.weight,
            lung_capacity:this.state.lung_capacity,
            s_blood_pressure:this.state.s_blood_pressure,
            d_blood_pressure:this.state.d_blood_pressure
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/management/updatetuserinfo`,{

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
    handleInputPost2=()=>{
        this.postInput2()
    }
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='in_page3'>
                        <h3>体检信息录入</h3>
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
                               placeholder='体检编次'/><br/>
                        <h5>基本健康信息</h5>
                        <Input id='height'
                               value={this.state.height}
                               onChange={this.handleGetHeightValue}
                               className='page1_input1'
                               placeholder='身高'
                               label={{ basic: true, content: 'cm' }}
                               labelPosition='right'/><br/>
                        <Input id='weight'
                               value={this.state.weight}
                               onChange={this.handleGetWeightValue}
                               className='page1_input1'placeholder='体重'
                               label={{ basic: true, content: 'kg' }}
                               labelPosition='right'/><br/>
                        <Input id='lung_capacity'
                               value={this.state.lung_capacity}
                               onChange={this.handleGetLung_capacityValue}
                               className='page1_input1'placeholder='肺活量'
                               label={{ basic: true, content: 'mL' }}
                               labelPosition='right'/><br/>
                        <Input id='s_blood_pressure'
                               value={this.state.s_blood_pressure}
                               onChange={this.handleGetS_blood_pressureValue}
                               className='page1_input1'placeholder='收缩压'
                               label={{ basic: true, content: 'mmHg' }}
                               labelPosition='right'/><br/>
                        <Input id='d_blood_pressure'
                               value={this.state.d_blood_pressure}
                               onChange={this.handleGetD_blood_pressureValue}
                               className='page1_input1'placeholder='舒张压'
                               label={{ basic: true, content: 'mmHg' }}
                               labelPosition='right'/><br/>
                        <Button
                            primary content='录入'
                            style={{marginBottom:'10px'}}
                            onClick={this.handleInputPost2}
                            // as={Link}
                            // to="/home/navbar2/mess1"
                        />
                    </Segment>
                </div>

            </div>)

    }
}

export default Page2;


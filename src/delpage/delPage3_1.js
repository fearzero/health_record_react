import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";
class delPage3_1 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user_id:this.props.location.state.user_id,
        }

    }
    handleGetUser_idValue =(event) =>{
        this.setState({
            user_id:event.target.value,
        })
    }
    postDelete3(){
        let text={
            user_id:this.state.user_id
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/management/deletedisease`,{

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
                    window.open("/home/navbar3/mess1")
                    window.close()
                }else {
                    window.alert("信息删除失败")
                }
            }
        )
    }
    handleDeletePost3=()=>{
        this.postDelete3()
    }
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='alter_page' style={{marginTop:'150px'}}>
                        <h1>疾病信息</h1>
                        <h5>指定删除信息的用户</h5>
                        <Input id='user_id'
                               className='page1_input1'
                               value= {this.state.user_id}
                               placeholder='体检用户编码'>
                        </Input><br/>
                        <Button
                            primary content='删除'
                            style={{marginBottom:'10px'}}
                            onClick={this.handleDeletePost3}
                        />
                    </Segment>
                </div>
            </div>

        );
    }
}

export default delPage3_1;

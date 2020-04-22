import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";

class delPage2 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user_id:"",
        }

    }
    handleGetUser_idValue =(event) =>{
        this.setState({
            user_id:event.target.value,
        })
    }
    postDelete2(){
        let text={
            user_id:this.state.user_id
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/management/deleteuserinfo`,{

                method:'POST',

                mode: 'cors',

                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization':localStorage.getItem("Authorization"),

                },
                body: sendData

            }
        ).then(res=>res.json()).then(
            data=>{
                if(data.CODE==="200"){
                    window.open("/home/navbar1/mess1")
                    window.close()
                }else {
                    window.alert("信息删除失败")
                }
            }
        )
    }
    handleDeletePost2=()=>{
        this.postDelete2()
    }




    render(){
        // this.setState({user_id:this.props.location.state.user_id})
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='alter_page' style={{marginTop:'150px'}}>
                        <h1>体检信息</h1>

                        <h5>指定删除信息的用户</h5>
                        <Input id='user_id'
                               value={this.state.user_id}
                               onChange={this.handleGetUser_idValue}
                               className='page1_input1'
                               placeholder='体检用户编码'/><br/>
                        <Button
                            primary content='录入'
                            style={{marginBottom:'10px'}}
                            onClick={this.handleDeletePost1}
                            // as={Link}
                            // to="/home/navbar2/mess1"
                        />
                    </Segment>
                </div>
            </div>

                );
    }
}

export default delPage2;

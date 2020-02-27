import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";
require('./page2.css')
class Page4 extends React.Component{
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='alter_page'>
                        <h3>用户信息修改</h3>
                        <h5>指定修改信息的用户</h5>
                        <Input id='user_id' className='page1_input1' placeholder='体检用户编码'/><br/>
                        <h5>修改用户信息</h5>
                        <Input id='name' className='page1_input1' placeholder='姓名'/><br/>
                        <Input id='age' className='page1_input1' placeholder='年龄'/><br/>
                        <Input id='sex' className='page1_input1' placeholder='性别'/><br/>
                        <Input id='iden_id' className='page1_input1'placeholder='证件号'/><br/>
                        <Input id='contact_num' className='page1_input1'placeholder='联系号码'/><br/>
                        <Input id='birthday' className='page1_input1'placeholder='生日 (YYYY-MM-dd)'/><br/>
                        <Input id='address' className='page1_input1'placeholder='家庭住址'/><br/>
                        <Input id='job' className='page1_input1'placeholder='工作'/><br/>
                        <Input id='is_marriage' className='page1_input1'placeholder='婚姻状态'/><br/>
                        <Button primary content='录入' style={{marginBottom:'10px'}}/>
                    </Segment>
                </div>
            </div>

                );
    }
}

export default Page4;

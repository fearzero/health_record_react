import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";


class Page5 extends React.Component{
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='in_page3'>
                        <h3>体检信息修改</h3>
                        <h5>需要修改的用户信息及体检编次</h5>
                        <Input id='user_id' className='page1_input1' placeholder='体检用户编码'/><br/>
                        <Input id='count' className='page1_input1' placeholder='体检编次'/><br/>
                        <h5>修改的健康信息</h5>
                        <Input id='height' className='page1_input1' placeholder='身高'
                               label={{ basic: true, content: 'cm' }}
                               labelPosition='right'/><br/>
                        <Input id='weight' className='page1_input1'placeholder='体重'
                               label={{ basic: true, content: 'kg' }}
                               labelPosition='right'/><br/>
                        <Input id='lung_capacity' className='page1_input1'placeholder='肺活量'
                               label={{ basic: true, content: 'mL' }}
                               labelPosition='right'/><br/>
                        <Input id='s_blood_pressure' className='page1_input1'placeholder='收缩压'
                               label={{ basic: true, content: 'mmHg' }}
                               labelPosition='right'/><br/>
                        <Input id='d_blood_pressure' className='page1_input1'placeholder='舒张压'
                               label={{ basic: true, content: 'mmHg' }}
                               labelPosition='right'/><br/>
                        <Button primary content='修改' style={{marginBottom:'10px'}}/>
                    </Segment>
                </div>

            </div>)

    }
}

export default Page5;

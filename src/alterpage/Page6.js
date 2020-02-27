import React from 'react';
import {Button, Input, Segment, TextArea} from "semantic-ui-react";

class Page6 extends React.Component{
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='in_page3'>
                        <h3>疾病信息修改</h3>
                        <h5>需要进行修改的用户信息及体检编次</h5>
                        <Input id='user_id' className='page1_input1' placeholder='体检用户编码'/><br/>
                        <Input id='count' className='page1_input1' placeholder='体检编次'/><br/>
                        <h5>需要修改信息</h5>
                        <Input id='d_type1' className='page1_input1' placeholder='疾病类型1'/><br/>
                        <Input id='d_type2' className='page1_input1'placeholder='疾病类型2'/><br/>
                        <Input id='d_name' className='page1_input1'placeholder='疾病名称'/><br/>
                        <div>
                            <TextArea id='text' className='page_text1' placeholder='病情描述'/>
                        </div>
                        <Button primary content='修改' style={{marginBottom:'10px'}}/>
                    </Segment>
                </div>

            </div>)

    }
}

export default Page6;


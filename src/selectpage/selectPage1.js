import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";


class selectPage1 extends React.Component{
    render(){
        return(
            <div id='in_page1'>
                <div id='select_page1'>
                    <Segment id='select_page2'>
                        <h3>按条件查询</h3>
                        <Input id='name' className='select_input1' placeholder='姓名'/>&nbsp;&nbsp;&nbsp;
                        <Input id='age' className='select_input1' placeholder='年龄'/>&nbsp;&nbsp;&nbsp;
                        <Input id='sex' className='select_input1' placeholder='性别'/>&nbsp;&nbsp;&nbsp;
                        <Input id='iden_id' className='select_input1'placeholder='证件号'/>&nbsp;&nbsp;&nbsp;
                        <Button primary content='查询' style={{marginBottom:'10px' ,marginLeft:'20px'}}/>
                    </Segment>
                </div>

            </div>)

    }
}

export default selectPage1;

import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";


class a_selectPage3 extends React.Component{
    render(){
        return(
            <div id='in_page1'>
                <div id='select_page1'>
                    <Segment id='select_page2'>
                        <h3>精准查询</h3>
                        <Input id='user_id' className='select_input1' placeholder='体检用户编码'/>&nbsp;&nbsp;&nbsp;
                        <Button primary content='查询' style={{marginBottom:'10px' ,marginLeft:'20px'}}/>
                    </Segment>
                </div>

            </div>)

    }
}

export default a_selectPage3;

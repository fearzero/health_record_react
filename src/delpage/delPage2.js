import React from 'react';
import {Button, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
class delPage2 extends React.Component{
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='alter_page' style={{marginTop:'150px'}}>
                        <h1>体检信息</h1>

                        <h5>指定删除信息的用户</h5>
                        <Input id='user_id' className='page1_input1' placeholder='体检用户编码'/><br/>
                        <Button
                            primary content='删除'
                            style={{marginBottom:'10px'}}
                            as={Link}
                            to="/home/navbar2/mess1"
                        />
                    </Segment>
                </div>
            </div>

                );
    }
}

export default delPage2;

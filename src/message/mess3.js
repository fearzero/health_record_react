import React from 'react';
import {Button, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
class mess3 extends React.Component{
    render(){
        return(
            <div id='style1'>
                <div id='style2'>
                </div>
                <div id='style3'>
                    <Segment id='style4' style={{textAlign:'center'}}>
                        <div style={{marginTop:'40px'}}>
                            <h2>注册成功，请登录</h2>

                            <Button
                                primary id='去登录'
                                style={{marginTop:'30px'}}
                                as={Link}
                                to="/login">
                                去登录
                            </Button>
                        </div>
                    </Segment>
                </div>
            </div>
        )
    }
}
export default mess3;
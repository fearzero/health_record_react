import React from 'react';
import {Button,Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
class mess2 extends React.Component{
    render(){
        return(
            <div id='style1'>
                <div id='style2'>
                </div>
                <div id='style3'>
                    <Segment id='style4' style={{textAlign:'center'}}>
                        <div style={{marginTop:'40px'}}>
                        <h2>注册失败，请重新注册</h2>

                            <Button
                                primary id='重新注册'
                                style={{marginTop:'30px'}}
                                as={Link}
                                to="/register">
                                重新注册
                            </Button>

                        </div>
                    </Segment>
                </div>
            </div>
        )
    }
}
export default mess2;
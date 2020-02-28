import React from 'react';
import {Button, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
class mess1 extends React.Component{
    render(){
        return(
            <div id='in_page1'>
                <div id='in_page2'>
                    <Segment id='alter_page' style={{marginTop:'150px'}}>
                        <h3>操作成功</h3>
                        <Button
                            primary content='点击返回'
                            style={{marginBottom:'10px'}}
                            as={Link}
                            to="/home/navbar/welcome"
                        />
                    </Segment>
                </div>
            </div>

                );
    }
}

export default mess1;

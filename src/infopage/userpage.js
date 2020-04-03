import React from 'react';
import {Segment} from "semantic-ui-react";
require("./userpage.css")
class userpage extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user_id:"",
            name:"",
            age:"",
            sex:"",
            iden_id:"",
            contact_num:"",
            birthday:"",
            address:"",
            job:"",
            is_marriage:"",
        }
    }
    render(){

        return(
            <div id='in_page1'>
                <div id='userpage1'>
                    <div style={{textAlign:"center"}}>
                        <Segment id="userpage6">llll</Segment>
                    </div>
                    <Segment.Group id="userpage2">
                        <Segment>Top</Segment>
                        <Segment.Group>
                            <Segment.Group horizontal>
                                <Segment.Group id="userpage4">
                                    <Segment > Top</Segment>
                                    <Segment>iddle</Segment>
                                    <Segment >Top</Segment>
                                    <Segment> Middle</Segment>
                                    <Segment > Top</Segment>
                                    <Segment>Middle</Segment>
                                    <Segment >Top</Segment>
                                    <Segment>Middle</Segment>
                                    <Segment >Top</Segment>
                                    <Segment>Middle</Segment>
                                </Segment.Group>
                                <Segment.Group id="userpage5">
                                    <Segment >Top</Segment>
                                    <Segment>Middle</Segment>
                                    <Segment >Top</Segment>
                                    <Segment>Middle</Segment>
                                    <Segment >Top</Segment>
                                    <Segment>Nested Middle</Segment>
                                    <Segment >Nested Top</Segment>
                                    <Segment>Nested Middle</Segment>
                                    <Segment >Nested Top</Segment>
                                    <Segment>Nested Middle</Segment>
                                </Segment.Group>
                            </Segment.Group>
                        </Segment.Group>

                    </Segment.Group>
                    <Segment.Group id="userpage3">
                        <Segment >Middle</Segment>
                        <Segment.Group >
                            <Segment.Group horizontal>
                                <Segment.Group id="userpage4">
                                    <Segment > Top</Segment>
                                    <Segment> Middle</Segment>
                                    <Segment > Top</Segment>
                                    <Segment> Middle</Segment>
                                    <Segment >Top</Segment>
                                    <Segment> Middle</Segment>

                                </Segment.Group>
                                <Segment.Group id="userpage5">
                                    <Segment >Nested Top</Segment>
                                    <Segment>Nested Middle</Segment>
                                    <Segment >Nested Top</Segment>
                                    <Segment>Nested Middle</Segment>
                                    <Segment >Nested Top</Segment>
                                    <Segment>Nested Middle</Segment>

                                </Segment.Group>

                            </Segment.Group>

                        </Segment.Group>
                        <Segment >Bottom</Segment>
                    </Segment.Group>
                </div>
            </div>

        );
    }
}

export default userpage;

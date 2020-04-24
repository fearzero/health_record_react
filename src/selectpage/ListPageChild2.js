import React from 'react';
import {List} from "semantic-ui-react";
import {Label} from "semantic-ui-react";
import {Image} from "semantic-ui-react";

import { Link} from 'react-router-dom';

class ListPageChild2 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            activePage: props.activePage,
            boundaryRange: 1,
            siblingRange: 1,
            showEllipsis: true,
            showFirstAndLastNav: true,
            showPreviousAndNextNav: true,
            totalPages: 0,
            userList : [],
            useData:"",
            user_id:0,
            key:1,

        }
    }
    postSelect1(){
        let text={pageNum:this.state.activePage.toString(),
            pageSize:"10"
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/hd/management/selectuserlist`,{
                method:'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization':localStorage.getItem("Authorization"),
                    'sign':localStorage.getItem("sign"),

                },
                body: sendData
            }
        ).then(res=>res.json()).then(
            data=>{
                if(data.CODE==="200"){
                    this.setState({totalPages:data.DATA.pages})
                    this.setState({userList:data.DATA.list})
                    this.setState({userData:data.DATA.pageNum})

                }else {
                    window.alert("查询失败")
                }
            }
        )
    }
    componentDidMount(){this.postSelect1()}
    pushone(){
        this.props.history.push({pathname:'/home/navbar1/delPage1' ,query:{user_id:2}})
    }


    render(){
        return(
            <div id="list_page_div4">

                <List divided verticalAlign='middle' size='massive'  id="list1">
                    {
                        this.state.userList.map(function(list,key){

                            return(
                                <List.Item key={key}>
                                    <Label horizontal>{key+1}</Label>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                                    <List.Content>
                                        <List.Header as={Link}
                                                     to={{
                                                         pathname: `/home/navbar1/userpage`,
                                                         state:{user_id:list.user_id}
                                                     }}
                                        >{list.basic_name}</List.Header>
                                        <List.Description>
                                            just now.
                                        </List.Description>
                                    </List.Content>
                                    <Label horizontal>用户编码:{list.user_id}</Label>
                                    <div style={{float:"right"}} id="list_page_div5">
                                        <Label size={"big"} color={"green"} basic={true}>

                                        <Link to={{
                                        pathname: `/home/navbar2/Page5_1`,
                                        state:{user_id:list.user_id}
                                    }}>更新</Link>
                                        </Label>
                                        &nbsp;&nbsp;&nbsp;
                                        <Label size={"big"} color={"red"} basic={true}>

                                        <Link
                                            to={{
                                                pathname: `/home/navbar2/delPage2_1`,
                                                state:{user_id:list.user_id}
                                            }}>删除</Link>
                                        </Label>
                                    </div>

                                </List.Item>
                            )
                        })

                    }
                    <List.Item>
                    </List.Item>

                </List>
            </div>
        )

    }
}
export default ListPageChild2;

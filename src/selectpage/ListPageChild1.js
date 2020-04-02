import React from 'react';
import {List} from "semantic-ui-react";
import {Label} from "semantic-ui-react";
import {Image} from "semantic-ui-react";


class ListPageChild1 extends React.Component{
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

        }
    }
    postSelect1(){
        let text={pageNum:this.state.activePage.toString(),
            pageSize:"8"
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/management/selectuserlist`,{
                method:'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
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
    render(){
        return(
            <div id="list_page_div4">

                <List divided verticalAlign='massive' size='big'>
                    {
                        this.state.userList.map(function(list){
                            return(
                                <List.Item>
                                    <Label horizontal>{list.basic_id}</Label>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                                    <List.Content>
                                        <List.Header as='a'>{list.basic_name}</List.Header>
                                        <List.Description>
                                            just now.
                                        </List.Description>
                                    </List.Content>
                                    <Label horizontal>{list.basic_id}</Label>
                                </List.Item>
                            )
                        })

                    }
                    <List.Item>
                        <Label horizontal>{this.state.userData}</Label>
                    </List.Item>

                </List>
            </div>
           )

    }
}
export default ListPageChild1;

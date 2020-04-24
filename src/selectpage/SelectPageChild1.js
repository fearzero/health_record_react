
import React from 'react';
import { List} from "semantic-ui-react";
import {Label} from "semantic-ui-react";
import {Image} from "semantic-ui-react";
import {Link} from "react-router-dom";


class SelectPageChild1 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            activePage: props.activePage,
            basic_name:props.name,
            basic_age:props.age,
            basic_sex:props.sex,
            userList : props.userList,
            useData:"",

        }
    }
    postSelect1(){
        let text={
            basic_name:this.state.name,
            basic_age:this.state.age,
            basic_sex:this.state.sex,
            pageNum:this.state.activePage.toString(),
            pageSize:"6"
        }
        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/management/selectuserlist`,{
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
    // componentDidMount(){this.postSelect1()}
    componentWillReceiveProps(nextProps) {
        this.setState(
        {
        userList: nextProps.userList,
            activePage: nextProps.activePage,
            // basic_name:nextProps.name,
            // basic_age:nextProps.age,
            // basic_sex:nextProps.sex,
        }

        );
        // this.postSelect1()
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
                                    <Label horizontal>{list.user_id}</Label>
                                    <div style={{float:"right"}}>
                                        <Label size={"big"} color={"green"} basic={true}>

                                        <Link to={{
                                                pathname: `/home/navbar1/Page4_1`,
                                                state:{user_id:list.user_id}
                                            }}>更新</Link>
                                        </Label>
                                        &nbsp;&nbsp;&nbsp;
                                        <Label size={"big"} color={"red"} basic={true}>


                                        <Link to={{
                                                pathname: `/home/navbar1/delPage1_1`,
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
export default SelectPageChild1;

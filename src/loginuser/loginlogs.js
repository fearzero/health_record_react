import React from 'react';
import { Label, List, Segment} from 'semantic-ui-react'
class loginlogs extends React.Component {
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
        let text={pageNum:"1",
            pageSize:"10"
        }

        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/systemUser/selectLogs`,{
                method:'POST',
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

    render(){
        return(

            <div id='in_page1'>
                <div id='userpage1'>
                    <Segment id="systemuserpage7" secondary={true}>
                        <div style={{textAlign:"center"}}>
                            <Segment id="systemuserpage1"><h1>个人中心</h1></Segment>
                        </div>
                        <Segment.Group id="systemuserpage2">
                            <Segment><h3>登录记录查询</h3></Segment>
                            <br/>

                            <List divided verticalAlign='middle' size='massive'>
                                <List.Item  id="list1">
                                    <Label horizontal>序号</Label>
                                    <List  horizontal>
                                        <List.Item>登录ip地址</List.Item>
                                        <List.Item>登录主机名称</List.Item>
                                        <List.Item>登录时间记录</List.Item>
                                    </List>

                                </List.Item>
                                {
                                    this.state.userList.map(function(list,key){
                                        return(
                                            <List.Item key={key}  id="list1">
                                                <Label horizontal>{key+1}</Label>
                                                <List  horizontal>
                                                    <List.Item>{list.ip_address}</List.Item>
                                                    <List.Item>{list.host_name}</List.Item>
                                                    <List.Item>{list.login_time}</List.Item>
                                                </List>

                                            </List.Item>
                                        )
                                    })

                                }
                                <List.Item>

                                </List.Item>

                            </List>
                        </Segment.Group>


                    </Segment>
                </div>
            </div>

        )
    }
}
export default loginlogs;
import React from 'react';
import {Button,  Input,  Pagination, Segment} from "semantic-ui-react";

import SelectPageChild1 from "./SelectPageChild1";
require('./selectPage.css')
class selectPage1 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            name:"",
            age:"",
            sex:"",
            activePage: 1,
            boundaryRange: 1,
            siblingRange: 1,
            showEllipsis: true,
            showFirstAndLastNav: true,
            showPreviousAndNextNav: true,
            totalPages: 5,
            userList : [],
            useData:"",
            key:1,
             K:1,
            loading:"true",

        }
    }

    handleInputChange =(event,{ name, value }) =>{
        this.setState({
            [name]:event.target.value,
        })}
    handlePaginationChange = (e, { activePage }) =>{this.setState({ activePage });
        this.setState({key:this.state.key+1})
        // window.alert(activePage)
    }
    // handlePaginationChange =(event) =>{
    //     this.setState({
    //         activePage:event.target.value,
    //     })
    // }
    handleGetNameValue =(event) =>{
        this.setState({
            name:event.target.value,
        })
    }
    handleGetAgeValue =(event) =>{
        this.setState({
            age:event.target.value,
        })
    }
    handleGetSexValue =(event) =>{
        this.setState({
            sex:event.target.value,
        })
    }
    handleSelectChange(){
        this.setState({K:this.state.K+1})
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
    handleOnClick  =(e) =>{
        this.postSelect1();
        this.setState({loading:false})
    }
     // componentDidUpdate(){this.postSelect1()}
    render(){
        const {
            activePage,
            boundaryRange,
            siblingRange,
            showEllipsis,
            showFirstAndLastNav,
            showPreviousAndNextNav,
            totalPages,

        } = this.state
        return(
            <div id='in_page1'>
                <div id='select_page1'>
                    <Segment id='select_page2'>
                        <h1>人员档案</h1>
                        <h3>按条件查询</h3>
                        <Input id='user_name'
                               onChange={this.handleGetNameValue}
                               placeholder='姓名'/>&nbsp;&nbsp;&nbsp;
                        <Input id='sex'
                               onChange={this.handleGetSexValue}
                               placeholder='性别'/>&nbsp;&nbsp;&nbsp;
                        <Input id='age'
                               onChange={this.handleGetAgeValue}
                               placeholder='年龄'/>&nbsp;&nbsp;&nbsp;
                        <Button primary content='查询'

                                onClick={this.handleOnClick}
                                style={{marginBottom:'10px' ,marginLeft:'20px'}}/>
                    </Segment>
                </div>
                <div id="select_page3">
                    <Segment id="select_page5" secondary={true}>
                        <SelectPageChild1
                            key={this.state.key}
                            userList={this.state.userList}
                            activePage={activePage}
                            name={this.state.name}
                            age={this.state.age}
                            sex={this.state.sex}
                        />
                    </Segment>
                </div>
                <div id="select_page4">
                <Segment  secondary id="list_page_seg2">
                    <div id="list_page_div3">
                        <Pagination
                            activePage={activePage}
                            boundaryRange={boundaryRange}
                            onPageChange={this.handlePaginationChange}
                            onClick={this.handleChangePage}
                            size='huge'
                            siblingRange={siblingRange}
                            totalPages={totalPages}
                            // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                            ellipsisItem={showEllipsis ? undefined : null}
                            firstItem={showFirstAndLastNav ? undefined : null}
                            lastItem={showFirstAndLastNav ? undefined : null}
                            prevItem={showPreviousAndNextNav ? undefined : null}
                            nextItem={showPreviousAndNextNav ? undefined : null}

                        />
                        <Input
                            label='Active page'
                            name='Page'
                            min={1}
                            onChange={this.handleInputChange}
                            type='number'

                            value={activePage}
                        />

                    </div>
                </Segment>
                </div>
            </div>)

    }
}

export default selectPage1;

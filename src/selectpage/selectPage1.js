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

        }
    }

    handleInputChange
        =(event,{ name, value }) =>{
        this.setState({
            [name]:event.target.value,
        })}
    handlePaginationChange = (e, { activePage }) =>{this.setState({ activePage });
        this.setState({key:this.state.key+1})
        // window.alert(activePage)
    }
    handleGetNameValue = (e, { name }) =>{this.setState({ name });
        this.setState({key:this.state.key+1})
        // window.alert(activePage)
    }
    handleGetAgeValue = (e, { age }) =>{this.setState({ age });
        this.setState({key:this.state.key+1})
        // window.alert(activePage)
    }
    handleGetSexValue = (e, { sex }) =>{this.setState({ sex });
        this.setState({key:this.state.key+1})
        // window.alert(activePage)
    }
    handleSelectChange(){
        this.setState({K:this.state.K+1})
    }
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

                                style={{marginBottom:'10px' ,marginLeft:'20px'}}/>
                    </Segment>
                </div>
                <div id="select_page3">
                    <Segment secondary={true}>
                        <SelectPageChild1 key={this.state.key} K={this.state.K} age={this.state.age} name={this.state.name} sex={this.state.sex} activePage={this.state.activePage}/>
                    </Segment>
                </div>
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
            </div>)

    }
}

export default selectPage1;

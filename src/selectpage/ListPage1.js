import React from 'react';
import ListPageChild1 from "./ListPageChild1";
import {Pagination,Input,Segment} from "semantic-ui-react";
require('./ListPage.css')

class ListPage1 extends React.Component{
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            activePage: 1,
            boundaryRange: 1,
            siblingRange: 1,
            showEllipsis: true,
            showFirstAndLastNav: true,
            showPreviousAndNextNav: true,
            totalPages: 0,
            userList : [],
            useData:"",
            key:1,


        }
    }


    postSelect1(){
        let text={pageNum:this.state.activePage.toString(),
            pageSize:"10"
        }

        let sendData=JSON.stringify(text);
        fetch(`http://localhost:8080/management/selectuserlist`,{
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
                    this.setState({userData:data.DATA.pageNum})

                }else {
                    window.alert("查询失败")
                }
            }
        )
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

    componentDidMount(){this.postSelect1()
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
        // const datas = [{"name":"mini","id":"1"}, {"name":"tiny","id":"2"},{"name":"small","id":"2"},{"name":"large","id":"3"},{"name":"big","id":"4"},{"name":"huge","id":"5"},{"name":"massive","id":"6"},{"name":"tom","id":"7"},{"name":"jack","id":"8"}]
        return(
            <div id='in_page1'>

                        <h1 id= "list_page_h1">人员档案列表</h1>
                    <div id="list_page_div1">
                        <div id="list_page_div2">
                            <Segment secondary id='list_page_seg1'>
                                <ListPageChild1 key={this.state.key} activePage={this.state.activePage}/>
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
                    </div>

            </div>
            )

    }
}

export default ListPage1;
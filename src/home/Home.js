import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import Img from './top1.jpg'
require('./Home.css')
class Home extends React.Component{
    render(){

        return(
            <div id='home_style1'>
                <div id='home_style2'>
                    <img id='top_img1' src={Img} alt='top_img'/>
                </div>
                <Menu tabular id='menu1' >
                    <Menu.Item
                        id='item1'
                        name='欢迎'
                    />
                        <Dropdown item text='人员档案管理' pointing simple>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    as={Link}
                                    to="/home/navbar1/Page1"
                                >录入</Dropdown.Item>
                                <Dropdown.Item
                                    as={Link}
                                    to="/home/navbar1/selectPage1"
                                >查询</Dropdown.Item>
                                <Dropdown.Item
                                    as={Link}
                                    to="/home/navbar1/a_selectPage1"
                                >精准查询</Dropdown.Item>
                                <Dropdown.Item
                                    as={Link}
                                    to="/home/navbar1/selectPage1"
                                >模糊查询</Dropdown.Item>
                                <Dropdown.Item
                                    as={Link}
                                    to="/home/navbar1/Page4"
                                >修改</Dropdown.Item>
                                <Dropdown.Item
                                    as={Link}
                                    to="/home/navbar1/delPage1"
                                >删除</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    <Dropdown item text='体检信息管理' pointing simple>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar2/Page2"
                            >录入</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar2/selectPage2"
                            >查询</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar2/a_selectPage2"
                            >精准查询</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar2/selectPage2"
                            >模糊查询</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar2/Page5"
                            >修改</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar2/delPage2"
                            >删除</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text='疾病信息管理' pointing simple>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar3/Page3"
                            >录入</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar3/selectPage3"
                            >查询</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar3/a_selectPage3"
                            >精准查询</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar3/selectPage3"
                            >模糊查询</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar3/Page6"
                            >修改</Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar3/delPage3"
                            >删除</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text='系统问题反馈' pointing simple>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                as={Link}
                                to="/home/navbar2/Page2"
                            >录入</Dropdown.Item>
                            <Dropdown.Item>查询</Dropdown.Item>
                            <Dropdown.Item>精准查询</Dropdown.Item>
                            <Dropdown.Item>模糊查询</Dropdown.Item>
                            <Dropdown.Item>修改</Dropdown.Item>
                            <Dropdown.Item>删除</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position={'right'}>
                        <Dropdown item icon='user' simple>
                        <Dropdown.Menu>
                            <Dropdown.Item>用户中心</Dropdown.Item>
                            <Dropdown.Item>密码修改</Dropdown.Item>
                            <Dropdown.Item>资料修改</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item icon='sign-out'>
                        </Menu.Item>
                        <Menu.Item icon='question circle'>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <div id='home1'></div>
            </div>
        );
    }
}

export default Home;



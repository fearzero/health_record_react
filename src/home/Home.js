import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import Img from './top1.jpg'
require('./Home.css')
class Home extends React.Component{
    state = { activeItem: 'bio' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state

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
                    <Menu.Item
                        name='人员档案管理'
                        active={activeItem === '人员档案管理'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/home/navbar/"
                    />
                    <Menu.Item
                        name='体检信息管理'
                        active={activeItem === '体检信息管理'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/home/navbar/"
                    />
                    <Menu.Item
                        name='疾病信息管理'
                        active={activeItem === '疾病信息管理'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/home/navbar/"
                    />
                    <Menu.Item
                        name='系统问题反馈'
                        active={activeItem === '系统问题反馈'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/home/navbar/"
                    />


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

            </div>
        );
    }
}

export default Home;



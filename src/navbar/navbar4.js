import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import Img from './sim_img1.jpg'
require('./navbar.css')
class navbar4 extends React.Component {
    state = { activeItem: 'bio' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <div>
                <div id='nav1_style1'>
                    <Menu tabular vertical={true} id='nav1_menu1'>

                        <Menu.Item
                            id='av1_item1'
                            name='用户个人详情'
                            active={activeItem === '用户个人详情'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar4/systemuserpage"
                        />
                        <Menu.Item
                            id='av1_item1'
                            name='账号密码修改'
                            active={activeItem === '账号密码修改'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar4/sysupdatepwd"
                        />
                        <Menu.Item
                            id='av1_item1'
                            name='个人资料修改'
                            active={activeItem === '个人资料修改'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar4/sysupdateinfo"
                        />
                        <Menu.Item
                            id='av1_item1'
                            name='登录记录查询'
                            active={activeItem === '登录记录查询'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to=""
                        />
                    </Menu>
                    <div id='nav1_style2'>
                        <img id='nav1_img1'src={Img} alt='nero'/>
                    </div>
                </div>
            </div>
        );
    }
}
export default navbar4;
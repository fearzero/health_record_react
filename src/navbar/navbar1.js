import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import Img from './sim_img1.jpg'
require('./navbar.css')
class navbar1 extends React.Component {
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
                            name='录入'
                            active={activeItem === '录入'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar1/Page1"
                        />
                        <Menu.Item
                            id='av1_item1'
                        name='查询'
                        active={activeItem === '查询'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/home/navbar/"
                    />
                        <Menu.Item
                            id='av1_item1'
                            name='精准查询'
                            active={activeItem === '精准查询'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar/"
                        />
                        <Menu.Item
                            id='av1_item1'
                            name='模糊查询'
                            active={activeItem === '模糊查询'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar/"
                        />
                        <Menu.Item
                            id='av1_item1'
                            name='修改'
                            active={activeItem === '修改'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar1/Page4"
                        />
                        <Menu.Item
                            id='av1_item1'
                            name='删除'
                            active={activeItem === '删除'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to="/home/navbar/"
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
export default navbar1;
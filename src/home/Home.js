import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Menu, } from 'semantic-ui-react';
require('./Home.css')
class Home extends React.Component{

    render(){
        let item={

            backgroundColor:'red',
            width: '100px'
        }
        return(
            <div id='home_style1'>
                <div id='home_style2'>
                <Segment><div>This is Home!</div></Segment>
                </div>
                <Menu>
                    <Menu.Item style={item}>
                        <Link to="/home/Page1/" style={{color:'black'}}>
                            <div>欢迎页</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/Page2/" style={{color:'black'}}>
                            <div>档案查询</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/Page3/" style={{color:'black'}}>
                            <div>档案新建</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/Page4/" style={{color:'black'}}>
                            <div>档案修改</div>
                        </Link>
                    </Menu.Item>
                </Menu>
                <div id='home_style3'>
                <Menu vertical={true} style={item}>
                    <Menu.Item style={item}>
                        <Link to="/home/Page1/" style={{color:'black'}}>
                            <div>欢迎页</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/Page2/" style={{color:'black'}}>
                            <div>档案查询</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/Page3/" style={{color:'black'}}>
                            <div>档案新建</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/Page4/" style={{color:'black'}}>
                            <div>档案修改</div>
                        </Link>
                    </Menu.Item>
                </Menu>
                </div>

            </div>
        );
    }
}

export default Home;



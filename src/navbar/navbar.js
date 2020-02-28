import React from 'react';
import Img from './sim_img1.jpg'
import Img2 from './sim_img2.jpeg'
require('./navbar.css')
class navbar1 extends React.Component {


    render() {

        return (
            <div>
                <div id='nav1_style1'>
                    <img id='nav1_img2'src={Img2} alt='ghost'/>
                    <div id='nav1_style2'>
                       <img id='nav1_img1'src={Img} alt='nero'/>
                    </div>
                </div>
            </div>
        );
    }
}
export default navbar1;
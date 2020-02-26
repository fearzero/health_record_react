import React from 'react';


class Page1 extends React.Component{
    render(){
        let mystyle={
            width:'200px',
            height:'80px',
            backgroundColor:'yellow',
            fontSize:'24px',
            textAlign:'center',
            float:'left'
        }
        return(
            <div>
                <div style={mystyle}>This is Page1!</div>
            </div>)

    }
}

export default Page1;

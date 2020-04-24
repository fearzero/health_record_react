import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './home/Home';
import Page1 from './inputpage/Page1';
import Page2 from './inputpage/Page2';
import Page3 from './inputpage/Page3';
import Page4 from './alterpage/Page4';
import Page4_1 from './alterpage/Page4_1';
import Page5 from './alterpage/Page5';
import Page5_1 from './alterpage/Page5_1';
import Page6 from './alterpage/Page6';
import Page6_1 from './alterpage/Page6_1';

import Login from './login/login';
import register from './login/register';
import navber from './navbar/navbar'
import navber1 from './navbar/navbar1'
import navber2 from './navbar/navbar2'
import navber3 from './navbar/navbar3'
import navber4 from './navbar/navbar4'

import webindex from './webindex'
import welcome from './welcome'
import selectPage1 from "./selectpage/selectPage1";
import selectPage2 from "./selectpage/selectPage2";
import selectPage3 from "./selectpage/selectPage3";
import a_selectPage1 from "./selectpage/a_selectPage1";
import a_selectPage2 from "./selectpage/a_selectPage2";
import a_selectPage3 from "./selectpage/a_selectPage3";
import ListPage2 from "./selectpage/ListPage2";
import ListPage1 from "./selectpage/ListPage1";
import ListPage3 from "./selectpage/ListPage3";
import delPage1 from "./delpage/delPage1"
import delPage2 from "./delpage/delPage2"
import delPage3 from "./delpage/delPage3"
import delPage1_1 from "./delpage/delPage1_1"
import delPage2_1 from "./delpage/delPage2_1"
import delPage3_1 from "./delpage/delPage3_1"

import mess1 from "./message/mess1"
import mess2 from "./message/mess2"
import mess3 from "./message/mess3"
import userpage from "./infopage/userpage"
import systemuserpage from "./loginuser/systemuserpage"
import sysupdatepwd from "./loginuser/sysupdatepwd"
import sysupdateinfo from "./loginuser/sysupdateinfo"
import loginlogs from "./loginuser/loginlogs"

class App extends React.Component {
    render(){
        return(
            <Router >
                <div style={{width:'1600px'}}>
                    <Route path="/home" component={Home} />
                    <Route path="/home/navbar" component={navber} />
                    <Route path="/home/navbar1" component={navber1} />
                    <Route path="/home/navbar2" component={navber2} />
                    <Route path="/home/navbar3" component={navber3} />
                    <Route path="/home/navbar4" component={navber4} />
                    <Route path="/home/navbar/welcome" component={welcome} />
                    <Route path="/home/navbar1/Page1" component={Page1} />
                    <Route path="/home/navbar2/Page2" component={Page2} />
                    <Route path="/home/navbar3/Page3" component={Page3} />
                    <Route path="/home/navbar1/Page4" component={Page4} />
                    <Route path="/home/navbar1/Page4_1" component={Page4_1} />
                    <Route path="/home/navbar2/Page5" component={Page5} />
                    <Route path="/home/navbar2/Page5_1" component={Page5_1} />
                    <Route path="/home/navbar3/Page6" component={Page6} />
                    <Route path="/home/navbar3/Page6_1" component={Page6_1} />
                    <Route path="/home/navbar1/ListPage1" component={ListPage1} />
                    <Route path="/home/navbar2/ListPage2" component={ListPage2} />
                    <Route path="/home/navbar3/ListPage3" component={ListPage3} />
                    <Route path="/home/navbar1/selectPage1" component={selectPage1} />
                    <Route path="/home/navbar2/selectPage2" component={selectPage2} />
                    <Route path="/home/navbar3/selectPage3" component={selectPage3} />
                    <Route path="/home/navbar1/a_selectPage1" component={a_selectPage1} />
                    <Route path="/home/navbar2/a_selectPage2" component={a_selectPage2} />
                    <Route path="/home/navbar3/a_selectPage3" component={a_selectPage3} />
                    <Route path="/home/navbar1/delPage1" component={delPage1} />
                    <Route path="/home/navbar2/delPage2" component={delPage2} />
                    <Route path="/home/navbar3/delPage3" component={delPage3} />
                    <Route path="/home/navbar1/delPage1_1" component={delPage1_1} />
                    <Route path="/home/navbar2/delPage2_1" component={delPage2_1} />
                    <Route path="/home/navbar3/delPage3_1" component={delPage3_1} />
                    <Route path="/home/navbar1/mess1" component={mess1} />
                    <Route path="/home/navbar2/mess1" component={mess1} />
                    <Route path="/home/navbar3/mess1" component={mess1} />
                    <Route path="/home/navbar4/mess1" component={mess1} />
                    <Route exact path="/" component={webindex} />
                    <Route path="/register" component={register} />
                    <Route path="/login" component={Login} />
                    <Route path="/mess2" component={mess2} />
                    <Route path="/mess3" component={mess3} />
                    <Route path="/home/navbar1/userpage" component={userpage} />
                    <Route path="/home/navbar4/systemuserpage" component={systemuserpage} />
                    <Route path="/home/navbar4/sysupdatepwd" component={sysupdatepwd} />
                    <Route path="/home/navbar4/sysupdateinfo" component={sysupdateinfo} />
                    <Route path="/home/navbar4/loginlogs" component={loginlogs} />
                </div>
            </Router>

        )
    }
}
export default App;

// const App = () => (
//     <div>This is App</div>
// );
//
// export default App;
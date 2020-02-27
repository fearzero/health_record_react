import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './home/Home';
import Page1 from './inputpage/Page1';
import Page2 from './inputpage/Page2';
import Page3 from './inputpage/Page3';
import Page4 from './alterpage/Page4';
import Page5 from './alterpage/Page5';
import Page6 from './alterpage/Page6';
import Login from './login/login';
import register from './register/register';
import navber1 from './navbar/navbar1'
import navber2 from './navbar/navbar2'
import navber3 from './navbar/navbar3'
import webindex from './webindex'
class App extends React.Component {
    render(){
        return(
            <Router >
                <div style={{width:'1600px'}}>
                    <Route path="/home" component={Home} />
                    <Route path="/home/navbar1" component={navber1} />
                    <Route path="/home/navbar2" component={navber2} />
                    <Route path="/home/navbar3" component={navber3} />
                    <Route path="/home/navbar1/Page1" component={Page1} />
                    <Route path="/home/navbar2/Page2" component={Page2} />
                    <Route path="/home/navbar3/Page3" component={Page3} />
                    <Route path="/home/navbar1/Page4" component={Page4} />
                    <Route path="/home/navbar2/Page5" component={Page5} />
                    <Route path="/home/navbar3/Page6" component={Page6} />
                    <Route exact path="/" component={webindex} />
                    <Route path="/register" component={register} />
                    <Route path="/login" component={Login} />
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

import React from 'react'
import { Button, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";
require('./mystyle.css')
class webindex extends React.Component {

    render() {
        return (
            <div>
                <div id='web1'>
                    <div id='web2'>
                        <h1 id='h1'>welcome</h1>
                        <h2 id='h2'>按时身体检查，享受健康生活</h2>
                        <Button
                            primary id='next'
                            icon labelPosition='right'
                            as={Link}
                            to="/login">
                            Next
                            <Icon name='right arrow' />
                        </Button>
                    </div>
                </div>

            </div>
        )

    }
}

export default webindex;

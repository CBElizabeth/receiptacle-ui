import React, { Component } from 'react';
import MediaAndText from '../components/mediaAndText';
import TwitterLogin from 'react-twitter-auth';

class Login extends Component {
    render() {
        return (
            <div id="login">
                <MediaAndText
                    header="Welcome new/old friend!"
                    subheader="Login using your Twitter account"
                    media={(
                        <TwitterLogin showIcon={false} />
                    )}
                />
            </div>
        )
    }
}

export default Login;
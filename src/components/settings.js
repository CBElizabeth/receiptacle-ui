import React, { Component } from 'react';
import MediaAndText from '../components/mediaAndText';

class Settings extends Component {
    render() {
        return (
            <div id="settings">
                <MediaAndText
                    header="SETTINGS PAGE"
                    subheader="config config etc etc"
                />
            </div>
        )
    }
}

export default Settings;
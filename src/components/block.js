import React, { Component } from 'react';
import MediaAndText from '../components/mediaAndText';

class Block extends Component {
    render() {
        return (
            <div id="block">
                <MediaAndText
                    header="BLOCK PAGE"
                    subheader="Block block blocky block block block blocky block block"
                />
            </div>
        )
    }
}

export default Block;
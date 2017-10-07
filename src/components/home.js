import React, { Component } from 'react';
import MediaAndText from '../components/mediaAndText';
import TwitterAnimation from '../components/twitterAnimation';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <MediaAndText
                    media={(<TwitterAnimation />)}
                    header="Don't waste time arguing with fascists."
                    subheader="Let Receiptacle block the Nazis for you"
                    content="The Sturmjäger prototype was able to identify Nazis at a precision of 14-22% with 0 false positives in testing over 10k accounts, using only a bag of words and a 14/88 regex. I set up the bag of words to help build a training dataset."
                />
            </div>
        )
    }
}

export default Home;
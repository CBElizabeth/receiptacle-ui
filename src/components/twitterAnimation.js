import React from 'react';
import '../styles/twitterAnimation.css';

function TwitterAnimation() {
    return (
        <section id="twitter-animation">
            <div id="phone">
                <div id="camera"/>
                <div id="speaker"/>
                <div id="screen">
                    <div id="ui" />
                    <div id="twitter">
                        <div id="twitter-header" />
                        <div className="tweet">
                            <div className="profileImage" />
                            <div className="tweetText" />
                        </div>
                        <div className="tweet">
                            <div className="profileImage" />
                            <div className="tweetText" />
                        </div>
                        <div className="tweet">
                            <div className="profileImage" />
                            <div className="tweetText" />
                        </div>
                        <div className="tweet">
                            <div className="profileImage" />
                            <div className="tweetText" />
                        </div>
                    </div>
                </div>
                <div id="button"/>
            </div>
        </section>
    );
}

export default TwitterAnimation;

//todo: add screen reader description!
//todo: fix buttons, add details to twitter animation (obvious nazis), animate!
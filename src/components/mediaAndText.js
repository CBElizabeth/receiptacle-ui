import React, { Component } from 'react';
import '../styles/mediaAndText.css';

export default class MediaAndText extends Component {
    render() {
        const { media, header, subheader, content } = this.props;
        return(
            <article class="media-and-text-container">
                <section className="left-pane">
                    { !!media && media }
                </section>
                <section className="right-pane">
                    <h1>{ !!header && header }</h1>
                    <h2>{ !!subheader && subheader }</h2>
                    <p>{ !!content && content }</p>
                </section>
            </article>
        )
    }
}
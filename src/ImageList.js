import React from 'react';
import ImageItems from './imageItems.js';

export default class ImageList extends React.Component {
    render() {

        
        return (
            <ul>
                <ImageItems images={this.props.images}/>
            </ul>
        )
    }
}


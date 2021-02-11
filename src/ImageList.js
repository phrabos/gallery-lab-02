import React from 'react';
import ImageItems from './imageItems.js';

export default class ImageList extends React.Component {
    render() {

        const imageLI = this.props.images.map(image => (<ImageItems  url={image.url} alt={image.description}/>))

        return (
            <ul>
                {imageLI}
            </ul>
        )
    }
}


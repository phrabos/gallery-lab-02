import React from 'react';


export default class ImageItems extends React.Component {
    render() {

        // const imagesArray = this.props.images.map(image => (<li key={Math.random()}><img className='images' src={image.url} alt={image.keyword}/></li>))

        return (
            <>
                <li key={Math.random()}>
                    <img className='images' src={this.props.url} alt={this.props.alt}/>
                </li>
            </>
        )
    }
}

import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import PreviewWidget from './Components/preview-widget';

const DemoPage = () => {
    const imageUrls = [
        'https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000246747_t.jpg',
        'https://inwfile.com/s-dl/l9abeb.jpg',
        'https://cdn.pocket-lint.com/r/s/970x/assets/images/138767-games-review-ps4-slim-review-image2-loxpts1wdv-jpg.webp'
    ]
    return (
        <div>
            <PreviewWidget imageUrls={ imageUrls }/>
        </div>
    )
}
ReactDOM.render(<DemoPage/>, document.getElementById('root'));
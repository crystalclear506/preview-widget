import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './preview-widget.scss';

const PreviewWidget = (props) => {
    const [index, setIndex] = useState(0);
    return (
        <div className={styles.previewWidgetContainer}>
            <div className={styles.previewContainer}>
                <img src={props.imageUrls && props.imageUrls.length > 0 ? props.imageUrls[index] : ''} alt="No Image"></img>
            </div>
            <div className={styles.grid}>
                {
                    props.imageUrls ? props.imageUrls.map((url, i) => 
                        <div key={i} onClick={ () => { setIndex(i) } } className={styles.thumbnail}> <img src={url}></img> </div>
                    ) : <div className={styles.thumbnail}> <img alt="No Image"></img> </div>
                }
            </div>
        </div>
    );
}

PreviewWidget.propTypes = {
    imageUrls: PropTypes.array
}

export default PreviewWidget;
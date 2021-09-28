import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './preview-widget.scss';

const PreviewWidget = (props) => {
    const [index, setIndex] = useState(0);
    return (
        (props.imageUrls && props.imageUrls.length > 0) &&
        <div className={styles.previewWidgetContainer}>
            <div className={styles.previewContainer}>
                <img src={props.imageUrls.length > 0 ? props.imageUrls[index] : ''}></img>
            </div>
            <div className={styles.grid}>
                {
                    props.imageUrls.map((url, i) => {
                        return <div key={i} onClick={ () => { setIndex(i) } } className={styles.thumbnail}> <img src={url}></img> </div>
                    })
                }
            </div>
        </div>
    );
}

PreviewWidget.propTypes = {
    imageUrls: PropTypes.array
}

export default PreviewWidget;
export const THUMBNAIL_SAVED = 'THUMBNAIL_SAVED';
export const THUMBNAIL_RECEIVED = 'THUMBNAIL_RECEIVED';

export const saveLocation = (x, y) => {
    localStorage.setItem('x', x);
    localStorage.setItem('y', y);

    return {
        type: THUMBNAIL_SAVED,
        payload: {
            x,
            y
        }
    }
}

export const getThumbnail = () => {
    const thumbnail = require('../../components/homepage/assets/images/RapidAPI.png');
    const x = localStorage.getItem('x') ? parseInt(localStorage.getItem('x'), 10) : 0;
    const y = localStorage.getItem('y') ? parseInt(localStorage.getItem('y'), 10) : 0;

    return {
        type: THUMBNAIL_RECEIVED,
        payload: {
            thumbnail,
            x,
            y
        }
    }
}
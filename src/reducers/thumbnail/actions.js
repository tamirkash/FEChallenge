export const THUMBNAIL_LOCATION = 'THUMBNAIL_LOCATION';

export const THUMBNAIL_SAVED = 'THUMBNAIL_SAVED';
export const THUMBNAIL_RECEIVED = 'THUMBNAIL_RECEIVED';

export const saveLocation = (x, y) => {
    localStorage.setItem(THUMBNAIL_LOCATION, JSON.stringify({x, y}));

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
    const savedLocation = localStorage.getItem(THUMBNAIL_LOCATION);
    const thumbnailLocation = savedLocation ? JSON.parse(savedLocation) : {x: 0, y: 0};

    return {
        type: THUMBNAIL_RECEIVED,
        payload: {
            thumbnail,
            ...thumbnailLocation
        }
    }
}
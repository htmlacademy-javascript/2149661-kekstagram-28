import {dataCreator} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './open-modal.js';
// import './full-photo.js';


renderThumbnails(dataCreator.createData(5));


// const picturesData = getPictures(25);
// renderThumbnails(picturesData);

// export {picturesData};

// console.log(getPictures(25));

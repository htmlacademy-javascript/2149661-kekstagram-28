// import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm} from './form.js';
import {getData, /* sendData */} from './api.js';
import {showAlert} from './utils.js';
import './modal.js';

// renderThumbnails(getData());
// renderThumbnails(picturesDataList);
// console.log(getData());
fileField.addEventListener('change', openForm);

getData()
  .then((pictures) => {
    renderThumbnails(pictures);
    console.log(pictures);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

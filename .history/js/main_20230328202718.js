// import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm} from './form.js';
import {getData, /* sendData */} from './api.js';
import {showAlert} from './utils.js';
import './modal.js';

const SIMILAR_WIZARD_COUNT = 4;
// renderThumbnails(getData());
// renderThumbnails(picturesDataList);
// console.log(getData());
fileField.addEventListener('change', openForm);

getData()
  .then((wizards) => {
    renderThumbnails(wizards.slice(0, SIMILAR_WIZARD_COUNT));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

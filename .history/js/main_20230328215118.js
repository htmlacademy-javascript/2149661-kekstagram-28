import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm} from './form.js';
import {getData, /* sendData */} from './api.js';
import {showAlert} from './utils.js';
import './modal.js';


fileField.addEventListener('change', openForm);

// getData()
//   .then((pictures) => {
//     renderThumbnails(pictures);
//   })
//   .then((pictures) => {
//     createFullPhoto(pictures);
//   })
//   .catch(
//     (err) => {
//       showAlert(err.message);
//     }
//   );
try {
  const data = await getData();
  renderThumbnails(data);
  // createFullPhoto(data);
} catch (err) {
  showAlert(err.message);
}

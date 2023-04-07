import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm, closeForm, setOnFormSubmit, showErrorMesaage, showSuccessMessage} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert, debounce} from './utils.js';
import {sortInit, getSortedPictures} from './sort.js';
import './modal.js';


fileField.addEventListener('change', openForm);

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeForm();
    showSuccessMessage();
  } catch {
    showErrorMesaage();
  }
});


try {
  const data = await getData();
  const debouncedThumbnails = debounce(data);
  console.log('1.1 ', debouncedThumbnails());
  sortInit(data, debouncedThumbnails);
  console.log('1.2 ', getSortedPictures);
  renderThumbnails(getSortedPictures);
} catch (err) {
  showAlert(err.message);
}

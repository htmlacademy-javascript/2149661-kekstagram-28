import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm, closeForm, setOnFormSubmit, showErrorMesaage, showSuccessMessage} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert, debounce, sortInit} from './utils.js';
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
  renderThumbnails(data);
  // const debounceThumbnails = debounce(data);
  // sortInit(data, debounceThumbnails, )
} catch (err) {
  showAlert(err.message);
}

import {renderThumbnails} from './thumbnails.js';
import {onClickUploadPoto, closeForm, setOnFormSubmit, showErrorMesaage, showSuccessMessage} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert, debounce} from './utils.js';
import {sortInit} from './sort.js';
import {openModalListeners} from './modal.js';

onClickUploadPoto();

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
  const debouncedThumbnails = debounce(renderThumbnails);
  sortInit(data , debouncedThumbnails);
  renderThumbnails(data);

} catch (err) {
  showAlert(err.message);
}

openModalListeners();

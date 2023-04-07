import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm} from './form.js';
import {getData, sendData} from './api.js';
import './modal.js';

renderThumbnails(picturesDataList);

fileField.addEventListener('change', openForm);


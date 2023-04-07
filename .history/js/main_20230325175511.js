import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './modal.js';
import {fileField, openForm} from './form.js';

renderThumbnails(picturesDataList);

fileField.addEventListener('change', openForm);

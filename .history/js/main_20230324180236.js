import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './modal.js';
import {openForm} from './form.js';

renderThumbnails(picturesDataList);
document.addEventListener('change', openForm);

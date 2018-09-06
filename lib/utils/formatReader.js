'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImage = isImage;
exports.isVideo = isVideo;
exports.getType = getType;
/**
 *
 * @param file
 * @returns {boolean}
 */
function isImage(file) {
  return file.mime.search('image') !== -1;
}

/**
 *
 * @param file
 * @returns {boolean}
 */
function isVideo(file) {
  return file.mime.search('video') !== -1;
}

/**
 *
 * @param file
 * @returns {boolean}
 */
function getType(file) {
  return file.mime;
}
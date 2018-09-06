/**
 *
 * @param file
 * @returns {boolean}
 */
export function isImage(file) {

    console.log(file);

    return file.mime.search('image') !== -1;
}

/**
 *
 * @param file
 * @returns {boolean}
 */
export function isVideo(file) {

    console.log(file);

    return file.mime.search('video') !== -1;
}

/**
 *
 * @param file
 * @returns {boolean}
 */
export function getType(file) {
    return file.mime;
}


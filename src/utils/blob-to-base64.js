/**
 * @param {Blob} blob 
 * @returns {Promise<string>}
 */
export default function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  })
}
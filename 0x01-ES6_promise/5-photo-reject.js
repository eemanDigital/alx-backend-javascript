const openFile = false;
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (openFile) {
      resolve();
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
console.log(uploadPhoto('guillaume.jpg'));

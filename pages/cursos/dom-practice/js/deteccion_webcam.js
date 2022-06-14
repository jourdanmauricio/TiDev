const d = document;
const n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  // console.log(n.mediaDevices.getUserMedia);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark>Webcam: sucedió el siguiente eror: ${err}</mark></p>`
        );
      });
  }
}

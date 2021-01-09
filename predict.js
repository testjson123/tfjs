//import * as tf from "/dist/tf.min.js";
alert("x");

async function loadModel() {
  //model = undefined;
  //const handler = tfn.io.fileSystem("./models/1/model.json");
  model = await tf.loadLayersModel(
    "https://localhost:8889/tree/Desktop/test_new1/models/1/model.json"
  );
  alert("loaded");
}
loadModel();

//let pic = "./test_pics/chi.jpg";
let pic = document.getElementById("test-pic");

const example = tf.browser.fromPixels(pic); // for example
const prediction = model.predict(example);

alert(prediction);

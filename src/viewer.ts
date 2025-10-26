import { ViewerApp, AssetManagerPlugin } from "webgi";
import './styles.scss';


const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get("model");

async function loadModel() {
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas") as HTMLCanvasElement,
  });

  const manager = await viewer.addPlugin(AssetManagerPlugin);

  const modelPath = `../assets/${modelName}`;
  await manager.addFromPath(modelPath);
}

loadModel();

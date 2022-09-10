import NavBar from "./NavBar/NavBar";
import Visualizer from "./Visualizer/Visualizer";

function PathfindingVisualizer() {
  return (
    <div className="relative inset-0 w-full min-h-screen md:fixed">
      <NavBar></NavBar>
      <Visualizer></Visualizer>
    </div>
  )
}

export default PathfindingVisualizer;
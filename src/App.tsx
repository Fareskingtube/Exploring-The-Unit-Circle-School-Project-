import { useState } from "react";
import Input from "./components/Input";
import Circle from "./components/Circle";
import TeX from "@matejmazur/react-katex";
import { getTrigValue } from "./util/LookUpCosine";

function App() {
	const [currentAngle, setCurrentAngle] = useState(0);
	return (
		<>
			<div className="absolute top-0 -z-2 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
			<div className="flex flex-col gap-10 justify-center items-center w-screen h-screen z-2">
				<div className="flex items-center gap-5">
					<h2>-1</h2>
					<div className="flex flex-col items-center gap-2">
						<h2>1</h2>
						<Circle angle={currentAngle} setAngle={setCurrentAngle} />
						<h2>-1</h2>
					</div>
					<h2>1</h2>
				</div>
				<div className="flex flex-col items-center">
					<form className="max-w-xs mx-auto flex justify-center items-center flex-col">
						<label className="block mb-2 text-sm font-medium text-white">
							Choose Angle:
						</label>
						<Input
							currentAngle={currentAngle}
							setCurrentAngle={setCurrentAngle}
						/>
						<p className="mt-2 text-sm text-gray-400">
							Please select an angle between 0 and 360
						</p>
					</form>
					<div className="flex flex-col items-center">
						<h2>
							Point on Circle: ({" "}
							<TeX math={getTrigValue(currentAngle, false)} />,{" "}
							<TeX math={getTrigValue(currentAngle, true)} />)
						</h2>
						<p className="mt-2 text-sm text-gray-400">
							Made by Fares Mohamed
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

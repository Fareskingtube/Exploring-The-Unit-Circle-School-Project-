import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import Tooltip from "./Tooltip";


interface InputProps {
	currentAngle: number,
	setCurrentAngle: Dispatch<SetStateAction<number>>
}

function Input({currentAngle, setCurrentAngle}: InputProps) {

	const handleAddAngle = (addAmt: number) => {
		const newAngle = currentAngle + addAmt;
		if (newAngle > 360) return;
		setCurrentAngle(newAngle);
	};
	const handleSubtractAngle = (addAmt: number) => {
		let newAngle = currentAngle - addAmt;
		if (newAngle < 0) newAngle = 0;
		setCurrentAngle(newAngle);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let newAngle = Number(event.target.value);
		if (newAngle > 360) newAngle = 360;

		setCurrentAngle(newAngle);
	};

	return (
		<div className="relative flex items-center max-w-32">
			<Tooltip infoText="Press Shift to Decrease by 10">
				<button
					type="button"
					data-input-counter-decrement="quantity-input"
					className="bg-bg hover:bg-bg-light border-r border-r-gray-400 active:bg-bg transition-colors duration-200 rounded-s-lg p-3 h-11"
					onClick={(e) => {
						if (e.shiftKey) {
							handleSubtractAngle(10);
							return;
						}
						handleSubtractAngle(1);
					}}
				>
					<svg
						className="w-3 h-3 text-text"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 2"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M1 1h16"
						/>
					</svg>
				</button>
			</Tooltip>
			<div className="relative">
				<input
					type="number"
					data-input-counter
					aria-describedby="helper-text-explanation"
					className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-x-0 h-11 text-center text-sm block w-full py-2.5 bg-bg hover:bg-bg-light border-text-muted transition-colors duration-200 placeholder-gray-400 text-text"
					placeholder={"0"}
					value={Number(currentAngle).toString()}
					min={0}
					max={360}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e?.preventDefault();
						}
					}}
					onChange={handleChange}
					required
				/>
				<span className="absolute text-lg right-1.5 top-0 text-text pointer-events-none">
					&deg;
				</span>
			</div>

			<Tooltip infoText="Press Shift to Increase by 10">
				<button
					type="button"
					id="increment-button"
					data-input-counter-increment="quantity-input"
					className="bg-bg hover:bg-bg-light border-l border-l-gray-400 active:bg-bg transition-colors duration-200 rounded-e-lg p-3 h-11"
					onClick={(e) => {
						if (e.shiftKey) {
							handleAddAngle(10);
							return;
						}
						handleAddAngle(1);
					}}
				>
					<svg
						className="w-3 h-3 text-text"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 18"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 1v16M1 9h16"
						/>
					</svg>
				</button>
			</Tooltip>
		</div>
	);
}

export default Input;

import { useRef, type Dispatch, type SetStateAction } from "react";

interface CircleProps {
	angle: number;
	setAngle: Dispatch<SetStateAction<number>>;
}

function Circle({angle, setAngle}: CircleProps) {
	const svgRef = useRef<SVGSVGElement>(null);
	const size = 300;
	const center = size / 2;
	const pointRadius = 6;
	const visualRadius = center - 2; // -2 to account for the stroke width of the container

	const angleInRadians = (angle * Math.PI) / 180;

	const lineX = center + visualRadius * Math.cos(angleInRadians);
	const lineY = center - visualRadius * Math.sin(angleInRadians);

	const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		const svg = svgRef.current;
		const rect = svg?.getBoundingClientRect();

		// Calculate mouse position relative to SVG
		const x = event.clientX - rect!.left - center;
		const y = event.clientY - rect!.top - center;

		// Calculate angle in degrees
		let theta = Math.atan2(-y, x) * (180 / Math.PI);

		// Normalize to 0-360 degrees
		if (theta < 0) theta += 360;

		setAngle(Math.round(theta));
	};

	return (
		<div className="z-1 text-center relative flex flex-col items-center">
			<svg
				ref={svgRef}
				width={size}
				height={size}
				onMouseMove={handleMouseMove}
				className="rounded-full bg-[url(/grid.png)] border-2 border-text overflow-visible"
			>
				<line
					x1={center}
					y1={center}
					x2={lineX}
					y2={lineY}
					stroke="white"
					strokeWidth="2"
				/>
				<circle
					cx={lineX}
					cy={lineY}
					r={pointRadius}
					fill="#3b82f6"
					stroke="white"
					strokeWidth="2"
				/>
			</svg>

			<h1 className="absolute bottom-20 z-10">{angle}°</h1>
		</div>
	);
}

export default Circle;

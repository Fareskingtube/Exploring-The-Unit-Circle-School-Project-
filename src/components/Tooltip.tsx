interface TooltipProps {
	infoText: string;
	children: React.ReactNode;
}

function Tooltip({ infoText, children }: TooltipProps) {
	return (
		<div className="group flex flex-col gap-5 justify-center items-center relative">
			{children}
			<div className="absolute text-center items-center  bg-bg-lighter rounded-lg transition-all ease-in duration-300 -top-10 opacity-0 delay-0 group-hover:opacity-95 group-hover:delay-1000">
				<p className="text-[10px] text-text font-semibold w-20">{infoText}</p>
				<div className="absolute -z-1 -bottom-1.5 left-[calc(50%-12px)] w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-12 border-t-bg-lighter" />
			</div>
		</div>
	);
}

export default Tooltip;

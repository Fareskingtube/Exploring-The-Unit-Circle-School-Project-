const TRIG_LOOKUP: Record<number, { sin: string; cos: string }> = {
	// Quadrant I (All Positive)
	0: { sin: "0", cos: "1" },
	30: { sin: "\\frac{1}{2}", cos: "\\frac{\\sqrt{3}}{2}" },
	45: { sin: "\\frac{1}{\\sqrt{2}}", cos: "\\frac{1}{\\sqrt{2}}" },
	60: { sin: "\\frac{\\sqrt{3}}{2}", cos: "\\frac{1}{2}" },

	// Quadrant II (Sin +, Cos -)
	90: { sin: "1", cos: "0" },
	120: { sin: "\\frac{\\sqrt{3}}{2}", cos: "-\\frac{1}{2}" },
	135: { sin: "\\frac{1}{\\sqrt{2}}", cos: "-\\frac{1}{\\sqrt{2}}" },
	150: { sin: "\\frac{1}{2}", cos: "-\\frac{\\sqrt{3}}{2}" },

	// Quadrant III (Sin -, Cos -)
	180: { sin: "0", cos: "-1" },
	210: { sin: "-\\frac{1}{2}", cos: "-\\frac{\\sqrt{3}}{2}" },
	225: { sin: "-\\frac{1}{\\sqrt{2}}", cos: "-\\frac{1}{\\sqrt{2}}" },
	240: { sin: "-\\frac{\\sqrt{3}}{2}", cos: "-\\frac{1}{2}" },

	// Quadrant IV (Sin -, Cos +)
	270: { sin: "-1", cos: "0" },
	300: { sin: "-\\frac{\\sqrt{3}}{2}", cos: "\\frac{1}{2}" },
	315: { sin: "-\\frac{1}{\\sqrt{2}}", cos: "\\frac{1}{\\sqrt{2}}" },
	330: { sin: "-\\frac{1}{2}", cos: "\\frac{\\sqrt{3}}{2}" },
	360: { sin: "0", cos: "1" },
};

/**
 * Returns the LaTeX string for common angles or a 4-decimal rounded string.
 * @param angle - The angle in degrees.
 * @param isSin - True for Sine, False for Cosine.
 */

export function getTrigValue(angle: number, isSin: boolean): string {
	// 1. Check the lookup table first
	if (TRIG_LOOKUP[angle]) {
		return isSin ? TRIG_LOOKUP[angle].sin : TRIG_LOOKUP[angle].cos;
	}

	// 2. Fallback to calculation
	const radians = (angle * Math.PI) / 180;
	const result = isSin ? Math.sin(radians) : Math.cos(radians);

	// Fix for -0.0000 edge cases and round to 4 decimals
	const formatted = result.toFixed(4);
	return formatted === "-0.0000" ? "0.0000" : formatted;
}

import { FC } from "react";

type BrandIconProps = React.SVGProps<SVGSVGElement>;

const BrandIcon: FC<BrandIconProps> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="96"
		height="96"
		fill="none"
		viewBox="0 0 96 96"
		{...props}
	>
		<rect
			width={86}
			height={86}
			x={5}
			y={5}
			fill="url(#a)"
			stroke="#B5CA2C"
			strokeWidth={10}
			rx={43}
		/>
		<defs>
			<linearGradient
				id="a"
				x1={48}
				x2={48}
				y1={96}
				y2={0}
				gradientUnits="userSpaceOnUse"
			>
				<stop offset={0.5} stopColor="#B5CA2C" />
				<stop offset={0.5} stopColor="#95A624" />
				<stop offset={0.5} stopColor="#7B8A1E" stopOpacity={0} />
				<stop offset={1} stopColor="#5A6416" stopOpacity={0} />
			</linearGradient>
		</defs>
	</svg>
);
export default BrandIcon;

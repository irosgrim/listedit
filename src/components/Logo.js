import React from 'react';
function Logo() {
	return (
		<h1 className="toolbar-title">
			<svg xmlns="http://www.w3.org/2000/svg" width="96" height="31">
				<g fill="none" fillRule="evenodd">
					<text
						fill="#75B8BB"
						fontFamily="Nunito-ExtraLight, Nunito"
						fontSize="22"
						fontWeight="300"
						transform="translate(1 1)">
						<tspan x="39" y="22">
							Notes
						</tspan>
					</text>
					<g fillRule="nonzero" stroke="#75B8BB" strokeLinecap="round">
						<path d="M7.885 14.77l5.164-2.704M8.377 14.77l6.885 3.197M7.885 14.77v10.574M23.115 14.77l-5.164-2.704M22.623 14.77l-6.885 3.197M23.115 14.77v10.574M1.69 22.439l3.49-1.521M1.436 22.59l1.336 3.564M1.984 22.64l13.107 6.644M29.326 22.439l-3.49-1.521M29.58 22.59l-1.336 3.564M29.033 22.64l-13.108 6.644M15.508 1v28.525M11.574 5.18L15.508 1M19.443 5.18L15.508 1" />
					</g>
				</g>
			</svg>
		</h1>
	);
}
export default Logo;

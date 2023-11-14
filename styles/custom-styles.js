import {keyframes} from "@chakra-ui/react";
export const aboutMeStyles = (skillsColor) => {
	return {
		'position':'relative',
		'borderLeft':`1px solid ${skillsColor}`,
		'::before':{
			'content':'""',
			'height':'10px',
			'width':'10px',
			'borderRadius':'50%',
		    'background':`${skillsColor}`,
			'position':'absolute',
			'top':'-5px',
			'left':'-5px'
		}
	};
};
const animationKeyframes = keyframes`
  0% {transform: scale(0) rotate(2deg);}
  25% {transform: scale(1.08) rotate(-2deg);}
  50% {transform: scale(1.08) rotate(2deg);}
  75% {transform: scale(1.08) rotate(-2deg);}
  100% {transform: scale(1) rotate(0deg);}
`;

const waveAnimationKF = keyframes`
  0% {transform:  rotate(4deg);}
  25% {transform:  rotate(-4deg);}
  50% {transform:  rotate(4deg);}
  75% {transform:  rotate(-4deg);}
  100% {transform: rotate(4deg);}
`;
export const hiAnimation = `${animationKeyframes} 1.5s ease-in-out infinite`;

export const waveAnimation = `${waveAnimationKF} 2s ease-in-out infinite`;

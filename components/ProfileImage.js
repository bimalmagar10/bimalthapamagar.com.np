import {
	Image,
	useColorModeValue
} from "@chakra-ui/react";

const ProfileImage = () => {
	const imgBorder = useColorModeValue("gray.900","lightwhite");
	return (
		  <Image 
		//   src="/images/profile.jpg" 
		  src="/images/profile-image.jpg"
		  alt="Bimal Thapa Magar" 
		  objectFit="cover" 
		  borderRadius="full" 
		  boxSize="100px" 
		  borderWidth="2px" 
		  borderStyle="solid" 
		  borderColor={imgBorder}
		  />
	);
};

export default ProfileImage;
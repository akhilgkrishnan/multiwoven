import { Box, Image, Text } from "@chakra-ui/react";

type EntityItem = {
  icon: string;
  name: string;
};

const EntityItem = ({ icon, name }: EntityItem): JSX.Element => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        height="40px"
        width="40px"
        marginRight="12px"
        borderWidth="thin"
        borderColor="gray.400"
        padding="3px"
        borderRadius="8px"
        backgroundColor="gray.100"
        display="flex"
      >
        <Image src={icon} alt="icon" maxHeight="100%" />
      </Box>
      <Text fontSize="14px" fontWeight={600}>
        {name}
      </Text>
    </Box>
  );
};

export default EntityItem;

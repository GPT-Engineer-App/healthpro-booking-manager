import { Box, Container, Flex, Input, Button, Text, VStack, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Select, Calendar, Footer } from "@chakra-ui/react";
import { FaSearch, FaUserMd, FaCalendarAlt, FaCog, FaSignOutAlt, FaHome } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex as="nav" bg="blue.900" color="gray.100" p={3} justifyContent="space-between" alignItems="center" position="sticky" top={0} zIndex={3}>
        <Text fontSize="xl" fontWeight="bold">HealthApp</Text>
        <Flex>
          <Button leftIcon={<FaHome />} variant="ghost" _hover={{ bg: "teal.500" }}>Home</Button>
          <Button leftIcon={<FaUserMd />} variant="ghost" _hover={{ bg: "teal.500" }}>My Bookings</Button>
          <Button leftIcon={<FaCog />} variant="ghost" _hover={{ bg: "teal.500" }}>Settings</Button>
          <Button leftIcon={<FaSignOutAlt />} variant="ghost" _hover={{ bg: "teal.500" }}>Logout</Button>
        </Flex>
      </Flex>

      <Container maxW="container.xl" mt={10}>
        <Flex gap={6}>
          <Input placeholder="Search professionals" size="lg" />
          <Select placeholder="Specialty">
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
          </Select>
          <Input type="date" size="lg" />
          <IconButton aria-label="Search" icon={<FaSearch />} size="lg" />
        </Flex>

        <VStack mt={10} spacing={8}>
          <Flex direction="column" p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="gray.50">
            <Text fontSize="lg" fontWeight="bold">Dr. Jane Doe</Text>
            <Text fontSize="md">Cardiology</Text>
            <Button mt={4} colorScheme="blue" onClick={onOpen}>Book Appointment</Button>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Book an Appointment</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input placeholder="Date" type="date" mb={4} />
                <Input placeholder="Time" type="time" mb={4} />
                <Input placeholder="Special Instructions" mb={4} />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Book
                </Button>
                <Button variant="ghost" onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>

        <Calendar mt={10} />

        <Footer bg="blue.800" color="gray.100" p={4} mt={10}>
          <Flex justifyContent="space-between">
            <Text>Support</Text>
            <Text>FAQs</Text>
            <Text>Resources</Text>
          </Flex>
        </Footer>
      </Container>
    </Box>
  );
};

export default Index;
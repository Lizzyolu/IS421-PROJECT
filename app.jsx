
import React from "react";
import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/react';
import { Tabs, TabList, Tab, TabPanels, } from '@chakra-ui/react';
import { Tab } from '@chakra-ui/react';
import { Tabs, Tab, TabPanels } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Icon, } from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';
import { IoLogoLinkedin, IoMailOutline } from 'react-icons/io';
import { MdCopyright } from 'react-icons/md';


export const App = () => (
  <div>
      <Text
    fontFamily="Inter"
    lineHeight="1.2"
    fontWeight="bold"
    fontSize="20px"
    color="#000000"
  >
    logo
  </Text>

  <svg
    width="23.57"
    height="23.56"
    viewBox="0 0 23.57 23.56"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 23.201993942260742 21.433992385864258 L 16.672992706298828 14.904993057250977 C 18.098108768463135 13.031627416610718 18.758447483181953 10.68688178062439 18.520410537719727 8.345131874084473 C 18.2823735922575 6.003381967544556 17.163734316825867 3.839468002319336 15.390810012817383 2.2911806106567383 C 13.617885708808899 0.7428932189941406 11.32304573059082 -0.07416913053020835 8.97057056427002 0.005297279451042414 C 6.618095397949219 0.08476368943229318 4.383625626564026 1.0548256635665894 2.7192256450653076 2.7192256450653076 C 1.0548256635665894 4.383625626564026 0.08476368943229318 6.618095397949219 0.005297279451042414 8.97057056427002 C -0.07416913053020835 11.32304573059082 0.7428932189941406 13.617884755134583 2.2911806106567383 15.390809059143066 C 3.839468002319336 17.16373336315155 6.003381967544556 18.282371684908867 8.345131874084473 18.520408630371094 C 10.68688178062439 18.75844557583332 13.031627416610718 18.098108768463135 14.904993057250977 16.672992706298828 L 21.433992385864258 23.20199203491211 C 21.67044499516487 23.43263778090477 21.98767924308777 23.561737060546875 22.3179931640625 23.561737060546875 C 22.64830708503723 23.561737060546875 22.96554133296013 23.43263778090477 23.201993942260742 23.20199203491211 C 23.436240881681442 22.967432215809822 23.567811965942383 22.649489670991898 23.567811965942383 22.3179931640625 C 23.56781196594238 21.986496657133102 23.436240881681442 21.668552204966545 23.201993942260742 21.433992385864258 Z M 2.5679931640625 9.314992904663086 C 2.5679931640625 7.979969024658203 2.96387380361557 6.674926042556763 3.705573320388794 5.564894199371338 C 4.447272837162018 4.454862356185913 5.501478672027588 3.5896978974342346 6.734879970550537 3.0788064002990723 C 7.968281269073486 2.56791490316391 9.325480580329895 2.434242367744446 10.634852409362793 2.694692611694336 C 11.944224238395691 2.955142855644226 13.146959900856018 3.5980182886123657 14.090964317321777 4.542022705078125 C 15.034968733787537 5.486027121543884 15.67784321308136 6.688762307167053 15.93829345703125 7.998134136199951 C 16.19874370098114 9.30750596523285 16.065071642398834 10.664704322814941 15.554180145263672 11.89810562133789 C 15.04328864812851 13.13150691986084 14.178124189376831 14.185713469982147 13.068092346191406 14.927412986755371 C 11.958060503005981 15.669112503528595 10.653017044067383 16.064992904663082 9.3179931640625 16.064992904663086 C 7.52843177318573 16.062875704606995 5.812772750854492 15.351037502288818 4.547360897064209 14.085625648498535 C 3.281949043273926 12.820213794708252 2.570110364118591 11.104554295539856 2.5679931640625 9.314992904663086 Z"
      fillRule="nonzero"
    />
  </svg>

  <InputGroup size="md" width="731px" maxWidth="100%">
    <InputLeftAddon background="gray.100" />
    <Input placeholder="Search" />
  </InputGroup>

  <Tabs variant="soft-rounded" size="lg">
    <Tab>Find Events</Tab>
    <Tab>Create Events</Tab>
    <Tab>Log In</Tab>
    <TabPanels />
  </Tabs>

 <Tab>Sign Up</Tab>



  {/* Image component */}
  <Image
    src="null"
    alt="INSERT_ALT"
    width="100%"
    height="498px"
    maxWidth="100%"
    objectFit="cover"
  />

{/* Box component */}
  <Box
    borderRadius="15px"
    width="494px"
    height="221px"
    maxWidth="100%"
    background="rgba(113, 128, 150, 0.5)"
  />
{/* Text component */}
  <Text
    fontFamily="Inter"
    lineHeight="1"
    fontWeight="bold"
    fontSize="48px"
    color="#FFFFFF"
  >
    Your Experience, Their Future
  </Text>

  <Text
    fontFamily="Inter"
    lineHeight="1.2"
    fontWeight="bold"
    fontSize="20px"
    color="#FFFFFF"
  >
    Propose a Guest Lecture for the WIS Club
  </Text>
  <Text
    fontFamily="Inter"
    lineHeight="1.2"
    fontWeight="bold"
    fontSize="30px"
    color="black"
  >
    Real-World Education
  </Text>
  <Text
    fontFamily="Inter"
    lineHeight="1.5"
    fontWeight="regular"
    fontSize="16px"
    color="black"
    width="652px"
    maxWidth="100%"
  >
    We believe true learning extends beyond the classroom. The WIS Club
    facilitates connections between students and industry professionals, giving
    students access to invaluable real-world expertise. Through guest lectures,
    office tours and more, we provide opportunities for students to gain
    insights, get career advice, and build their professional networks.
  </Text>


  {/* Input component */}
    <Input
    placeholder="your email address"
    size="sm"
    width="345px"
    height="32px"
    maxWidth="100%"
  />

{/* Button component */}
  <Button size="lg" colorScheme="blue" width="101px" height="48px">
    Sign up
  </Button>


  <Box>
    <Icon as={GoMarkGithub} />
    <Icon as={IoLogoLinkedin} />
    <Icon as={IoMailOutline} />
    <Icon as={MdCopyright} />
    <Text
      fontFamily="Inter"
      lineHeight="1.5"
      fontWeight="regular"
      fontSize="14px"
      color="black"
    >
      2024 WIS Club
    </Text>
  </Box>


  </div>
);

export default App;
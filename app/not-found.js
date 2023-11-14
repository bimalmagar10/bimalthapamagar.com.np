"use client";
import { Heading,Flex,useColorModeValue,Link } from '@chakra-ui/react'
import NextLink from 'next/link'
 
export default function NotFound() {
  const backBtnColor = useColorModeValue('blue.500','blue.300');
  const notFoundCTAColor = useColorModeValue('#333333','#f7f7f7')
  return (
    <Flex flexDirection="column" gap="1rem" justifyContent="center" alignItems="center" padding="6rem 0rem">
        <Heading as="h1" sx={{
            fontFamily:'var(--font-saira_stencil_one)',
            textTransform:'uppercase',
            fontSize:"7rem",
            color:`${notFoundCTAColor}`
        }}>
            404
        </Heading>
        <Heading 
            as="h2"
            sx={{
                fontFamily:'var(--font-saira_stencil_one)',
                textTransform:'uppercase',
                fontSize:"4rem",
                color:`${notFoundCTAColor}`
            }}
        >
            Page Not Found
        </Heading>
        <Link as={NextLink} href="/" color={backBtnColor} marginTop={"4rem"}>Back to Home</Link>
    </Flex>
  )
}
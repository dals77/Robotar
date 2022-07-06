import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/pixel-facebook-icon-12.jpg";
import Twitter from "./assets/social-media-icons/766f79f431cb063.png";
import Email from "./assets/social-media-icons/78c9d32a4bfb96e.png";

const NavBar = ({ accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }

    }
    return (
        <Flex justify="space-between" align="center" padding="15px">
            {/* left side (social media icons) */}
            <Flex justify="space-around" width="10%" padding="0 15px">
                <Link href="www.facebook.com">
                    <Image src={Facebook} boxSize="42px" margin="30px" />
                </Link>
                </Flex>
                <Flex justify="space-around" width="10%" padding="30px">
                <Link href="www.twitter.com">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
                </Flex>
                <Flex justify="space-around" width="10%" padding="30px">
                <Link href="www.gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
                </Flex>

            {/* Right Side (sections and connect) */}
            <Flex justify="space-around" align="center" width= "40%" padding="30px">
            <Box margin="0 15px"> About </Box>
            <Spacer />
            <Box margin="0 15px"> Marketplace </Box>
            <Spacer />
            <Box margin="0 15px"> Suli </Box>
            <Spacer />
</Flex>
            {/* Connect */}
            {isConnected ? (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button 
                backgroundColor="lightblue"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect
                </Button>
            )}
        </Flex>
    );
};

export default NavBar;
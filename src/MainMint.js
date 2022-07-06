import { useState } from "react";
import { ethers, BigNumber} from "ethers";
import Suli from "./Suli.json";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";


const SuliAddress = "0x23974d5564E8578008EB4d9c30644B8b1BebB099";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                SuliAddress,
                Suli.abi,
                signer
            );
            try {
              const response = await contract.mint(BigNumber.from(mintAmount));
              console.log("Response", response); 
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmmount(mintAmount + 1);

};

return (
<Flex justify="center" align="center"  paddingBottom="150px">
    <Box width="520px">
        <div>
    <Text fontSize="48px" textShadow="0 5px #000000">Welcome to Robotar</Text>
    <Text
    fontSize="30px"
    letterSpacing="-5.5%"
    fontFamily="VT323"
    textShadow="0 2px 2px #000000">mint your robots to marketplace now!</Text>
    </div>
    {isConnected ? (
        <div>
            <Flex align="center" justify="center">
                <Button 
                backgroundColor="lightblue"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px" onClick={handleDecrement}>-</Button>
                <input
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number" value={mintAmount} />

                <Button 
                backgroundColor="lightblue"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"onClick={handleDecrement}>+</Button>
                
            </Flex>
            <Button 
                backgroundColor="lightblue"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px" onClick={handleMint}>Mint now</Button>
</div>
    ) : (
        <p>You must be Connected to mint!</p>
    )
}
</Box>
</Flex>
);
};

export default MainMint;

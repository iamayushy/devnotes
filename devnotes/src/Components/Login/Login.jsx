import { Box, Button, Center, Space, TextInput } from "@mantine/core"

const Login = () => {
    return(
        <Box>
            <Center>
            <form>
                <TextInput
                required
                label="Your Personal Email"
                placeholder="dev@developer.com"
                />
                <Space h='lg'/>
                <Button >GET ME THE MAGIC LINK</Button>
            </form>
            </Center>
        </Box>
    )
}

export {Login}
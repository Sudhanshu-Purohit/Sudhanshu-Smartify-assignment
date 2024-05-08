import Box from '@mui/material/Box';
import AutoTopUpSettings from './components/AutoTopUpSettings';

function App() {
    return (
        <Box bgcolor={"black"} minHeight={"100vh"} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <AutoTopUpSettings />
        </Box>

    );
}

export default App;

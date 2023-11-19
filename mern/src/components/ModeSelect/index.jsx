import LightModeIcon from '@mui/icons-material/LightMode'
import { Box } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import DarkModeIcon from '@mui/icons-material/DarkMode'
function ModeSelect() {
    const { mode, setMode } = useColorScheme()

    const handleChange = (event) => {
        const selectedMode = event.target.value
        setMode(selectedMode)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="lable-select-dark-light-mode" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>Mode</InputLabel>
            <Select
                labelId="lable-select-dark-light-mode"
                id="demo-select-small"
                value={mode}
                label="Mode"
                onChange={handleChange}
                sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '.MuiSvgIcon-root': { color: 'white' }
                }}
            >
                <MenuItem value='light'><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><LightModeIcon fontSize='small'></LightModeIcon> Light</Box></MenuItem>
                <MenuItem value='dark'><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DarkModeIcon fontSize='small'></DarkModeIcon> Dark</Box></MenuItem>
            </Select>
        </FormControl>
    )
}

export default ModeSelect
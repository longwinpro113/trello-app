import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        const selectedMode = event.target.value
        setMode(selectedMode)
        // setAge(event.target.value)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >

                <MenuItem value='light'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LightModeIcon fontSize='small' /> Light
                    </Box>
                </MenuItem>

                <MenuItem value='dark'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DarkModeIcon fontSize='small' /> Dark
                    </Box>
                </MenuItem>

                <MenuItem value='system'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SettingsBrightnessIcon fontSize='small' /> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    )
}

function ModeToggle() {
    const { mode, setMode } = useColorScheme()
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

    console.log({ prefersDarkMode, prefersLightMode })

    return (
        <Button onClick={() => {
            setMode(mode === 'light' ? 'dark' : 'light')
        }}>

            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    )
}

function App() {
    return (
        <>
            <ModeSelect />
            <hr />
            <ModeToggle />
            <hr />
            <Typography variant="body2" color="text.secondary">Hello Long</Typography>
            {/* <div>Hello World</div> */}
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <br />
            <HomeIcon />
            <HomeIcon color="primary" />
            <HomeIcon color="secondary" />
            <HomeIcon color="success" />
            <HomeIcon color="action" />
            <HomeIcon color="disabled" />
            <HomeIcon sx={{ color: pink[100] }} />
        </>
    )
}

export default App

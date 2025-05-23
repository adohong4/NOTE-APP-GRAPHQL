import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import UserMenu from '../components/UserMenu'
import FolderList from '../components/FolderList'
import { Outlet, useLoaderData } from 'react-router-dom'

const Home = () => {
    const { folders } = useLoaderData();

    return (
        <>
            <Typography variant='h4' sx={{ mb: '20px' }}>Note App</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
                <UserMenu />
            </Box>

            <Grid container sx={{ height: '50vh', boxShadow: '0 0 15px 0 rgb(193 193 193 / 60%' }}>
                <Grid item xs={3} sx={{ height: '100%' }}>
                    <FolderList folders={folders} />
                </Grid>
                <Grid item xs={9} sx={{ height: '100%' }}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    )
}

export default Home

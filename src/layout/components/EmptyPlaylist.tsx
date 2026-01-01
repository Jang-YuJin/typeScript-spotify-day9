import { Button, styled, Typography } from '@mui/material'
import React from 'react'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile';
import { getSpotifyAuthUrl } from '../../utils/auth';

const EmptyContainer = styled('div')({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    margin: '0px 10px',
    padding: '15px'
});

const EmptyPlaylist = () => {
  const {data: userProfile} = useGetCurrentUserProfile();

  const clickCreatePlaylist = () => {
    if(!userProfile){
      getSpotifyAuthUrl();
    }
    console.log('click Create Playlist');
  };

  return (
    <EmptyContainer>
      <Typography fontSize={'larger'} fontWeight={700}>Create your first playlist</Typography>
      <Typography>It's easy, we'll help you</Typography>
      <Button variant='contained' color='secondary' sx={{'marginTop': '15px'}} onClick={clickCreatePlaylist}><Typography fontWeight={700}>Create Playlist</Typography></Button>
    </EmptyContainer>
  )
}

export default EmptyPlaylist

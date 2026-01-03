import { Button, styled, Typography } from '@mui/material';
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile';
import { getSpotifyAuthUrl } from '../../utils/auth';
import useCreatePlaylist from '../../hooks/useCreatePlaylist';

const PlaylistHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
});

const HeaderContent = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  margin: '10px 10px',
  padding: '8px',
  color: theme.palette.text.primary
}));

const PlaylistHead = () => {
  const {data: userProfile} = useGetCurrentUserProfile();
  const {mutate: createPlaylist} = useCreatePlaylist();

  const clickAddBtn = () => {
    if(!userProfile){
      getSpotifyAuthUrl();
    }
    createPlaylist({name: 'my playlist'});
  };
  return (
    <div>
      <PlaylistHeader>
        <HeaderContent>
            <BookmarkIcon></BookmarkIcon><Typography variant='h2' fontWeight={700}>Your Playlist</Typography>
        </HeaderContent>
        <Button sx={{'marginBottom': '10px'}} onClick={clickAddBtn}><Typography fontSize={'x-large'} fontWeight={'lighter'}>+</Typography></Button>
      </PlaylistHeader>
    </div>
  )
}

export default PlaylistHead
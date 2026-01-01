import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import LoginButton from '../../common/components/login/LoginButton'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.style.css'

const Navbar = () => {
  const {data: userProfile} = useGetCurrentUserProfile();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('access_token');
    window.location.reload();
  };

  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'} height={'60px'} marginBottom={'20px'}>
      {userProfile 
      ? 
        <div ref={containerRef} className="userProfileWrapper">
          <div
            className="userProfileContainer"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <Typography sx={{ margin: '0 10px' }}>
              {userProfile.display_name}
            </Typography>

            {userProfile.images?.[0] ? (
              <img
                className="userProfileImg"
                src={userProfile.images[0].url}
              />
            ) : (
              <div className="noUserProfileImg">
                <PersonIcon />
              </div>
            )}
          </div>

          {isOpen && (
            <div className="logoutMenu">
              <button className="logoutBtn" onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      : <LoginButton></LoginButton>}
    </Box>
  )
}

export default Navbar

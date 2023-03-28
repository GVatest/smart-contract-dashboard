import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/system/Stack';
import React from 'react';
import { ReactComponent as DiscordIcon } from 'static/social/Discord.svg';
import { ReactComponent as TelegramIcon } from 'static/social/Telegram.svg';
import { ReactComponent as TwitterIcon } from 'static/social/Twitter.svg';

type FooterItem = {
  icon: React.ReactNode;
  href: string;
};

const footerData = [
  { icon: <DiscordIcon />, href: '#' },
  { icon: <TwitterIcon />, href: '#' },
  { icon: <TelegramIcon />, href: '#' },
] as FooterItem[];

function Footer() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Stack direction='row' spacing={3}>
        {footerData.map(({ icon, href }, key) => (
          <IconButton href={href} key={key}>
            {icon}
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
}

export default Footer;

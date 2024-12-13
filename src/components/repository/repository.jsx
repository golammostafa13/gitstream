import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import { CardContent, Chip, Menu } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import TodayIcon from '@mui/icons-material/Today';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import BookMarkIcon from '@mui/icons-material/Bookmark';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ExpandCircleDown } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const RepositoryCard = ({
  full_name = '',
  description = '',
  owner = {},
  homepage = '',
  stargazers_count = 0,
  watchers_count = 0,
  forks_count = 0,
  updated_at = '',
  topics = [],
  license = {},
  created_at = '',
  language = 'en',
  html_url = '',
  languageData = {},
}) => {
  const timeSinceCreation = formatDistanceToNow(new Date(created_at), { addSuffix: true });
  const formattedUpdatedAt = format(new Date(updated_at), 'MMM dd, yyyy');
  const totalLinesOfCode = Object.values(languageData).reduce((a, b) => a + b, 0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={owner.avatar_url} />}
        title={full_name}
        subheader={timeSinceCreation}
      />
      <CardContent>
        <Stack>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={1}>
          {Object.entries(languageData).map(([lang, linesOfCode]) => (
            <Chip
              key={lang}
              label={`${lang}: ${((linesOfCode / totalLinesOfCode) * 100).toFixed(2)}`}
              variant="outlined"
              size="small"
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={1} mt={1}>
          {topics.map((topic) => (
            <Chip key={topic} label={topic} variant="outlined" size="small" />
          ))}
        </Stack>
        <Stack direction="row" spacing={1} mt={1}>
          <Box display="flex" alignItems="center">
            <StarIcon />
            <Typography variant="body2" ml={0.5}>
              {stargazers_count}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <VisibilityIcon />
            <Typography variant="body2" ml={0.5}>
              {watchers_count}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ForkRightIcon />
            <Typography variant="body2" ml={0.5}>
              {forks_count}
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <Box display="flex" alignItems="center">
            <TodayIcon />
            <Typography variant="body2" ml={0.5}>
              Updated on {formattedUpdatedAt}
            </Typography>
          </Box>
        </Stack>
        <Stack spacing={2} direction="row">
          {homepage && (
            <Link href={homepage} target="_blank" rel="noopener noreferrer">
              {homepage}
            </Link>
          )}
          {html_url && (
            <Link href={html_url} target="_blank" rel="noopener noreferrer">
              {html_url}
            </Link>
          )}
        </Stack>
        <Stack>
          {license && (
            <Box display="flex" alignItems="center">
              <Link href={license.url} target="_blank" variant="body2" color="text.secondary">
                License: {license.name}
              </Link>
            </Box>
          )}
        </Stack>
      </CardContent>
      <CardContent>
        <Stack direction="row">
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <BookMarkIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
          <IconButton onClick={handleClick}>
            <MoreHorizIcon />
          </IconButton>
          <Button variant="text" endIcon={<ExpandCircleDown />}>
            Details
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
          </Menu>
        </Stack>
      </CardContent>
    </Card>
  );
};

RepositoryCard.propTypes = {
  full_name: PropTypes.string,
  description: PropTypes.string,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string,
  }),
  homepage: PropTypes.string,
  stargazers_count: PropTypes.number,
  forks_count: PropTypes.number,
  updated_at: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string),
  license: PropTypes.shape({
    name: PropTypes.string,
  }),
  created_at: PropTypes.string,
  language: PropTypes.string,
  html_url: PropTypes.string,
  watchers_count: PropTypes.number,
  languageData: PropTypes.shape({}),
};
export default RepositoryCard;

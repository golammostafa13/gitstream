import React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import RepositoryCard from "./repository-card";

const FeedItems = ({ items }) => (
    <Stack spacing={2}>
        {items.map((item) => (
            <RepositoryCard key={item.id || item.uniqueKey} {...item} />
        ))}
    </Stack>
);

FeedItems.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            uniqueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }).isRequired
    ).isRequired,
};

export default FeedItems;

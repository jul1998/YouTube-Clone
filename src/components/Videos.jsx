import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({videos}) => {

  
  return (
    <Stack
    direction="row"
    spacing={2}
    sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
   
    {videos?.map((video, index) => (
      <Box
        key={video.id.videoId}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
    ))}

  </Stack>
  )
}

export default Videos
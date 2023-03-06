import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import {CheckCircle} from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { Link } from 'react-router-dom';
const VideoCard = ({video: {id:{videoId},snippet }}) => {
    
    return (
<div className="card mb-3" style={{width:{md: "320px", xs: "100%" }, boxShadow: "none", borderRadius:0}}>
  <div className="row g-0">
    <div className="col-md-4">
      <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
        <img src={snippet?.thumbnails?.high?.url} className="img-fluid rounded-start" alt={snippet?.title}/>
      </Link> 
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
        <h5 className="card-title">{snippet?.title.slice(0,60) || demoChannelTitle.slice(0,60)}</h5>
        </Link>
        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`: demoChannelUrl}>
        <p className="card-text"><small className="text-muted">{snippet?.channelTitle}</small></p>
        </Link >
        <p className="card-text">{snippet?.description}</p>
        </div>
    </div>
  </div>
</div>

      );
    }
export default VideoCard
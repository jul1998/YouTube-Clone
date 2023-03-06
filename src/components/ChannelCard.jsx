import React from 'react';

import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail}) => {
    console.log(channelDetail)
  return (
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>

    <div style={{ boxShadow: "none", borderRadius:"20px", display:"flex", justifyContent: "center", alignItems:"center", width: {xs: "356px", md: "320px"}}}>
<div className="card mb-3" 
    >
      <div className="row g-0">
        <div className="col-md-4">
            <img
            src={channelDetail?.snippet?.thumbnails?.medium?.url || demoProfilePicture}
            alt="channel thumbnail"
            className="img-fluid rounded-start"
            style={{height:"100px", width:"100px", borderRadius:"50%"}}
          />
           

        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{channelDetail?.snippet?.channelTitle}</h5>
            <p className="card-text">Channel description</p>
            <p className="card-text">{channelDetail && channelDetail.statistics && channelDetail.statistics.subscriberCount ? (
    <span>{channelDetail.statistics.subscriberCount} Subscribers</span>
) : null}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Link>
    
  );
};

export default ChannelCard;

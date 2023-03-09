import React from 'react'
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Grid } from '@mui/material';

const card = () => {
  return (
    <Card sx={{ width: "90%", borderRadius: "10px" }}>
      <CardContent sx={{ textAlign: "left", p: 5 }}>
        <Grid container>
          <Grid xs={8}>
            <div className="eventDetails">
              <p className="eventID">ID: 12321</p>
              <p className="eventName">Knife Detected</p>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="eventReadStatus">
              <p className="eventStatus">New</p>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid xs={8}>
            <Grid container>
              <Grid xs={5}>
              <div className="eventTime">
                <p className="time">15:12:26</p>
              </div>
              </Grid>
              <Grid xs={1}>
                <div className="seperator">
                  <p className="dash">-</p>
                </div>
              </Grid>
              <Grid xs={5}>
                <div className="eventLocation">
                  <p className="location">Location</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <div className="eventPhoto">
              <CardMedia 
                component="img"
                image="https://tdtouxxtysyyukpepnca.supabase.co/storage/v1/object/public/company1/detections_images/2023-02-01_22-47-41-721226_Knife.jpg"
                alt="Event Photo"
              />
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default card
import React from 'react'
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Grid, Button } from '@mui/material';

const card = (props) => {
  function getTime(datetime) {
    const date = new Date(datetime)
    const time = date.toLocaleTimeString('en-US', { hour12: false })
    return time
  }
  
  return (
    <Card sx={{ width: "80%", borderRadius: "10px", margin: 5 }}>
      <CardContent sx={{ textAlign: "left", p: 5 }}>
        <Grid container>
          <Grid xs={8}>
            <div className="eventDetails">
              <p className="eventID">ID: { props.data.id }</p>
              <p className="eventName">{ props.data.Weapon.name } Detected</p>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="eventReadStatus">
              <Button variant="contained" className="eventStatus">New</Button>
              {/* <p className="eventStatus">New</p> */}
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid xs={8}>
            <Grid container>
              <Grid xs={5}>
              <div className="eventTime">
                <p className="time">{ getTime(props.data.created_at) }</p>
              </div>
              </Grid>
              <Grid xs={1}>
                <div className="seperator">
                  <p className="dash">-</p>
                </div>
              </Grid>
              <Grid xs={5}>
                <div className="eventLocation">
                  <p className="location">{ props.data.Camera.location }</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <div className="eventPhoto">
              <CardMedia 
                component="img"
                image={ props.data.image_path }
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
import { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Grid, Button, Popper, Paper, Typography, Fade } from '@mui/material';
import { AddAlert, Share, Close } from '@mui/icons-material';

const EventCard = (props) => {
  const anchorRef = useRef(null);
  const popperRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    popperRef.current.focus();
  };

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
              <Button 
                variant="contained" 
                className="eventStatus" 
                aria-haspopup="true" 
                ref={anchorRef} 
                onClick={handleToggle}
              >New</Button>
              <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 100,
                display: open ? "block" : "none",
              }}
              onClick={() => setOpen(false)}
              className="popperClass">
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  placement="bottom-start"
                  transition
                  disablePortal
                  ref={popperRef}
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper sx={{ m: 2, width: "100%", height: "auto", p: 2 }}>
                        <Typography>
                          <div className="eventDetails">
                            <p className="eventID">ID: { props.data.id }</p>
                            <p className="eventName">{ props.data.Weapon.name } Detected</p>
                            <p className="eventLocation">{ props.data.Camera.location }</p>
                          </div>
                          <div className="eventButton">
                            <Button size="small" variant="contained" style={{ backgroundColor: "red" }}><AddAlert fontSize="small" sx={{ mr: 1 }}/>Alarm</Button>
                            <Button size="small" variant="contained"><Share fontSize="small" sx={{ mr: 1 }}/>Share</Button>
                            <Button size="small" variant="contained" style={{ backgroundColor: "grey" }}><Close fontSize="small" sx={{ mr: 1 }}/>Close</Button>
                          </div>
                        </Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
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

export default EventCard
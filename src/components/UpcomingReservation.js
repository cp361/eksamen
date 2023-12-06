import React from "react";
import { Container, Button, Title, Grid } from "@mantine/core";
import { cancelAlert } from "./alert/CancelAlert";

export function UpcomingReservation() {
  return (
    <>
      <Container fluid className="ur-container">
        <Title className="ur-title">Upcoming reservations</Title>
        <Grid gutter="lg" className="ur-grid">
          <Grid.Col className="this-week-grid" span={4}>
            <div className="ur-thisweek-dato">
              <p>Tommorow</p>
              <h1 className="title-date">10th</h1>
              <p>November</p>
            </div>
            <div className="ur-thisweek-info">
              <Title order={4} className="ur-thisweek-title">
                CL-201
              </Title>
              <p>Kl. 12:00 - 16:30</p>
              <p>4 Students</p>
            </div>
            <div className="ur-button">
              <Button onClick={cancelAlert} color="var(--cphYellow)">
                Cancel
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col className="this-week-grid" span={4}>
            <div className="ur-thisweek-dato">
              <p>Monday</p>
              <h1 className="title-date">13th</h1>
              <p>November</p>
            </div>
            <div className="ur-thisweek-info">
              <Title order={4} className="ur-thisweek-title">
                CL-164
              </Title>
              <p>Kl. 13:00 - 16:00</p>
              <p>3 Students</p>
            </div>

            <div className="ur-button">
              <Button onClick={cancelAlert} color="var(--cphYellow)">
                Cancel
              </Button>
            </div>
          </Grid.Col>

          <Grid.Col className="this-week-grid" span={4}>
            <div className="ur-thisweek-dato">
              <p>Wednesday</p>
              <h1 className="title-date">15th</h1>
              <p>November</p>
            </div>
            <div className="ur-thisweek-info">
              <Title order={4} className="ur-thisweek-title">
                CL-209
              </Title>
              <p>Kl. 8:00 - 12:00</p>
              <p>2 Students</p>
            </div>
            <div className="ur-button">
              <Button onClick={cancelAlert} color="var(--cphYellow)">
                Cancel
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

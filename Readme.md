Notes:
  Can't request CTA less than 2 sec intervals due to rate limits

TODOS
  1. Setup db to save train locations **DONE
    a. connect db to app. **DONE
    b. migrations
      Train locations table **DONE

    c. models **DONE
    d. save train locations **DONE

  5. Deploy to server
    a. need to deploy to aws or something so I can collect the transit history

  4. polylines
    a. Generate routes for trains so they are visibile and usable.
    b. investigate using a different service for maps that has this generated already or look into just using lat long for everything.
    c. could use a several trains that have ran each course to use as a line train is going down to generate polyline


  2. Algorithim to guess where train will be.
  ***READ APPENDIX A****
    these two things might work better as an external task
    a. at that given moment in time +-3seconds get average of where train was.
    b. ignore anything that is outside of certain range.


  3. Instructions for how far to move train during each tic.
    a. convert lat long into distance.
    b. send distance each train is supposed to move for each tick.

  3a.
    a. move trains given amount of distance each loop


Counter for maps api/any other apis


Appendix

A. Algorithm Pseudo code
  Speed needs to a thing
  Distance to next station needs to be a thing
  Get trains current location.
  Get Trains Estimated arrival time at next station.
  Based On when Train is estimated to be there calculate speed. (distance/time)
    as arrival time is updated change speed.

  On page load save trains to view.
  Update trains with socket by giving front end speed 

  FrontEnd has polylines for each train to move on so speed is speed for polyline 





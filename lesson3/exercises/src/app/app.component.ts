import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  rocketIsOnGround: boolean = true;

  handleTakeoff(rocket) {
    let wantToTakeoff = window.confirm("Are you sure the shuttle is ready for takeoff?");
    if (wantToTakeoff) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.rocketIsOnGround = false;
      rocket.style.bottom = "10px";
    }
  }

  handleLanding(rocket) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle has landed.";
    this.rocketIsOnGround = true;
    rocket.style.bottom = "0px";
  }

  handleAbort(rocket) {
    let wantToAbort = window.confirm("Are you sure the mission should be aborted?");
    if (wantToAbort) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      rocket.style.bottom = "0px";
      rocket.style.left = "0px";
      this.rocketIsOnGround = true;

    }
  }

    moveRocket(rocket, direction) {            
      let newLeft = parseInt(rocket.style.left);
      let newBottom = parseInt(rocket.style.bottom);
      let imageMoveIncrement = 10;
      let rocketHeightIncrement = 10000;
      if (direction === "right") {
        newLeft += imageMoveIncrement;
        this.width = this.width + 10000;
      } else if (direction === "left") {
        newLeft -= imageMoveIncrement;
      } else if (direction === "up") {
        newBottom += imageMoveIncrement;
        this.height += rocketHeightIncrement;
      } else if (direction === "down") {
        newBottom -= imageMoveIncrement;
        if (this.height > rocketHeightIncrement) {
          this.height = this.height - rocketHeightIncrement;
        } else {
          this.height = 0;
        }
      }      
      
      let rocketSpace = document.getElementById("rocketArea");
      
      if (this.approvedToMove(newLeft, newLeft+rocket.width, newBottom, newBottom+rocket.height, rocketSpace)) {
        rocket.style.left = newLeft + "px";
        rocket.style.bottom = newBottom + "px";
      }
    }

    approvedToMove(newLeft, newRight, newBottom, newTop, space) : boolean {
      if (newLeft < space.clientLeft || newRight > space.clientLeft + space.clientWidth || newBottom < space.clientHeight - space.clientHeight || newTop > space.clientTop + space.clientHeight) {
        this.color = "orange";
        return false;
      } else {
        this.color = "blue";
        return true;
      }      
    }

  }



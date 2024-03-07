import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-rock-paper-scissors',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './rock-paper-scissors.component.html',
  styleUrl: './rock-paper-scissors.component.scss'
})
export class RockPaperScissorsComponent {
  rockImage = "/assets/rock-200x187.png";
  paperImage = "/assets/paper-200x187.png";
  scissorsImage = "/assets/scissors-200x187.png";

  outcome = "Select your choice..";
  wins: number = 0;
  ties: number = 0;
  losses: number = 0;
  //computerSelection = Math.floor(Math.random() * 3);
  //rock:0  paper:1 scissors: 2
  rockChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection == 0){
      this.outcome = "You have tied with Rock!";
      this.ties++;
    }
    else if (computerSelection == 1){
      this.outcome = "You have lost to Paper!";
      this.losses++;
    }
    else if (computerSelection == 2) {
      this.outcome="You have won against Scissors!";
      this.wins++;
    }
  }

  paperChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection == 0){
      this.outcome = "You have won against Rock!";
      this.wins++;
    }
    else if (computerSelection == 1){
      this.outcome = "You have tied with Paper!";
      this.ties++;
    }
    else if (computerSelection == 2) {
      this.outcome="You have lost against Scissors!";
      this.losses++;
    }
  }

  scissorsChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection == 0){
      this.outcome = "You have lost agaist Rock!";
      this.losses++;
    }
    else if (computerSelection == 1){
      this.outcome = "You have won against Paper!";
      this.wins++;
    }
    else if (computerSelection == 2) {
      this.outcome="You have tied with Scissors!";
      this.ties++;
    }
  }

  resetButton() {
    this.wins = 0;
    this.ties = 0;
    this.losses = 0;
    this.outcome = "Select your choice..";
  }
}  

import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void{
    this.tutorialService.getAll().subscribe(data => {this.tutorials = data;
    console.log(data);
  },
  error => {
    console.log(error);
  });
  }
  refreshList():void{
    this.retrieveTutorials();
    this.currentTutorial = {};
    this,this.currentIndex = -1;
  }

}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.scss']
})
export class CardClassComponent {
  @Input() subjectCode !: string
  @Input() subjectDescription !: string
  @Input() year!:string
  @Input() classId!: string

  constructor(private router: Router, private viewClassService: ViewClassService){}
  onNavigate(){
    this.router.navigate([`/teacher/view-class/${this.classId}/assignments`])
  }
}

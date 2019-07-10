import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { NewExclusiveServiceService } from '../new-exclusive-service.service';

@Component({
  selector: 'app-new-exclusive',
  templateUrl: './new-exclusive.component.html',
  styleUrls: ['./new-exclusive.component.css'],
  providers: [NewExclusiveServiceService]
})

export class NewExclusiveComponent implements OnInit {
  pics: FirebaseListObservable<any[]>;

  constructor(private newExclusiveServiceService: NewExclusiveServiceService) {
 }

 ngOnInit() {
   this.pics = this.newExclusiveServiceService.getPics();
 }

}

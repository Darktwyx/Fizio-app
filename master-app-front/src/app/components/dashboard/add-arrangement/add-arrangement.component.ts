import { Component, OnInit, Inject} from '@angular/core';
import { Subscription } from 'rxjs';
import { ArrangementsResponseModel } from 'src/app/models/ArrangementsResponse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-arrangement',
  templateUrl: './add-arrangement.component.html',
  styleUrls: ['./add-arrangement.component.css']
})
export class AddArrangementComponent implements OnInit {

  constructor(
    private router: Router) { 
    }
  getAllArrangementsObservable: Subscription;
  arrangementsArray: ArrangementsResponseModel[]=[];

  ngOnInit() {
    this.getAllArrangements();
  }


  getAllArrangements(){

  }


  openUpdateArrangementPage(){
    this.router.navigate(['/dashboard/updateArrangement']);
  }

}

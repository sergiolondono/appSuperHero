import { Component, OnInit } from '@angular/core';
import { planPackagesService } from '../services/planPackages-service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  planPackages : any[];

  constructor(private planpackagesService: planPackagesService) { }

  ngOnInit() {
    this.planpackagesService.getAll()
    .subscribe(planPackages => this.planPackages = planPackages);
  }

}

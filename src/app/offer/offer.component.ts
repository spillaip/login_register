import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';

@Component({
  selector: 'offer',
  templateUrl: 'offer.component.html'
  })

  export class OfferComponent {
    offers: any[] = [
      {profile:'Utility Tractors (22.4 – 140 Engine HP)', logo:'',offer:50000,location:'New York'},
      {profile:'Row Crop Tractors (140 – 400 Engine HP)', logo:'',offer:53000,location:'San Francisco'},
      {profile:'Specialty Tractors (75 – 155 Engine HP)', logo:'',offer:48000,location:'London'},
      {profile:'Front End Loaders', logo:'',offer:49500,location:'New York'},
      {profile:'Scraper Systems', logo:'',offer:52000,location:'New York'},
      {profile:'Utility Tractor Attachments', logo:'',offer:52000,location:'New York'},
      {profile:'Financing', logo:'',offer:'12%',location:'New York'},
    ]
  }
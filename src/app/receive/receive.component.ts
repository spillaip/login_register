import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';



@Component({
  selector: 'receive',
  templateUrl: 'receive.component.html'
  })

  export class ReceiveComponent {
    receives: any[] = [
      {profile:'ICICI Bank', logo:'',offer:50000,location:'New York'},
      {profile:'HDFC Bank', logo:'',offer:53000,location:'San Francisco'},
      {profile:'SBI Bank', logo:'',offer:48000,location:'London'},
      {profile:'AXIS Bank', logo:'',offer:49500,location:'New York'},
      {profile:'Bank of America', logo:'',offer:52000,location:'New York'},
      {profile:'Wells Fargo', logo:'',offer:52000,location:'New York'},
    ]
  }
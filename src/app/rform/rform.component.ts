import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent implements OnInit {
 
  registerForm:any;

  ngOnInit(): void {
    
    this.registerForm=new FormGroup({
      customerName: new FormControl('',Validators.required),
      customerEmail: new FormControl('',[Validators.required,Validators.email]),
    });
  }
  onSubmit()
  {
    console.log(this.registerForm.value);
  }

}

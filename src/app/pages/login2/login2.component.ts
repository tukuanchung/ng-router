import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit{


  data: any = {
    name: 'Will',
    tel: '0944-444444',
    addresses: [
      {
        city: 'Taipei',
        address1: '內湖區',
        address2: '某某大道 1 號'
      },
      {
        city: '台中',
        address1: '中區',
        address2: '臺灣大道100號'
      }
    ]
  }

  fb = inject(FormBuilder);

  form = this.fb.group({
    name: this.fb.control('', {
      validators: [Validators.required],
      updateOn: 'blur'
    }),
    addresses: this.fb.array([
      this.fb.group({
        city: this.fb.control(''),
        address1: this.fb.control(''),
        address2: this.fb.control(''),
      }),
      this.fb.group({
        city: this.fb.control(''),
        address1: this.fb.control(''),
        address2: this.fb.control(''),
      }),
    ])
  });

  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');
    // this.form.setValue(this.data);
    this.form.patchValue(this.data);
  }

  resetForm() {
    this.form.reset(this.data);
    this.form.disable();
    this.form.enable();
  }

  doSubmit(){
    if(this.form.invalid){
      console.log("From Validate Failed!")
    }
  }
}

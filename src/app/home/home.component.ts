import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  form: FormGroup;
  constructor(private _fb: FormBuilder, private srv: ApiServiceService, private http: HttpClient) {
    this.form = this._fb.group({
      name: '',
      email: '',
      massage: ''
    })
  }

  ngOnInit() {
    const options = {
      strings: ['Web Developer.', 'Code Visionary.'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    };

    const typed = new Typed('#element', options);
  }

  saveData() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.srv.postData(formData).subscribe({
        next: () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your massage has been send',
            showConfirmButton: false,
            timer: 1500
          })
        },

        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            timer: 1200
          })
        }
      })
    }
    this.form.reset();
  }

}



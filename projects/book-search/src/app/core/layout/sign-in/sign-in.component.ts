import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services';

@Component({
  selector: 'sqr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  loading = true;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]]
    });

    if (this.auth.getUserName()) {
      this.router.navigate(['search']);
    } else {
      this.loading = false;
    }
  }

  submit(): void {
    if (this.form.valid) {
      this.auth.setUserName(this.form.get('username')?.value);
      this.router.navigate(['search']);
    }
  }
}

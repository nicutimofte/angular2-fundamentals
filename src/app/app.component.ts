import { Component } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: `<div>
<app-simple-form></app-simple-form>
{{mail.message}}
</div> `
})
export class AppComponent {
  title = 'aLet`s get started!';

  constructor(private mail:MailService){}
}

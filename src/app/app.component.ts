import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-lifecyclehok';
  inpuval:string='';
  

  constructor(){
    console.log('App component');

  }
onBtnClicked(inputEl:HTMLInputElement){
  this.inpuval=inputEl.value;

}

}

import { Component,Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnChanges {
  title:string="demo component";
  @Input()
  message!: string;

  constructor(){
    console.log('demo component');
    console.log(this.title);
    console.log(this.message)
  }
  ngOnChanges(){
    console.log('ngOnchanges hook called');
    console.log(this.message);


  }
}

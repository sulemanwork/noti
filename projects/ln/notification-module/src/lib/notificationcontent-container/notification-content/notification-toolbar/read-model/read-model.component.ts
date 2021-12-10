import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'read-model',
  templateUrl: './read-model.component.html',
  styleUrls: ['./read-model.component.less']
})
export class ReadModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  public commonModelContent:any[] = []
  
  @Output()
  public modelExit = new EventEmitter<any>();

  @Output()
  public overlay = new EventEmitter<any>();

  @Output()
  public readAllDataValues = new EventEmitter<any>();

  exitModel(){
    this.modelExit.emit(false)
    this.overlay.emit(false)
  }
  readAll(data:any){
    // console.log(data);
    this.readAllDataValues.emit(data);
    this.modelExit.emit(false)
    this.overlay.emit(false)
  }
}

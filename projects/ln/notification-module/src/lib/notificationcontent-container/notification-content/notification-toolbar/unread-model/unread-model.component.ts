import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'unread-model',
  templateUrl: './unread-model.component.html',
  styleUrls: ['./unread-model.component.less']
})
export class UnreadModelComponent implements OnInit {

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
  public unReadAllDataValues = new EventEmitter<any>();

  exitModel(){
    this.modelExit.emit(false)
    this.overlay.emit(false)
  }
  unReadAll(data:any){
    this.unReadAllDataValues.emit(data);
    this.modelExit.emit(false)
    this.overlay.emit(false)
  }
}

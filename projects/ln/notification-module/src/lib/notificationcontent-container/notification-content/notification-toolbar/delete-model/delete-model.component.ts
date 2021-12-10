import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.less']
})
export class DeleteModelComponent implements OnInit {

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
  public deletingDataValues = new EventEmitter<any>();

  exitModel(){
    this.modelExit.emit(false)
    this.overlay.emit(false)
  }
  DeleteAll(data:any){
    // console.log(data);
    this.deletingDataValues.emit(data);
    this.modelExit.emit(false)
    this.overlay.emit(false)
  }
}

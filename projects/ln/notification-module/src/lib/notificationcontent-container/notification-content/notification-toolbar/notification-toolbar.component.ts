import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INotificationItem } from "@ln/notification-abstractions"

@Component({
  selector: 'notification-toolbar',
  templateUrl: './notification-toolbar.component.html',
  styleUrls: ['./notification-toolbar.component.less']
})
export class NotificationToolbarComponent implements OnInit {

  // public selectedCount = ""
  public selectValue = "Date (newest)"
  public moreValueToggle:boolean = false
  public sortValueToggle:boolean = false
  public selectAllCheckboxes:boolean = false
  
  @Input()
  public selectItem:INotificationItem[] = [];
  
  @Input()
  public notification:any[] = [];
  
  @Output()
  public checkboxSelectedAll = new EventEmitter<any>();
  
  @Output()
  public sortByValues = new EventEmitter<any>();

  public overlay:boolean = false
  public modelExit:boolean = false;
  public deleteModelShow:boolean = false
  public commonModelContent:any = {};
  public readModelShow:boolean = false
  public unReadModelShow:boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }
  moreToggle(){
    this.moreValueToggle = !this.moreValueToggle
  }
  sortToggle(){
    this.sortValueToggle = !this.sortValueToggle
  }
  selectAll(){
    this.selectAllCheckboxes = !this.selectAllCheckboxes
    this.checkboxSelectedAll.emit(this.selectAllCheckboxes)
  }
  sortData(event:any,value:any){
    this.sortByValues.emit(event);
    this.selectValue = value;
    this.sortValueToggle = false
  }
  
  deleteAllButtonClicked(event:any){
    this.commonModelContent = event;
    this.deleteModelShow = true
    this.overlay=true
    this.modelExit=true
    this.moreValueToggle=false
  }
  
  deleteByID(event:any){
    // this.deleteModelContent = event;
    this.deleteModelShow = true
    this.overlay=true
    this.modelExit=true
    this.moreValueToggle=false
  }
  markAllRead(event:any){
    this.commonModelContent = event;
    this.readModelShow = true
    this.overlay=true
    this.modelExit=true
    this.moreValueToggle=false
  }
  
  markAllUnRead(event:any){
    this.commonModelContent = event;
    this.readModelShow = true
    this.overlay=true
    this.modelExit=true
    this.moreValueToggle=false
  }
  exitModel(modelExit:any){
    this.overlay=false;
    this.modelExit=modelExit
  }

  deletingDataValues(data:any){
    
  }
  readAllDataValues(data:any){

  }
}

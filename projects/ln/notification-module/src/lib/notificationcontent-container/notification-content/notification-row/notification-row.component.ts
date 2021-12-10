import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { INotificationItem } from "@ln/notification-abstractions"

@Component({
  selector: 'notification-row',
  templateUrl: './notification-row.component.html',
  styleUrls: ['./notification-row.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationRowComponent implements OnInit {

  @Input()
  public notification: INotificationItem[] = []

  @Input()
  public selectAll: boolean = false
   
  public selectone: boolean = false
  public selectedIds: any[] = []

  @Output()
  public selectedrow = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.selectAll); 
  }
  getSeletedValue(event:any,data:any)
  {
    console.log(event)
    // console.log(data)
    if(event.target.checked)
    {
      this.selectedIds.push(data.id)

    }else{
      this.selectedIds.splice(this.selectedIds.indexOf(data.id), 1)
    }
    this.selectedrow.emit(this.selectedIds)
    
    
  }











  
}

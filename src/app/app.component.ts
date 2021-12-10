import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Module';
  
  public selectAll:boolean = false 
  public selectItem:any[] = []  

  notification = [
    {
      id: 1,
      topic: "Larry Terhune removed an item (Chase v. State Farm Mut. Auto. Ins. Co., 131 Ariz. 461) from a shared folder (temporary).",
      frequency:"As updates are available",
      status:"active",
      updateCount:938,
      itemActive:false,
      createdDate:'2021-10-10 17:28:30.0',
      updatedDate:Date(),
      read: false,
    },
    {
      id: 2,
      topic: "aonsumer Protection",
      frequency:"As updates are available",
      status:"active",
      updateCount: 0,
      itemActive:false,
      createdDate:"2021-11-18 17:17:30.0",
      updatedDate:Date(),
      read: false,
    },
    {
      id: 3,
      topic: "Consumer Protection",
      frequency:"As updates are available",
      status:"active",
      updateCount:938,
      itemActive:false,
      createdDate:"2021-11-15 17:17:30.0",
      updatedDate:Date(), 
      read: true,     
    }
  ]
  
  constructor() { 
    this.notification = this.notification.sort((a, b) => <any>new Date(b.updatedDate) - <any>new Date(a.updatedDate));
  }
  selectAllCheckboxes(event:any){
    // console.log(event);
    this.selectAll = event
    this.notification.map(o => o.itemActive = event)
  }
  selectedrow(Selectedarray:any){
    this.selectItem = Selectedarray
  }
  sortByValues(sortby:any){
    if(sortby == "dateNew"){
      this.notification = this.notification.sort((a, b) => <any>new Date(b.updatedDate) - <any>new Date(a.updatedDate));

    }else if(sortby == "dateOld"){
      this.notification = this.notification.sort((a, b) => <any>new Date(a.updatedDate) - <any>new Date(b.updatedDate));
    }else if(sortby == "eventAsc"){
      this.notification = this.notification.sort((a, b) => a.topic.localeCompare(b.topic));
    }else if(sortby == "eventDesc"){
      this.notification = this.notification.sort((a, b) => b.topic.localeCompare(a.topic));
    }
    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstory',
  templateUrl: './userstory.component.html',
  styleUrls: ['./userstory.component.css']
})
export class UserstoryComponent implements OnInit {
  //define variables
  userstory:UserStory;
  userstories:UserStory[]=[];  
  idMax:number;
  constructor() { 
    this.refresh();
    this.idMax=1;
  }

  ngOnInit() {
  }

  refresh(){
    let userstoryEmpty: UserStory;
    userstoryEmpty ={
      _id:0,
      feature:'',
      user:'',
      what:'',
      why:'',
    };  
    this.userstory=userstoryEmpty; 
  };

  add(){
    console.log('add function');
    this.userstory._id=this.idMax++;
    console.log(this.userstory);
    this.userstories.unshift(this.userstory);
    this.refresh();
  }

  delete(_id){
    console.log('delete the id='+_id);
    
    for(let i =0;i<this.userstories.length;i++){
      if(this.userstories[i]._id==_id){
        this.userstories.splice(i,1);//delete one user story.
      }
    }
  } 
 
}
//UserStory class
interface UserStory{
  _id:number,
  feature:string,
  user:string,
  what:string,
  why:string,
}
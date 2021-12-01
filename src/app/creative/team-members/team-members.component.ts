import { Component } from '@angular/core';
import { teamMember } from '../intefaces/teams.interfaces';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent   {

  teamMembers:teamMember[] = [
    {
      name:"Nick Smith",
      imgPath:"assets/team-member-1.jpg",
      skills:["PS","Figma","HTML","CSS3","Ai"],
      title:"Designer",
      activate:false
    },
    {
      name:"Bob Brown",
      imgPath:"assets/team-member-2.jpg",
      skills:["Ae","Pr","HTML5","CSS3","Inkscape"],
      title:"Designer",
      activate:false
    },
    {
      name:"John Doe",
      imgPath:"assets/team-member-3.jpg",
      skills:["JavaScript","ReacJs","Vuejs","MongoDB","Python"],
      title:"Developer",
      activate:false
    },
  ]

  showHistory(name:string){
    
    const status = this.teamMembers.map( members => members.activate )
    const id = this.teamMembers.findIndex( member => member.name==name )
    this.teamMembers[id].activate = !status[id];
    
    
  }

}

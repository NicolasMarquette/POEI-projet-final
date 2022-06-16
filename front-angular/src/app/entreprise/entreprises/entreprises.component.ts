import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprises } from '../entreprises';
import { SrvEntrepriseService } from '../srv/srv-entreprise.service';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit {

  id : number = 0;
  listEntreprise : Array<Entreprises> = new Array<Entreprises>();
  listProfession : Array<string> = new Array<string>("Menuiserie", "Plomberie", "Maçonnerie", "Peinture");
  listDpt : Array<String> = new Array<String>("16 - Charente", "24 - Dordogne", "33 - Gironde", "44 - Loire-Atlantique")
  selectedProf : string = "";
  entreprise : string = "";

  selectedDept : string = "";
  dept : string = "";

  

  constructor(private srv : SrvEntrepriseService, private router : Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("currentUser")==null){
      this.router.navigate(['/appcarousel']);
    }
  }

  afficherAll(){
    this.srv.findAll().subscribe({
      next:(data) => {this.listEntreprise = data},
      error:(err) => {console.log(err)},
      complete:() => {console.log(this.listEntreprise)}
    })
  }

  afficherProf(){
    this.srv.findByProfession(this.selectedProf).subscribe({
      next:(data) => {this.listEntreprise = data},
      error:(err) => {console.log(err)},
      complete:() => {console.log(this.listEntreprise)}
    })
  }

  afficherDept(){
    this.srv.findByDepartement(this.selectedDept).subscribe({
      next:(data) => {this.listEntreprise = data},
      error:(err) => {console.log(err)},
      complete:() => {console.log(this.listEntreprise)}
    })
  }

  afficherProfDept(){
    this.srv.findByProfessionDepartement(this.selectedProf,this.selectedDept).subscribe({
      next:(data) => {this.listEntreprise = data},
      error:(err) => {console.log(err)},
      complete:() => {console.log(this.listEntreprise)}
    })
  }

  select(c : Entreprises){
    console.log(c);
    let cstring : string = JSON.stringify(c);
    console.log(cstring)
    sessionStorage.setItem("entreprise",cstring);
    this.router.navigate(["/prestations"]);
  }

}

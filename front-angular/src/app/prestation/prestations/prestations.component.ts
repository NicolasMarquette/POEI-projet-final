import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprises } from 'src/app/entreprise/entreprises';
import { LignePresta } from '../ligne-presta';
import { PanierPresta } from '../panier-presta';
import { Prestation } from '../prestation';
import { SrvprestationService } from '../srv-presta/srvprestation.service';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {

  profession : string = "";
  nomentreprise : string = "";
  adresseentreprise : string = "";
  listPrestations : Array<Prestation> = new Array<Prestation>();

  listeLignePrestations : Array<LignePresta> = new Array<LignePresta>();
  client : string = "";
  panier : PanierPresta = new PanierPresta();

  constructor(private srv : SrvprestationService, private router : Router) { 
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("entreprise")==null){
      this.router.navigate(['/entreprises']);
    }
  
  let entreprise : Entreprises =  JSON.parse(sessionStorage.getItem("entreprise") || '') ;
  let user = JSON.parse(sessionStorage.getItem("currentUser") || '')
  this.client = user.username;
  this.profession = entreprise.profession; 
  this.nomentreprise = entreprise.entreprise; 
  this.adresseentreprise = entreprise.adresse;
  this.afficherByProf(); 
  if (sessionStorage.getItem("panier")) {

    let oldPanier = JSON.parse(sessionStorage.getItem("panier") || '{}');

    this.panier = new PanierPresta();
    this.panier.client = oldPanier.client;
    this.panier.listLignePresta = oldPanier.listLignePresta;
    this.panier.totalPanier = oldPanier.totalPanier;

  }

  }

  init(){
    
  }

  afficherAll(){
    this.srv.findAll().subscribe({
      next:(data) => {this.listPrestations = data},
      error:(err) => {console.log(err)},
      complete:() => {console.log(this.listPrestations)}
    })
  }

  afficherByProf(){
    this.srv.findByProfession(this.profession).subscribe({
      next:(data) => {this.listPrestations = data},
      error:(err) => {console.log(err)},
      complete:() => { console.log(this.listeLignePrestations); this.listPrestations.forEach((v) => this.listeLignePrestations.push(new LignePresta(0, v)))}
    })
  }

  select(c : LignePresta){

  

    let li = new LignePresta(c.quantite, c.prestation);


    let PrestaDejaDansListe = this.panier.listLignePresta.find(p => p.prestation === li.prestation);
    let quantite = c.quantite;
    c.quantite = 0;

    if(PrestaDejaDansListe){
      PrestaDejaDansListe.updateLigne(quantite);
      this.panier.updatePanier(PrestaDejaDansListe);
      sessionStorage.setItem("panier", JSON.stringify(this.panier));
      return;
    }

    this.panier.client = this.client;
    this.panier.addLigne(li);
    // this.panier.listLignePresta.push(li);
    sessionStorage.setItem("panier", JSON.stringify(this.panier));
  }

  valideCommande(){
    alert(`${this.client} merci de votre commande de ${this.panier.totalPanier}€`)
  }

  remove(p: LignePresta) {
    this.panier.removeArticle(p);
  
   if(this.panier.listLignePresta.length==0){
    this.panier = new PanierPresta();
   }
   sessionStorage.setItem("panier", JSON.stringify(this.panier));
   console.log(this.panier)
  }

}

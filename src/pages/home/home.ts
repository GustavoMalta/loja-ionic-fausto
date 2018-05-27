import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoService } from './../../services/produto';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ProdutoService
  ]
})
export class HomePage implements OnInit {

  public title : String = 'Página inicial';
  produtos: any;
  public produto: any;

  constructor(
    public navCtrl: NavController,
    public ps : ProdutoService
  ) {
    
  }

  ionViewDidEnter () {    
    this.ps.listarProdutos().subscribe(
      dados => this.produtos = dados,
      erro => console.log(erro)
    );
  }

  ParaDetalhes(codigo){
    this.navCtrl.push(DetailsPage,codigo)
    console.log(codigo);
    console.log(this.produtos);
  }
}

import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';import { IProdutoCarrinho } from '../produtos';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho:IProdutoCarrinho[]= [];
  total= 0;


  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ){ }



 ngOnInit(): void {
   this.itensCarrinho = this.carrinhoService.obtemCarrinho();
   this.calcularTotal();
 }

 calcularTotal(){
  this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
 }

 removeProdutoCarrinho(produtoId: number){
  this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
  this.carrinhoService.removerProdutoCarrinho(produtoId);
  this.calcularTotal();
 }

 comprar(){
  alert("Você finalizou a sua Compra");
  this.carrinhoService.limparCarrinho();
  this.router.navigate(["produtos"]);
 }

}

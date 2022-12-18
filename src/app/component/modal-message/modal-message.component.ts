import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {

  @Input()
  showModal:boolean= false;

  @Input()
  title:string = 'Title aqui'

  @Input()
  conteudo:string = 'Conteúdo aqui';

  constructor() { }

  ngOnInit(): void {

    
  }

}

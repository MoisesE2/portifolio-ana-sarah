import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  nome: string = '';
  email: string = '';
  assunto: string = '';
  mensagem: string = '';
  enviado: boolean = false;

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Mensagem de contato:', {
        nome: this.nome,
        email: this.email,
        assunto: this.assunto,
        mensagem: this.mensagem
      });
      this.enviado = true;
    }
  }

  reset(): void {
    this.nome = '';
    this.email = '';
    this.assunto = '';
    this.mensagem = '';
    this.enviado = false;
  }
}

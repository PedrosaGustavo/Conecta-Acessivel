import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent {
  leituraAtiva = false;
  fonteGrande = false;
  daltonico = false;

  aplicarAcessibilidade() {
    const body = document.body;

    this.fonteGrande
      ? body.classList.add('large-font')
      : body.classList.remove('large-font');

    this.daltonico
      ? body.classList.add('daltonico')
      : body.classList.remove('daltonico');

    if (this.leituraAtiva) {
      const msg = new SpeechSynthesisUtterance('Leitura de voz ativada.');
      speechSynthesis.speak(msg);
    }
  }
}

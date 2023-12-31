import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css'],
})
export class DiretivaNgifComponent implements OnInit {
  cursos: String[] = ['Angular'];

  mostrarCurso: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMostrarCursos() {
    this.mostrarCurso = !this.mostrarCurso;
  }
}

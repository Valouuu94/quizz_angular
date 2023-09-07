import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  changingText: string = 'One Piece'; // Texte initial
  words: string[] = ['One Piece', 'The Best Manga In The World', ]; // Tableau de mots à afficher en alternance
  currentIndex: number = 0; // Indice du mot actuel

  ngOnInit() {
    // Appeler la fonction pour démarrer le changement de texte
    this.changeText();
  }

  // Fonction pour changer le texte en alternance
  changeText() {
    setInterval(() => {
      this.changingText = this.words[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
    }, 2500); // Délai en millisecondes (2 secondes)
  }
}
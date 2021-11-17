import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/*
  slideIndex:number = 1;
showSlides(slideIndex:number);

// Next/previous controls
 plusSlides(n:number) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
 currentSlide(n:number) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n:number) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "block";
  dots[this.slideIndex-1].className += " active";
}*/
  constructor() { }

  ngOnInit(): void {
  }

}

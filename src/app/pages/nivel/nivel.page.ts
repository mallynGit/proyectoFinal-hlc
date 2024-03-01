import { Component, OnInit } from '@angular/core';
import { PluginListenerHandle, Capacitor } from '@capacitor/core';
import { Motion } from '@capacitor/motion'

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.page.html',
  styleUrls: ['./nivel.page.scss'],
})
export class NivelPage implements OnInit {

  public orientationHandler: PluginListenerHandle;
  public beta: number = 0;
  public gamma: number = 0;
  // public Math: Math;
  public horizontal: any;

  constructor() { }

  async ionViewWillEnter() {
    try {
      await (DeviceMotionEvent as any).requestPermission();
    } catch (e) {
      console.log(e);
    }
    this.orientationHandler = await Motion.addListener('orientation', (data: any) => {
      console.log(data);
      this.beta = Math.round(data.beta)
      this.gamma = Math.round(data.gamma)
    });
  }

  public calculateCirclePosition(beta: number): number {
    const circleRadius = 200; // Radio del círculo exterior
    const dotDiameter = 10; // Diámetro del círculo interior
  
    // Calcula la posición vertical del círculo interior
    let topPosition = (circleRadius - dotDiameter / 2) - (beta * circleRadius / 90);
  
    // Ajusta la posición vertical para que el círculo no se salga del círculo exterior
    if (topPosition < 0) {
      topPosition = 0;
    } else if (topPosition > circleRadius - dotDiameter) {
      topPosition = circleRadius - dotDiameter;
    }
  
    return topPosition;
  }

  public calculateLeftPosition(gamma: number): number {
    const dotWidth = 20; // Ancho del círculo
    const levelWidth = 100; // Ancho del nivel
    const margin = (100 - levelWidth) / 2; // Margen izquierdo del nivel
  
    // Calcula la posición izquierda del círculo dentro del nivel
    let leftPosition = 47 + gamma;
  
    // Ajusta la posición izquierda para que el círculo no se salga del nivel
    if (leftPosition < margin + dotWidth / 2) {
      leftPosition = margin + dotWidth / 2;
    } else if (leftPosition > margin + levelWidth - dotWidth / 2) {
      leftPosition = margin + levelWidth - dotWidth / 2;
    }
  
    return leftPosition;
  }
  
  calculateTopPosition(beta: number): number {
    const dotHeight = 20; // Altura del círculo
    const levelHeight = 100; // Altura del nivel
    const margin = (100 - levelHeight) / 2; // Margen superior del nivel
  
    // Calcula la posición superior del círculo dentro del nivel
    let topPosition = 46.75 + beta;
  
    // Ajusta la posición superior para que el círculo no se salga del nivel
    if (topPosition < margin + dotHeight / 2) {
      topPosition = margin + dotHeight / 2;
    } else if (topPosition > margin + levelHeight - dotHeight / 2) {
      topPosition = margin + levelHeight - dotHeight / 2;
    }
  
    return topPosition;
  }
  

  ngOnInit(): void {
    this.ionViewWillEnter()
    this.horizontal = document.querySelector('#level')
    console.log(this.horizontal);
    
  }

}

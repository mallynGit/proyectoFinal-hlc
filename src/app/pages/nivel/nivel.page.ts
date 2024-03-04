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
  public horizontal: any;

  constructor() { }

  async ionViewWillEnter() {
    try {
      await (DeviceMotionEvent as any).requestPermission();
    } catch (e) {
      console.log(e);
    }
    this.orientationHandler = await Motion.addListener('orientation', (data: any) => {
      this.beta = Math.round(data.beta)
      this.gamma = Math.round(data.gamma)
    });
  }

  public calculateCirclePosition(beta: number): number {
    const circleRadius = 200; // radio circulo
    const dotDiameter = 10; // diametro punto
  
    // pos vertical
    let topPosition = (circleRadius - dotDiameter / 2) - (beta * circleRadius / 90);
  
    //asi no se sale
    if (topPosition < 0) {
      topPosition = 0;
    } else if (topPosition > circleRadius - dotDiameter) {
      topPosition = circleRadius - dotDiameter;
    }
  
    return topPosition;
  }

  public calculateLeftPosition(gamma: number): number {
    const dotWidth = 20; 
    const levelWidth = 100;
    const margin = (100 - levelWidth) / 2; 
  
    
    let leftPosition = 47 + gamma;
  
    
    if (leftPosition < margin + dotWidth / 2) {
      leftPosition = margin + dotWidth / 2;
    } else if (leftPosition > margin + levelWidth - dotWidth / 2) {
      leftPosition = margin + levelWidth - dotWidth / 2;
    }
  
    return leftPosition;
  }
  
  calculateTopPosition(beta: number): number {
    const dotHeight = 20;
    const levelHeight = 100; 
    const margin = (100 - levelHeight) / 2; 
  
    
    let topPosition = 46.75 + beta;
  
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
    
  }

}

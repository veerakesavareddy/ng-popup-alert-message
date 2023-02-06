import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgPopupAlertMessageService {

  constructor() { }

  options: string = `
  position : absolute;
  z-index : 100;
  left : 50%;
  top : -4%;
  width : fit-content;
  height : 40px;
  padding : 20px 10px 0px 10px;
  text-align : center;
  border-radius : 5px;
  transition : top 0.5s ease-out;
`;

  createElement(msgClass: string, icon: string, msgText: string, customOptions: any) {
    let duration: number = 4000;
    let background: string = '#262626';
    let color: string = '#ffffff';
    if (customOptions.duration != undefined && customOptions.duration != '') {
      duration = customOptions.duration;
    }
    if (customOptions.background != undefined && customOptions.background != undefined) {
      background = customOptions.background;
    }
    if (customOptions.color != undefined && customOptions.color != undefined) {
      color = customOptions.color;
    }
    var element = document.createElement('div');
    element.className = "ngPopupAlertMessage " + msgClass;
    element.style.cssText = this.options;
    element.style.background = background;
    element.style.color = color;
    document.body.appendChild(element);
    element.innerHTML = icon + ' ' + msgText;
    var leftMargin = Math.floor((element.offsetWidth) / 2);
    element.style.marginLeft = '-' + leftMargin + 'px';
    let elementCount = document.getElementsByClassName('ngPopupAlertMessage');
    element.style.top = '' + ((((elementCount.length) - 1) * 8) + 2) + '%';
    setTimeout(() => {
      element.style.top = '-100%';
      setTimeout(() => {
        element.remove();
      }, 300);
    }, duration);
  }

  notify(msgText: string, icon: string, customOptions: any) {
    this.createElement("customMsg", icon, msgText, customOptions);
  }

}

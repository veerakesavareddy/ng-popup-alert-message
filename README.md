# Popup Alert Messages for Angular

The simplest solution for custom Popup Alert Messages in Angular.

## Table of Contents


* [Angular Version](#angular-Version)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Example](#example)

## Angular Version

This library is built to work with **Angular 12+**.

## Prerequisites

You may need to install few dependencies depending on the icons you are passing.
Example: fontawesome.

## Installation

```
npm install ng-popup-alert-message
```

## Example

```TypeScript
// example.component.ts
import {Component} from '@angular/core';
import { NgPopupAlertMessageService } from 'ng-popup-alert-message';

@Component({
    selector: 'example-component',
    template: 'example.component.html'
})
export class MyComponent {
     
     constructor(private popupAlert: NgPopupAlertMessageService){}
    
    whenEverRequired(){
        this.popupAlert
        .notify('Message-text-here','<i class="fa fa-bell fa-lg" style="color:#ffffff;"></i>',
                {duration:5000, // Optional in milliseconds(number), default is 4000
                 background:'black', // Optional as a string, default is #262626
                 color:'white' // Optional as a string, default is #ffffff
                }); 
                                        
    }
}
```


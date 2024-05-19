import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password ='';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length=0;

  onChangeLength(event:Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
    console.log("length",this.length,parsedValue);
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    let variables = '';
    const letters  = 'abcdefghijklmnopqrstuvwxyz';
    const numbers  = '0123456789';
    const symbols  = '!@#$%^&*()';

    if(this.includeLetters){
      variables += letters;
    }

    if(this.includeNumbers){
      variables += numbers;
    }

    if(this.includeSymbols){
      variables += symbols;
    }

    let generatePassword = ''

    for (let i=0; i<=this.length; i++){
     let index  = Math.floor(Math.random()* variables.length);
     generatePassword += variables[index];
    }

    this.password = generatePassword;

    console.log(this.includeLetters,this.includeNumbers,this.includeSymbols);
  }
}

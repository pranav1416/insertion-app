import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}
  btnValue: boolean = true;
  htmlString: string = "<p></p>"
  addText(textValue: string, iteration: number){
    if(iteration==1){
      this.htmlString = "<p>The intermediate Steps:</p>"  
    }
    this.htmlString += "<p>Iteration " + iteration + ": " + textValue + " </p>" 
  }
  btnDisabled(inputValue: string){
    var unsortedSeq= inputValue.split(',');
    if(unsortedSeq.length == 9 && Number.isInteger(parseInt(unsortedSeq[8]))){
      this.btnValue = false
    }
    else {
      this.btnValue = true
    } 
  }

  sortSeq(inputValue: string){
    var unsortedSeq= inputValue.split(',').map(Number);
    var sortedSeq: number[] = this.insertionSort(unsortedSeq);
    this.htmlString += "<p> The Sorted Sequence is : "+ sortedSeq + "</p>"
  }

  insertionSort(seq: number[]) {

    for(var i = 0; i < seq.length; i++) {
      var temp = seq[i];
      var j = i - 1;
      while (j >= 0 && seq[j] > temp) {
        seq[j + 1] = seq[j];
        j--;
      }
      seq[j + 1] = temp;
      this.addText(seq.toString(),i+1)
     }
    return seq;
    }

    async validationToast() {
      const toast = await this.toastController.create({
        message: 'Please enter valid Input!',
        duration: 2000
      });
      toast.present();
    }
  }  

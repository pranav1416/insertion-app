import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}
  htmlString: string = "<p></p>"
  addText(textValue: string, iteration: number){
    if(iteration==1){
      this.htmlString = "<p>The intermediate Steps:</p>"  
    }
    this.htmlString += "<p>Iteration " + iteration + ": " + textValue + " </p>" 
  }

  sortSeq(inputValue: string){
    var unsortedSeq= inputValue.split(',').map(Number);
    if(unsortedSeq.length != 9){
      this.validationToast(unsortedSeq)
    }
    else{
      var sortedSeq: number[];
      var sortedSeq= this.insertionSort(unsortedSeq);
      this.htmlString += "<p> The Sorted Sequence is : "+ sortedSeq + "</p>"
    }
  }

  insertionSort(inputSeq: number[]) {
    var seq:number[] = inputSeq;
    var indices: number[] = Array.from(Array(inputSeq.length).keys());

    for(var i = 0; i < seq.length; i++) {
      var temp = seq[i];
      var j = i - 1;
      while (j >= 0 && seq[j] > temp) {
        seq[j + 1] = seq[j];
        indices[j+1] = indices[j]
        j--;
      }
      seq[j + 1] = temp;
      indices[j+1]=i;
      this.addText(seq.toString(),i+1)
     }
    return seq;
    }

    async validationToast(unsortedSeq) {
      if (unsortedSeq.length != 9) {
        const toast = await this.toastController.create({
          message: 'Please enter valid Input!',
          duration: 2000
        });
        toast.present();
      }
    }
  }  

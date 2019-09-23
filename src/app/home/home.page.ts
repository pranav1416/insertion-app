import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  unsortedSeq: any
  isAlphabet: boolean

  constructor(public toastController: ToastController) { }
  htmlString: string = "<p></p>"
  addText(textValue: string, iteration: number) {
    if (iteration == 1) {
      this.htmlString = "<p>The intermediate Steps:</p>"
    }
    this.htmlString += "<p>Iteration " + iteration + ": " + textValue + " </p>"
  }

  sortSeq(inputValue: string) {
    this.unsortedSeq = inputValue.split(',').map(Number);
    this.isAlphabet = false
    for (var i in this.unsortedSeq) {
      var seq = this.unsortedSeq[i]
      if(isNaN(seq)){
        this.isAlphabet = true
        this.validationToast()
      }
      }
    if (this.unsortedSeq.length != 9 || this.isAlphabet == true) {
      this.validationToast()
    }
    else {
      var sortedSeq: number[];
      var sortedSeq = this.insertionSort(this.unsortedSeq);
      this.htmlString += "<p> The Sorted Sequence is : " + sortedSeq + "</p>"
    }
  }

  insertionSort(inputSeq: number[]) {
    var seq: number[] = inputSeq;
    var indices: number[] = Array.from(Array(inputSeq.length).keys());

    for (var i = 0; i < seq.length; i++) {
      var temp = seq[i];
      var j = i - 1;
      while (j >= 0 && seq[j] > temp) {
        seq[j + 1] = seq[j];
        indices[j + 1] = indices[j]
        j--;
      }
      seq[j + 1] = temp;
      indices[j + 1] = i;
      this.addText(seq.toString(), i + 1)
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
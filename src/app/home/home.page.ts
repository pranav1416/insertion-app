import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { staticViewQueryIds } from '@angular/compiler';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  sortSeq(inputValue: string){
    var unsortedSeq= inputValue.split(',').map(Number);
    let indexArray = new Map();
    for(var i=0; i < unsortedSeq.length; i++){
      indexArray.set(i+1,unsortedSeq[i]);
    }
    var q = 1;
    console.log(indexArray);
    let ansObj = this.insertionSortFunc(indexArray);
    console.log(ansObj);
    /*
    var seq: number[] =unsortedSeq;
    console.log(seq);
    var sortedSeq: number[] = this.insertionSort(seq);
    console.log('Final Sorted Array: ');
    console.log(sortedSeq);
    console.log('iterations: ');
    console.log(this.test); */
  }
  insertionSort(inputSeq: number[]) {
    var seq:number[] = inputSeq;

    for(var i = 0; i < seq.length; i++) {
      var temp = seq[i];
      var j = i - 1;
      while (j >= 0 && seq[j] > temp) {
        seq[j + 1] = seq[j];
        j--;
      }
      seq[j + 1] = temp;
      console.log(seq);
     }
    return seq;
  }
  insertionSortFunc(indexedArray){
    for(var i = 1; i <= indexedArray.length; i++){
      var tempVal = indexedArray.i;
      var j = i -1;
      while(j >= 1 && indexedArray.j > tempVal){
        var key=j+1;
        indexedArray.key = indexedArray.j;
        j--;
      }
      var newKey = j+1;
      indexedArray.newKey = tempVal;
      console.log(indexedArray);
    }
    return indexedArray;
  }
  }  

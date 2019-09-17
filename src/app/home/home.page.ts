import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { Sequence } from './sequence';
import { staticViewQueryIds } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  strVal: string;
  counter:number = 1;
  sequence: Sequence;
  allSeq: Sequence[];
  sortedOutput: string = "This is a test output.";
  sortSeq(inputValue: string){
    this.sortedOutput = inputValue;
    var unsortedSeq= inputValue.split(',').map(Number);
    var seq: Sequence = { len: unsortedSeq.length, data: unsortedSeq};
    allSeq[0] = seq;
    this.printSeq(seq);
    var sortedSeq: Sequence = this.insertionSort(seq);
    this.allSeq[this.counter] = sortedSeq;
    console.log('Final Sorted Array: ');
    this.printSeq(sortedSeq);
  }
  printSeq(seq: Sequence){
    console.log(seq.data);
  }
  insertionSort(seq: Sequence) {
    for(var i = 0; i < seq.len; i++) {
      var temp = seq.data[i];
      var j = i - 1;
      while (j >= 0 && seq.data[j] > temp) {
        seq.data[j + 1] = seq.data[j];
        j--;
      }
      seq.data[j + 1] = temp;
      this.allSeq.
      this.counter++;
    }
    return seq;
    }
  }  

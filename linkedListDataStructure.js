'use strict';

function Node(value, next) {
 this.value = value;
 this.next = next ? next : null;
}

function LinkedList() {
 this.head = null;
 this.length = 0;
}

LinkedList.prototype.push = function(value) {
 this.head = new Node(value, this.head);
 this.length++;
};
LinkedList.prototype.display = function() {
 var curr = this.head;
 var output = '';
 while(curr) {
   output += curr.value + '->';
   curr = curr.next;
 }
 return output;
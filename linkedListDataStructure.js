function linkedList(head){
	this.head = null;
}
linkedList.prototype.push(function(val){
	this.head = new Node(val, this.head)
})
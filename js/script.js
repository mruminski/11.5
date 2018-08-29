function Button(text) {
  this.text = text || 'Hello';
}

Button.prototype.create = function() {
  var self = this;
  this.element = document.createElement('button');
  this.element.innerText = this.text;
  this.element.addEventListener('click', function() {
    alert(self.text);
  });
  document.body.appendChild(this.element);
}

var btnA = new Button('Matt');
btnA.create();
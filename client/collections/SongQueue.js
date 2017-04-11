//SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // initialize: function() {
  // // enqueue - add - 
  // // dequeue -
  //  remove 
  // //add or remove event,  render the view
  // // this.model.on('enqueue', this.render, this);
  // // this.model.on('dequeue', this.render, this);
  //   console.log(this);
  //   this.on('add', function(){this.playFirst();} );
  // // this.collection.forEach(function(songModel){
  // // 	this.playFirst(songModel);
  // // });
  // },
  // // playFirst: function(song){
  // //   if(this.collection.length === 1){
  // // 		song.play();
  // // 	}
  // // },
  // addder : function(song){

  //  }
  initialize:function(){
  	this.on('add', this.adder, this);
  	this.on('ended', this.remover, this);
  	this.on('dequeue', this.remover, this);
  },
  adder: function(){
  	this.add();
  	if(this.length === 1){
  		this.playFirst();
  	}
  },
  playFirst: function(){
  	this.at(0).play();
  },
  remover: function(song){
  	this.remove(this.at(0));
  	if(this.length === 1){
  		this.playFirst();
  	}
  }

  
});
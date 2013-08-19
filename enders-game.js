if (Meteor.isClient) {
  Template.hello.counter = function() {
    return Supporters.find({}).count();
  };

  Template.hello.events({
    'click input' : function () {
      Supporters.insert({supporter: new Date()});
    }
  });
}

Supporters = new Meteor.Collection("supporters");

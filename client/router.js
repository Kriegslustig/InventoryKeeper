Router.route('/', {
  name: 'timesheet'
, waitOn: function () {
    return Meteor.subscribe('allObjects')
    return Meteor.subscribe('allBookigs')
  }
, action: function () {
    var self = this
    self.render('pageTimesheet')
  }
, data: {
    objects: Objects.find()
  , bookings: Bookings.find()
  }
})

Router.route('/objects/new', {
  name: 'objects.new'
, onBeforeAction: function () {
    var self = this
    if(!Meteor.userId()) {
      self.render('blockNotAllowed')
    } else {
      self.next()
    }
  }
, action: function () {
    var self = this
    self.render('blockObjectsNew')
  }
})

Router.route('/objects/:_id/update', {
  name: 'objects.update'
, waitOn: function () {
    return Meteor.subscribe('allObjects')
  }
, onBeforeAction: function () {
    var self = this
    if(!Meteor.userId()) {
      self.render('blockNotAllowed')
    } else {
      self.next()
    }
  }
, action: function () {
    var self = this
    console.log(Objects.findOne({_id: this.params._id}))
    self.render('blockObjectsUpdate', {data: {
          doc: Objects.findOne({_id: this.params._id})
        }})
  }
})

Router.route('/login', {
  name: 'user.login'
, action: function () {
    var self = this
    self.render('blockLogin')
  }
})

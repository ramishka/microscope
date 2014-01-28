Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('posts');
    }
});

Router.map(function() {
    //What is shown in the / home page path
    this.route('postsList', {
        path: '/'
    });

    //What is shown for each /posts/xyz path
    this.route('postPage', {
        path: '/posts/:_id',
        data: function() {
            return Posts.findOne(this.params._id);
        }
    });

    this.route('postEdit', {
        path: '/posts/:_id/edit',
        data: function() {
            return Posts.findOne(this.params._id);
        }
    });


    this.route('postSubmit', {
        path: '/submit'
    });

    var requireLogin = function() {
        if (!Meteor.user()) { //Check if user is logged in
            if (Meteor.loggingIn())
                this.render(this.loadingTemplate);
            else
                this.render('accessDenied');
            this.stop();
        }
    }

    Router.before(requireLogin, {
        only: 'postSubmit' //allow access only for logged in users
    });


});

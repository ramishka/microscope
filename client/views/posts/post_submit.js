Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        //Create a new posts object
        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        }

        //Call server Method
        Meteor.call('post', post, function(error, id) { //The Meteor.call function calls a Method named by its first argument. 

            if (error)
                return alert(error.reason);
            Router.go('postPage', { _id: id }); //Route to the posts page if inser was a success - pass id to router
        });

    }
});

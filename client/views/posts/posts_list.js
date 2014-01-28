Template.postsList.helpers({
    posts: function() {
        
        return Posts.find({}, {sort: {submitted: -1 }}); //sort by submitted field, descending
    }
});

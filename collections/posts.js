Blog.colls.posts = new Meteor.Collection('posts');

Meteor.methods({
    "post.save": function(post) {
        Perseid.checkUserId(this.userId);
        check(post.content, Perseid.match.NonEmptyString);
        check(post.title, Perseid.match.NonEmptyString);

        Blog.colls.posts.insert({content: post.content, title: post.title, date: new Date()});
    },

    "post.edit": function(id, post) {
        Perseid.checkUserId(this.userId);
        check(post.content, Perseid.match.NonEmptyString);
        check(post.title, Perseid.match.NonEmptyString);

        Blog.colls.posts.update({_id: id}, {$set: {content: post.content, title: post.title}});
    },

    "post.delete": function(id) {
        Perseid.checkUserId(this.userId);

        Blog.colls.posts.remove({_id: id});
    }
});
mcv.create('controller', 'needhelp4', {

    next: function()
    {
        var self = this;
        this.submitTaskRequest(
            function() // success
            {
                mcv.c.needhelpend.task_request = this;
                self.n(mcv.c.needhelpend);
            },
            function() // error
            {
                alert("a network error occurred, your request could not be sent. sorry!");
            }
        );
    },

    submitTaskRequest: function(funcCallBackForSuccess, funcCallBackForError)
    {
        var tr = TaskRequest.build({
            category_id : App.User.helpCategoryId,
            description : App.User.helpDescription,
            location    : App.User.location,
        });
        tr.save(Ti.Network.createHTTPClient(), funcCallBackForSuccess, funcCallBackForError);
        return true;
    },
});

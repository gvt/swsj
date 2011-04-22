mcv.create('controller', 'needhelp4', {

    next: function(intAmount)
    {
        // capture the taskRequest strDescription
        if (intAmount && !!App.d.taskRequest) {
            App.d.taskRequest.attributes.amount = intAmount;
            Ti.API.info("controller.needhelp3 :: next(): taskRequest.amount set to " + App.d.taskRequest.attributes.amount.toString());
        } else {
            Ti.API.warn("controller.needhelp3 :: next(): did not set taskRequest.amount, [App.d.taskRequest="+ App.d.taskRequest +", intAmount="+ intAmount +"]")
        }

        // send the request, let the callbacks handle the view
        // TODO: an activity indicator could be good here..
        var self = this;
        this.submitTaskRequest(
            function() // success
            {
                self.n(mcv.c.needhelpend);
            },
            function() // error
            {
                alert("a network error occurred, your request could not be sent.");
            }
        );
    },

    submitTaskRequest: function(funcCallBackForSuccess, funcCallBackForError)
    {
        attrs  = App.d.taskRequest.attributes;
        var tr = mcv.m.TaskRequest.build({
            category_id : attrs.category_id,
            description : attrs.description,
            location    : attrs.location,
            amount      : attrs.amount,
        });
        tr.save(Ti.Network.createHTTPClient(), funcCallBackForSuccess, funcCallBackForError);
    },
});

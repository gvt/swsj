mcv.create('controller', 'needhelp3', {

    next: function(strDescription)
    {
        // capture the taskRequest strDescription
        if ((strDescription && strDescription.length && strDescription.length>0) && !!App.d.taskRequest) {
            App.d.taskRequest.attributes.description = strDescription;
            Ti.API.info("controller.needhelp3 :: next(): taskRequest.description set to \"" + App.d.taskRequest.attributes.description + "\"");
        } else {
            Ti.API.warn("controller.needhelp3 :: next(): did not set taskRequest.description, [App.d.taskRequest="+ App.d.taskRequest +", strDescription="+ strDescription +"]")
        }
        // on to the next
        this.n(mcv.c.needhelp4);
    },
});

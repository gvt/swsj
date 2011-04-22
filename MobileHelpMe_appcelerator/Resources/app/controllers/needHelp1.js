mcv.create('controller', 'needhelp1', {

    next: function(strLocation)
    {
        // capture the taskRequest location
        if (typeof strLocation === 'string' && !!App.d.taskRequest) {
            App.d.taskRequest.attributes.location = strLocation;
        } else {
            Ti.API.warn("controller.needhelp1 :: next(): did not set taskRequest.location, [App.d.taskRequest="+ App.d.taskRequest +", strLocation="+ strLocation +"]")
        }
        // on to the next
        this.n(mcv.c.needhelp2);
    },
});

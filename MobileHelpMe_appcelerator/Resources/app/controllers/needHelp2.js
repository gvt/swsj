mcv.create('controller', 'needhelp2', {

    next: function(category_id)
    {
        // capture the taskRequest location
        if (!!category_id && !!App.d.taskRequest) {
            App.d.taskRequest.attributes.category_id = category_id;
            Ti.API.info("controller.needhelp2 :: next(): taskRequest.category_id set to " + App.d.taskRequest.attributes.category_id);
        } else {
            Ti.API.warn("controller.needhelp2 :: next(): did not set taskRequest.category_id, [App.d.taskRequest="+ App.d.taskRequest +", category_id="+ category_id +"]")
        }
        // on to the next
        this.n(mcv.c.needhelp3);
    },
});

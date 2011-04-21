//
// accepts an instance of Ti.UI.Window
//
function view_init(win)
{
    //
    // create 3 views: head, body, foot
    //
    var viewHead = Ti.UI.createView({layout:'vertical', height:'20%', width:'80%', top   :'25%', align:'center'}); //, borderColor:'red'   , borderWidth:2});
    var viewBody = Ti.UI.createView({layout:'vertical', height:'40%', width:'80%', bottom:'20%', align:'center'}); //, borderColor:'yellow', borderWidth:2});
    var viewFoot = Ti.UI.createView({layout:'vertical', height:'15%', width:'80%', bottom:0    , align:'center'}); //, borderColor:'orange', borderWidth:2});


    // HEAD
    // user instructions
    var label = Ti.UI.createLabel({text:"How much are you willing to pay?",
                                                                            height: 'auto',
                                                                            top:0,
                                                                            font:{fontSize:24}
    });
    viewHead.add(label);

    
    // BODY
    // slider
    var sliderAmount = Ti.UI.createSlider({
        min:0,max:100,
        value:10,
    });
     // reward amount display field
    var labelSlider = Ti.UI.createLabel({
        height: 120,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius:10,
        font: {fontSize:60},
        backgroundColor: 'white',
        color: 'black',
        text: '$' + Math.round(sliderAmount.value.toString()),
        textAlign:'center',
    });
    // slider event handler
    sliderAmount.addEventListener('change', function() {
        labelSlider.text = '$' + Math.round(sliderAmount.value.toString());
    });
    var labelSliderCaption = Ti.UI.createLabel({
        text:"You can offer from zero to 100",
        height: 40,
        font:{fontSize:10},
    });
    viewBody.add(labelSlider, labelSliderCaption, sliderAmount);


    // FOOT
    // submit button
    var buttonSubmit = Ti.UI.createButton({
        title:"Send for Help",
        height:50,
        font:{fontSize:24, fontWeight:'bold'},
        bottom:0
    });
    // setup the next button click event handler
    buttonSubmit.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        App.User.helpAmount = sliderAmount.value;
        win.nextStep();
    });
    viewFoot.add(buttonSubmit);

    win.add(viewHead,viewBody,viewFoot);
    win.open();
    return [viewHead,viewBody,viewFoot]; // return the view so that it can be removed from the window later
}

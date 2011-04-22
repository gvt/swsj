mcv.create('view', 'needhelp4', {

    //
    // accepts an instance of Ti.UI.Window and an instance of mcv controller.
    // accepts an instance of Ti.UI.Window
    //
    render: function(win, controller)
    {
        //
        // create 3 views: head, body, foot
        //
        var viewHead = Ti.UI.createView({layout:'vertical', height:'20%', width:'80%', top   :'25%', align:'center'}); //, borderColor:'red'   , borderWidth:2});
        var viewBody = Ti.UI.createView({layout:'vertical', height:'40%', width:'80%', bottom:'20%', align:'center'}); //, borderColor:'yellow', borderWidth:2});
        var viewFoot = Ti.UI.createView({layout:'vertical', height:'15%', width:'80%', bottom:0    , align:'center'}); //, borderColor:'orange', borderWidth:2});


        // HEAD
        // user instructions
        var lblInstructions = Ti.UI.createLabel({text:"How much are you willing to pay?",
                                                                                height: 'auto',
                                                                                top:0,
                                                                                font:{fontSize:24}
        });
        viewHead.add(lblInstructions);


    
        // BODY
        // slider
        var sliderAmount = Ti.UI.createSlider({
            min:0,max:100,
            value:10,
        });
         // reward amount display field
        var lblSlider = Ti.UI.createLabel({
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
            lblSlider.text = '$' + Math.round(sliderAmount.value.toString());
        });
        var lblSliderCaption = Ti.UI.createLabel({
            text:"You can offer from zero to 100",
            height: 40,
            font:{fontSize:10},
        });
        viewBody.add(lblSlider, lblSliderCaption, sliderAmount);



        // FOOT
        // submit button
        var btnSubmit = Ti.UI.createButton({
            title:"Send for Help",
            height:50,
            font:{fontSize:24, fontWeight:'bold'},
            bottom:0
        });
        // setup the next button click event handler
        btnSubmit.addEventListener('click', function() {
            controller.next( Math.round(sliderAmount.value.toString()) );
        });
        viewFoot.add(btnSubmit);
        win.add(viewHead,viewBody,viewFoot);
    },
});

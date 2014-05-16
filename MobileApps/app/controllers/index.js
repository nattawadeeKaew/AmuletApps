var myAmulet = Alloy.Collections.amulet;
var amulets = Alloy.createModel('amulet', {
	title : 'เหรียญหลวงปู่กินรี จันทิโย',
	division : 'หลวงปู่กินรี ',
	year : '2519 ',
	groups : 'อีสาน ',
	provice : 'นครพนม ',
	type : 'เหรียญ ',
	kind : 'เนื้อนวโลหะ ',
	observe : 'ลักษณะเหรียญเป็นรูปทรงคล้ายใบโพธิ์ มีหู ด้านหน้าเหรียญ'
});
myAmulet.add(amulets);
amulets.save();

function showAmulet(event) {
	var selectedAmulet = event.source;
	var args = {
		title : selectedAmulet.title,
		division : selectedAmulet.division,
		year : selectedAmulet.year,
		groups : selectedAmulet.groups,
		provice : selectedAmulet.provice,
		type : selectedAmulet.type,
		kind : selectedAmulet.kind,
		observe : selectedAmulet.observe
		
	};
	var amuletview = Alloy.createController("amuletdetails", args).getView();

    if (OS_IOS) {
        $.navGroupWin.openWindow(amuletview);
    }
    if (OS_ANDROID) {
        amuletview.open();
    }
}

function addAmulet(){
    var myaddAmulet = Alloy.createController("addamulet",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(myaddAmulet);
    }
    if (OS_ANDROID) {
        myaddAmulet.open();
    }
}

// Open main window
if(OS_IOS) { 
   $.navGroupWin.open(); 
} 
if (OS_ANDROID) { 
   $.index.open(); 
}

function search(){
    var mysearchAmulet = Alloy.createController("search",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(mysearchAmulet);
    }
    if (OS_ANDROID) {
        mysearchAmulet.open();
    }
}

// Open main window
if(OS_IOS) { 
   $.navGroupWin.open(); 
} 
if (OS_ANDROID) { 
   $.index.open(); 
}

// function animateView (view) {
    // if(contentView.children.length>0) {
        // var slide_it_left = Titanium.UI.createAnimation();
        // slide_it_left.left = -1*contentView.width; // to put it back to the left side of the window
        // slide_it_left.duration = 400;
        // var viewToAnimate  = contentView.children[0];
        // //a1.curve = Titanium.UI.ANIMATION_CURVE_LINEAR;
        // slide_it_left.addEventListener('complete', function () {
            // contentView.remove(viewToAnimate );
        // });
        // viewToAnimate.animate(slide_it_left);
    // } 
    // {
        // view.width=contentView.width;
        // view.height=contentView.height;
        // view.slide_it_left = contentView.width;
        // contentView.add(view);
        // var slide_it_left = Titanium.UI.createAnimation();
        // slide_it_left.left = 0; // to put it back to the left side of the window
        // slide_it_left.duration = 395;
        // slide_it_left.addEventListener('complete', function () {
            // viewModule.viewInit();
        // });
        // view.animate(slide_it_left);
    // }
// }
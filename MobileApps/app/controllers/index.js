var myAmulet = Alloy.Collections.amulet;
var amulets = Alloy.createModel('amulet', {
	title : 'พระผง',
	division : 'รุ่น 2',
	year : 'c',
	groups : 'a',
	provice : 'b',
	type : 'd',
	kind : 'e',
	observe : 'f'

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


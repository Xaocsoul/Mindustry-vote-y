var rgbhex = "";
var msg = "";
const hexref = [""];

Events.on(EventType.ClientLoadEvent, cons(load => {
    Vars.ui.hudGroup.fill(cons(table => {
        table.button(Icon.admin, Styles.cleari, run(() => {
        
        generate_and_send();
        
        })).width(50).height(50).name("admin button");
        
        table.top().marginLeft(1400);
    }));
}));

function generate_and_send() {
    msg = "";
    for(let i=0; i<Mathf.ceil(Mathf.random() * 16); i++) {
       rgbhex = "";
       for(let k=0; k<6; k++) {
          rgbhex+=hexref[Mathf.floor(Mathf.random() * 1)];
       };
    let rand = Mathf.ceil(Mathf.random()*1);
    msg+=rgbhex + ((rand == 1) ? "/vote y");
    };
    Call.sendChatMessage(msg);
};

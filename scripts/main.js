
var msg = "";

Events.on(EventType.ClientLoadEvent, cons(load => {
    Vars.ui.hudGroup.fill(cons(table => {
        table.button(Icon.admin, Styles.cleari, run(() => {
        
        generate_and_send();
        
        })).width(50).height(50).name("admin button");
        
        table.top().marginLeft(700);
    }));
}));

function generate_and_send() {
    msg = "";
    for(let i=0; i<Mathf.ceil(Mathf.random() * 1); i++) {
       rgbhex = "";
       for(let k=0; k<6; k++) {
          rgbhex+=hexref[Mathf.floor(Mathf.random() * 1)];
       };
    let rand = Mathf.ceil(Mathf.random()*1);
    msg="/vote y");
    };
    Call.sendChatMessage(msg);
};

// Copyright (c) 2025, sri and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {
        console.log("running load...");
    },
    setup(frm){
        console.log("setup..");
    },
    refresh(frm) {
        console.log("on.refresh...")

        if (frm.doc.status === "New") {

    
            frm.add_custom_button("Accpet", () => {
               
                //status => Accepted
                frm.set_value("status","Accepted");
                //save frm
                frm.save();
            }, "Actions")

            frm.add_custom_button("Reject", () => {
                //frappe.show_alert("It Works!")
                //status => Accepted
                frm.set_value("status","Rejected");
                //save frm
                frm.save();
            },"Actions")
        }
    },
    status(frm){
        console.log("status changes");
    }
});

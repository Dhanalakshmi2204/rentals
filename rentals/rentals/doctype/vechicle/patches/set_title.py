import frappe  
  

def execute():
    vechicles = frappe.db.get_all("vechicle",pluck="name")
    for v in vechicles:
        vechicle = frappe.get_doc("vechicle",v)
        vechicle.set_title()
        vechicle.save()

    frappe.db.commit()
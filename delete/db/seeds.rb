# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Clinic.destroy_all 
Patient.destroy_all 
Record.destroy_all 
Request.destroy_all 

c1=Clinic.create!(name: "MD Anderson", address: "example", city: "Houston", state: "TX", zip:77777, phone: "713-444-0000", fax: "713-444-1111")

c2=Clinic.create!(name: "Kelsey Seybold", address: "example", city: "Houston", state: "TX", zip:77777, phone: "713-444-0000", fax: "713-444-1111")

p1=Patient.create!(first_name: "Stephanie", last_name: "Cheney", social: "0000", birthday: "01-01-2004")

p2=Patient.create!(first_name: "Edwin", last_name: "Calvillo", social: "0000", birthday: "01-01-1989")

r1=Record.create!(patient_id:p1.id, clinic_id:c1.id, description:"record requests")
r2=Record.create!(patient_id:p2.id, clinic_id:c2.id, description:"record requests 2")


Request.create!(patient_id:p1.id, status: "true", user_clinic_id: c1.id, other_clinic_id: c2.id)
Request.create!(patient_id:p2.id, status:"true", user_clinic_id: c2.id, other_clinic_id: c1.id)
Request.create!(patient_id:p2.id, status:"false", user_clinic_id: c1.id, other_clinic_id: c2.id)
Request.create!(patient_id:p1.id, status:"false", user_clinic_id: c1.id, other_clinic_id: c2.id)
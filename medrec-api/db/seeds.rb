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

10.times do 
    Clinic.create(name: Faker::Company.name, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip_code, phone: Faker::PhoneNumber.phone_number, fax: Faker::PhoneNumber.phone_number)
end 

p1=Patient.create!(first_name: "Stephanie", last_name: "Cheney", social: "0000", birthday: "01-01-2004")
p2=Patient.create!(first_name: "Edwin", last_name: "Calvillo", social: "0000", birthday: "01-01-1989")

r1=Record.create!(patient_id:p1.id, clinic: Clinic.all.sample, description:"record requests")
r2=Record.create!(patient_id:p2.id, clinic: Clinic.all.sample, description:"record requests 2")


Request.create!(patient_id:p1.id, status: "Open", user_clinic_id: Clinic.all.sample.id, other_clinic_id: Clinic.all.sample.id)
Request.create!(patient_id:p2.id, status:"Open", user_clinic_id: Clinic.all.sample.id, other_clinic_id: Clinic.all.sample.id)
Request.create!(patient_id:p2.id, status:"Completed", user_clinic_id: Clinic.all.sample.id, other_clinic_id: Clinic.all.sample.id)
Request.create!(patient_id:p1.id, status:"Completed", user_clinic_id: Clinic.all.sample.id, other_clinic_id: Clinic.all.sample.id)
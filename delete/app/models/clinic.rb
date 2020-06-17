class Clinic < ApplicationRecord
    has_many :requests, :class_name=> 'Request', :foreign_key =>'other_clinic_id'
    has_many :receipts, :class_name=>'Request', :foreign_key =>'user_clinic_id' 
    has_many :patients, through: :requests 
    # has_many :other_clinics, class_name: "Clinic", foreign_key: "other_clinic_id" 
end

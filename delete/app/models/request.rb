class Request < ApplicationRecord
    belongs_to :user_clinic, class_name: "Clinic", foreign_key: "user_clinic_id"
    belongs_to :other_clinic, class_name: "Clinic", foreign_key: "other_clinic_id"
    belongs_to :patient
end

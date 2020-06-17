class Patient < ApplicationRecord
    has_many :requests
    has_many :clinics, through: :requests
    has_many :records
end

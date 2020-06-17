class ClinicsController < ApplicationController
    def index 
        clinics=Clinic.all 
        render json: clinics.to_json(:except => [:updated_at, :created_at])
    end 
end

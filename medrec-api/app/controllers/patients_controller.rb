class PatientsController < ApplicationController
    def index 
        patients=Patient.all 
        render json: patients.to_json(:except => [:updated_at, :created_at])
    end 
end

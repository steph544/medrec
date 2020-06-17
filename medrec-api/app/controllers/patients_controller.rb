class PatientsController < ApplicationController
    def index 
        patients=Patient.all 
        render json: patients.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        patient=Patient.new(first_name: params[:first_name], last_name: params[:last_name], social: params[:social], birthday: params[:birthday])
    
        if patient.save
            render json: patient
        else
            render json: { error: 'Patient not saved' }
        end
    end 
end

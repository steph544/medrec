class RequestsController < ApplicationController

    def index 
        requests=Request.all 
        render json: requests.to_json(:except => [:updated_at, :created_at])
    end 

    def show 
        request=Request.find(params[:id])
        render json: request.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        request=Request.new(user_clinic_id: params[:user_clinic_id], other_clinic_id: params[:other_clinic_id], status: params[:status], patient_id: params[:patient_id])
    
        if request.save
            render json: request
        else
            render json: { error: 'Request not saved' }
        end
    end 

    def update 
        request=Request.find(params[:id])
        request.update(params[:status])
    end 

end

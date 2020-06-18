class RecordsController < ApplicationController
    def index 
        records=Record.all 
        render json: records.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        record=Record.new(patient_id: params[:patient_id], clinic_id: params[:clinic_id], description: params[:description])
    
        if record.save
            render json: record
        else
            render json: { error: 'Record not saved' }
        end
    end 

    def update 
        record=Record.find(params[:id])
        record.update(record_params)
        render json: record.to_json(:except => [:updated_at, :created_at])
    end 

    def show 
        record=Record.find(params[:id])
        render json: record.to_json(:except => [:updated_at, :created_at])
    end 

    def destroy 
        record=Record.find(params[:id])
        record.destroy 
        render json: record.to_json(:except => [:updated_at, :created_at])
    end 

    private
    def record_params
        params.require(:request).permit(:patient_id, :clinic_id, :description)
    end
end

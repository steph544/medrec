class RecordsController < ApplicationController
    def index 
        records=Record.all 
        render json: records.to_json(:except => [:updated_at, :created_at])
    end 
end

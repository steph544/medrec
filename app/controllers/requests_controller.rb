class RequestsController < ApplicationController

    def index 
        requests=Request.all 
        render json: requests.to_json(:except => [:updated_at, :created_at])
    end 
end

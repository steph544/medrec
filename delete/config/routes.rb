Rails.application.routes.draw do
  resources :requests
  resources :records
  resources :patients
  resources :clinics
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

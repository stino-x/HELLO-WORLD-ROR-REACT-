Rails.application.routes.draw do
  root 'root#index'

  resources :messages, only: [:index]
end

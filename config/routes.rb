Rails.application.routes.draw do
  root 'static_pages#index'

  # Present the results
  post '/analyze', to: "twitter#analyze"
end

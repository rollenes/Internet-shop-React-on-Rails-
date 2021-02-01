Rails.application.routes.draw do
  root 'home#index'

  namespace :api, constraints: {format: :json}, defaults: {format: :json} do
    namespace :v1 do
      get 'products', to: 'products#index'
      get 'products/show', to: 'products#show'
      get 'products/show_selected', to: 'products#show_selected'
      put 'products/remove_product', to: 'products#remove_product'
      put 'products/edit_product', to: 'products#edit_product'
      post 'products/add_product', to: 'products#add_product'

      get 'provinces', to: 'provinces#index'
      get 'provinces/show', to: 'provinces#show'

      get 'cities', to: 'cities#index'
      get 'cities/show', to: 'cities#show'

      post 'users/addUser', to: 'user#add_user'
      get 'users/logInUser', to: 'user#log_in_user'
      get 'users', to: 'user#index'
      get 'users/get_user', to: 'user#get_user'
      put 'users/edit_user', to: 'user#edit_user'
      get 'users/get_user_person_data', to: 'user#get_user_person_data'
      delete 'users/remove_user', to: 'user#remove_user'

      get 'admins/log_in_admin', to: 'admin#log_in_admin'
      get 'admin/get_admin', to: 'admin#get_admin'
      put 'admin/editAdmin', to: 'admin#edit_admin'
    end
  end

  get '*path', to: 'home#index', via: :all
end

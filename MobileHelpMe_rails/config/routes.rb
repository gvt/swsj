MobileHelpMeRails::Application.routes.draw do

  # intended for web-based admin console
  namespace :admin do
    resources :categories
  end

  # intended for JSON output via REST calls
  resources :task_requests, :except => [:new, :edit, :destroy]
  resources :users        , :except => [:new, :edit, :destroy] do
    # TODO: implement these as nested resources
    # resources :payments
    # resources :feedbacks
    # resources :problem_reports
  end

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end

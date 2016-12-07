Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  namespace :api do
    get 'all_projects', to: 'projects#all_projects'
    get 'browse_all', to: 'projects#browse_all'
    # get 'search', to: 'projects#search'
    resources :profiles do
      resources :profile_categories
      resources :projects do
        resources :project_categories
      end
    end

    resources :conversations do
      resources :messages
    end
  end # End of namespace

  # Leave this as the last route at the bottom
  get '*unmatched_route', to: 'home#index'
end

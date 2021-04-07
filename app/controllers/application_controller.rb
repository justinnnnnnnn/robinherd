class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
    before_action :require_logged_in, only: [:logout]
    helper_method :logged_in?, :current_user
    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def require_logged_in 
        redirect_to new_session_url unless logged_in?
    end 

    def require_logged_out 
        redirect_to user_url(current_user) if logged_in?
    end 

    def login(user)
        session[:session_token] = user.reset_session_token! 
        @current_user = user 
    end 

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil 
    end 

    def logged_in? 
        !!current_user
    end 


end

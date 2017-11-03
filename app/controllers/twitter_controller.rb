
require_relative "../../analyzer/app"
require_relative "../../analyzer/analyzer"

class TwitterController < ApplicationController
  def analyze
    @user      = params[:user]
    @followers = TwitterAnalyzer.new.followers_count
  end
end

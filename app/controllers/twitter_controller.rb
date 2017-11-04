
class TwitterController < ApplicationController
  def analyze
    twitter    = TwitterAnalyzer.new(params[:user])

    @user      = params[:user]
    @followers = twitter.followers_count
  end
end

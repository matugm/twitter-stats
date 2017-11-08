
class TwitterController < ApplicationController
  def analyze
    twitter    = TwitterAnalyzer.new(params[:user])
    @user      = params[:user]

    if twitter.valid_user?
      @followers  = twitter.followers_count
      @top_tweets = twitter.prepare_tweets.first(10)
      @word_count = twitter.get_word_analysis
    else
      render plain: "User invalid."
    end
  end
end


class TwitterController < ApplicationController
  def analyze
    twitter    = TwitterAnalyzer.new(params[:user])

    @user       = params[:user]
    @followers  = twitter.followers_count
    @top_tweets = twitter.prepare_tweets.first(10)
    @word_count = twitter.get_word_analysis
  end
end

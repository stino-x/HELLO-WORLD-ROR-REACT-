class RootController < ApplicationController
  def index
    @message = Message.all.sample

    respond_to do |format|
      format.html
      format.xml { render xml: @message }
      format.json { render json: @message }
    end
  end
end

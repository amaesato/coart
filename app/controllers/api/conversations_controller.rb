class Api::ConversationsController < ApiController
  # before_action :set_user, except: [:index, :update, :destroy, :create]
  before_action :set_conversation, except: [:index, :create]
  def index
    render json: Conversations.all
  end

  def show
    render json: @conversation
  end

  def create
    conversation = Conversation.new(conversation_params)
    if conversation.save
      render json: conversation
    else
      render json: {errors: conversation.errors, status: 401, message: 'Invaild input'}
    end
  end

  def update
    if @conversation.update(conversation_params)
      render json: @conversation
    else
      render json: {errors: conversation.errors, status: 401}
    end
  end

  def destroy
    @conversation.destroy
    render json: {message: 'Deleted'}

  end

  private

  def conversation_params
    params.require(:conversation).permit(:subject, :body, :sent_from, :sent_to)
  end

  # def set_user
  #   @user = User.find(params[:user_id])
  # end

  def set_conversation
    @conversation = Conversation.find(params[:id])
  end

end

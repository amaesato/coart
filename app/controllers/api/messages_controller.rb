class Api::MessagesController < ApiController
  before_action :set_converation, only: :create
  before_action :set_message, except: [:index, :create]
  def index
    @messages = Message.all
    render json: @messages
  end

  def show
    render json: @message
  end

  def create
    message = @conversation.messages.new(message_params) 
    message.user_id = current_user.id
    if message.save
      render json: message
    else
      render json: {errors: message.errors, status: 401, message: 'Unable to Send!'}
    end
  end

  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: {errors: message.errors, message: 'Unable to Send!'}
    end
  end

  def destroy
    @message.destroy 
    render json: {message: 'Message Destroyed!'}
  end

  private

  def message_params
    params.require(:messages).permit(:body, :user_id)
  end

  def set_converation
    @conversation = Conversation.find(params[:conversation_id])
  end

  def set_message
    @message = Conversation.messages.find(params[:id])
  end
end

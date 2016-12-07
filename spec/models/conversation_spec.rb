require 'rails_helper'

RSpec.describe Conversation, type: :model do
  # it 'has a specific subject' do
  # subject = "This is the subject!"
  # conversation = Conversation.create(subject: subject)
  # expect(conversation.subject). to eq(subject)
  describe 'attributes' do
    it { should respond_to(:subject) }
    it { should respond_to(:user_id) }
    it { should belong_to(:user) }
    it { should have_many(:messages) }
  end
end


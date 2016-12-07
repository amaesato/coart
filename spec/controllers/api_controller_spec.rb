require 'rails_helper'

RSpec.describe ApiController, type: :controller do
  describe 'security' do
    it {should protect_from_forgery_with(:exception)}
    it {should skip_before_action_of(:verify_authenticity_token)}
  end
end

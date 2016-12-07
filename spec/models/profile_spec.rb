require 'rails_helper'

RSpec.describe Profile, type: :model do
  describe 'Profile' do
    it { should belong_to (:user)}
    it { should have_many (:projects)}
    it { should have_one (:category)}
  end
end

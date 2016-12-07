require 'rails_helper'

RSpec.describe Project, type: :model do
  describe 'Projects' do
    it { should belong_to (:profile)}
    it { should have_one(:category)}
  end
end

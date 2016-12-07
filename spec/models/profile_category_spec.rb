require 'rails_helper'

RSpec.describe Category, type: :model do
  describe "Categories" do
    it { should belong_to(:cat)}
    it { should serialize(:music).as(Array)}
    it { should serialize(:photography)}
    it { should serialize(:videography)}
    it { should serialize(:muralist)}
    it { should serialize(:painting)}
    it { should serialize(:drawing)}
    it { should serialize(:sculpture)}
    it { should serialize(:graphic_design)}
    it { should serialize(:performance)}
    it { should serialize(:literature)}
    it { should serialize(:hand_made)}
  end
end

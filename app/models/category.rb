class Category < ApplicationRecord
  belongs_to :cat, polymorphic: true

  serialize :music
  serialize :photography
  serialize :videography
  serialize :muralist
  serialize :painting
  serialize :drawing
  serialize :sculpture
  serialize :graphic_design
  serialize :performance
  serialize :literature
  serialize :hand_made
end

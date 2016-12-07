class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.json :music,  default: []
      t.json :photography,  default: []
      t.json :videography,  default: []
      t.json :muralist,  default: []
      t.json :painting,  default: []
      t.json :drawing,  default: []
      t.json :sculpture,  default: []
      t.json :graphic_design,  default: []
      t.json :performance,  default: []
      t.json :literature,  default: []
      t.json :hand_made,  default: []

      t.references :cat, polymorphic: :true, index: true
      t.timestamps
    end
  end
end

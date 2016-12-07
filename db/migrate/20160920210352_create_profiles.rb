class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :zip_code
      t.text :bio
      t.string :inspirations
      t.string :youtube
      t.string :soundcloud
      t.string :vimeo
      t.string :facebook
      t.string :twitter
      t.string :tumbler
      t.string :instagram
      t.string :other      
      t.belongs_to :user

      t.timestamps
    end
  end
end

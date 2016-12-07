class AddImageUrlToProfile < ActiveRecord::Migration[5.0]
  def change
    add_column :profiles, :image_url, :string
  end
end

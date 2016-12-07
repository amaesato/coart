class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.boolean :collab
      t.boolean :active
      t.belongs_to :profile

      t.timestamps
    end
  end
end

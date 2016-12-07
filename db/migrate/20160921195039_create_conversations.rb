class CreateConversations < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
      t.integer :sent_from
      t.integer :sent_to
      t.string :subject
      t.text :body

      t.timestamps
    end
  end
end

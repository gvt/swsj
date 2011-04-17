class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :location
      t.boolean :can_help
      t.string :fb_id
      t.string :tw_id
      t.string :phone
      t.string :email

      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end

class CreateTaskRequests < ActiveRecord::Migration
  def self.up
    create_table :task_requests do |t|
      t.string :title

      t.timestamps
    end
  end

  def self.down
    drop_table :task_requests
  end
end

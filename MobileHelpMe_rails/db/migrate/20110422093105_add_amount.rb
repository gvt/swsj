class AddAmount < ActiveRecord::Migration
  def self.up
    add_column    :task_requests, :amount, :integer
  end

  def self.down
    remove_column :task_requests, :amount
  end
end

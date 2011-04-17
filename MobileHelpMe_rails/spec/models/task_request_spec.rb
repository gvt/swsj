require 'spec_helper'

describe TaskRequest do
  it "can be saved blank" do
    TaskRequest.new.save.should be_true
  end
  
  it "has a working Factory" do
    Factory.build(:task_request).save.should be_true
  end
end

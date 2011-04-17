require 'spec_helper'

describe User do
  it "can be saved blank" do
    User.new.save.should be_true
  end
  
  it "has a working Factory" do
    Factory.build(:user).save.should be_true
  end
end

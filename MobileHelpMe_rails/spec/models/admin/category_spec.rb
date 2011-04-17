require 'spec_helper'

describe Admin::Category do
  it "can be saved blank" do
    Admin::Category.new.save.should be_true
  end
  
  it "has a working Factory" do
    Factory.build(:category).save.should be_true
  end
end

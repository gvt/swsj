require 'spec_helper'

describe "Users" do
  describe "GET /users" do
    it "works" do
      get users_path(:format => :js)
      response.status.should be(200)
    end
  end

  describe "GET /users/123" do
    it "works" do
      get users_path(:id => "123", :format => :js)
      response.status.should be(200)
    end
  end
end

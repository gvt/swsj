require "spec_helper"

describe TaskRequestsController do
  describe "routing" do

    it "recognizes and generates #index" do
      { :get => "/task_requests" }.should route_to(:controller => "task_requests", :action => "index")
    end

    it "recognizes and generates #show" do
      { :get => "/task_requests/1" }.should route_to(:controller => "task_requests", :action => "show", :id => "1")
    end

    it "recognizes and generates #create" do
      { :post => "/task_requests" }.should route_to(:controller => "task_requests", :action => "create")
    end

    it "recognizes and generates #update" do
      { :put => "/task_requests/1" }.should route_to(:controller => "task_requests", :action => "update", :id => "1")
    end

    it "NOT recognizes and generates #destroy" do
      { :delete => "/task_requests/1" }.should_not be_routable
    end

  end
end

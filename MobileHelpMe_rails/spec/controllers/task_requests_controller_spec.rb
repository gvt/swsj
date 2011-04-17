require 'spec_helper'

describe TaskRequestsController do
  describe "POST create" do
    it "should work with JS" do
      lambda {
        post :create, :format => :js, :task_request => {:description => "qwe123"}
      }.should change(TaskRequest, :count)
      response.should be_success
      response.content_type.should == "text/javascript"
    end
  end

  describe "GET show" do
    it "should work with JS" do
      tr = Factory.create :task_request
      get :show, :format => :js, :id => tr.id
      response.should be_success
      response.content_type.should == "text/javascript"
    end
  end

  describe "PUT update" do
    it "should work with JS" do
      tr = Factory.create :task_request, :description => "qwe123"
      lambda {
        put :update, :format => :js, :id => tr.id, :task_request => {:description => "new desc"}
      }.should_not change(TaskRequest, :count)
      response.should be_success
      response.content_type.should == "text/javascript"
      tr.reload.description.should == "new desc"
    end
  end

  describe "GET index" do
    it "should work with JS" do
      tr = Factory.create :task_request
      get :index, :format => :js
      response.should be_success
      response.content_type.should == "text/javascript"
    end
  end
end

require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by the Rails when you ran the scaffold generator.

describe UsersController do
  before :each do
    controller.request.params[:format] = :xml
  end

  def mock_user(stubs={})
    @mock_user ||= mock_model(User, stubs).as_null_object
  end

  describe "GET index" do
    it "assigns all users as @users" do
      User.stub(:all) { [mock_user] }
      get :index, :format => :js
      assigns(:users).should eq([mock_user])
    end
  end

  describe "GET show" do
    it "assigns the requested user as @user" do
      User.stub(:find).with("37") { mock_user }
      get :show, :id => "37", :format => :js
      assigns(:user).should be(mock_user)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "assigns a newly created user as @user" do
        User.stub(:new).with({'these' => 'params'}) { mock_user(:save => true) }
        post :create, :user => {'these' => 'params'}, :format => :js
        assigns(:user).should be(mock_user)
      end

      it "returns JSON" do
        User.stub(:new) { mock_user(:save => true) }
        post :create, :user => {}, :format => :js
        response.should be_success
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved user as @user" do
        User.stub(:new).with({'these' => 'params'}) { mock_user(:save => false) }
        post :create, :user => {'these' => 'params'}, :format => :js
        assigns(:user).should be(mock_user)
      end

      it "returns error code 422" do
        User.stub(:new) { mock_user(:save => false) }
        post :create, :user => {}, :format => :js
        response.code.to_i.should == 422
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested user" do
        User.stub(:find).with("37") { mock_user }
        mock_user.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :user => {'these' => 'params'}, :format => :js
      end

      it "assigns the requested user as @user" do
        User.stub(:find) { mock_user(:update_attributes => true) }
        put :update, :id => "1", :format => :js
        assigns(:user).should be(mock_user)
      end

      it "returns JSON" do
        User.stub(:find) { mock_user(:update_attributes => true) }
        put :update, :id => "1", :format => :js
        response.should be_success
      end
    end

    describe "with invalid params" do
      it "assigns the user as @user" do
        User.stub(:find) { mock_user(:update_attributes => false) }
        put :update, :id => "1", :format => :js
        assigns(:user).should be(mock_user)
      end

      it "returns error code 422" do
        User.stub(:find) { mock_user(:update_attributes => false) }
        put :update, :id => "1", :format => :js
        response.code.to_i.should == 422
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested user" do
      User.stub(:find).with("37") { mock_user }
      mock_user.should_receive(:destroy)
      delete :destroy, :id => "37", :format => :js
    end

    it "succeeds" do
      User.stub(:find) { mock_user }
      delete :destroy, :id => "1", :format => :js
      response.should be_success
    end
  end

end
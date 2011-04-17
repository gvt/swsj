class UsersController < ApplicationController
  # GET /users.js
  def index
    @users = User.all

    respond_to do |format|
      # format.html # index.html.erb
      format.js  { render :js => @users }
    end
  end

  # GET /users/1.js
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      # format.html # show.html.erb
      format.js  { render :js => @user }
    end
  end

  # POST /users.js
  def create
    @user = User.new(params[:user])

    respond_to do |format|
      if @user.save
        # format.html { redirect_to(@user, :notice => 'User was successfully created.') }
        format.js  { render :js => @user, :status => :created, :location => @user }
      else
        # format.html { render :action => "new" }
        format.js  { render :js => @user.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /users/1.js
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        # format.html { redirect_to(@user, :notice => 'User was successfully updated.') }
        format.js  { head :ok }
      else
        # format.html { render :action => "edit" }
        format.js  { render :js => @user.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1.js
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      # format.html { redirect_to(users_url) }
      format.js  { head :ok }
    end
  end
end

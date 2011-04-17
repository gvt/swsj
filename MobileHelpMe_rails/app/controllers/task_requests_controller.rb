class TaskRequestsController < ApplicationController
  # GET /task_request.js
  def index
    @task_request = TaskRequest.all
  
    respond_to do |format|
      # format.html # index.html.erb
      format.js  { render :json => @task_request }
    end
  end
  
  # GET /task_request/1.js
  def show
    @task_request = TaskRequest.find(params[:id])
  
    respond_to do |format|
      # format.html # show.html.erb
      format.js  { render :json => @task_request }
    end
  end

  # POST /task_request.js
  def create
    @task_request = TaskRequest.new(params[:task_request])

    respond_to do |format|
      if @task_request.save
        # format.html { redirect_to(@user, :notice => 'User was successfully created.') }
        format.js  { render :json => @task_request, :status => :created, :location => @task_request }
      else
        # format.html { render :action => "new" }
        format.js  { render :json => @task_request.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /task_request/1.js
  def update
    @task_request = TaskRequest.find(params[:id])
  
    respond_to do |format|
      if @task_request.update_attributes(params[:task_request])
        # format.html { redirect_to(@user, :notice => 'User was successfully updated.') }
        format.js  { head :ok }
      else
        # format.html { render :action => "edit" }
        format.js  { render :json => @task_request.errors, :status => :unprocessable_entity }
      end
    end
  end
  
  # # DELETE /task_request/1.js
  # def destroy
  #   @task_request = TaskRequest.find(params[:id])
  #   @task_request.destroy
  # 
  #   respond_to do |format|
  #     # format.html { redirect_to(task_requests_url) }
  #     format.js  { head :ok }
  #   end
  # end
end

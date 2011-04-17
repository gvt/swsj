class Admin::CategoriesController < ApplicationController
  # GET /admin/categories
  # GET /admin/categories.xml
  def index
    @admin_categories = Admin::Category.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @admin_categories }
    end
  end

  # GET /admin/categories/1
  # GET /admin/categories/1.xml
  def show
    @admin_category = Admin::Category.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @admin_category }
    end
  end

  # GET /admin/categories/new
  # GET /admin/categories/new.xml
  def new
    @admin_category = Admin::Category.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @admin_category }
    end
  end

  # GET /admin/categories/1/edit
  def edit
    @admin_category = Admin::Category.find(params[:id])
  end

  # POST /admin/categories
  # POST /admin/categories.xml
  def create
    @admin_category = Admin::Category.new(params[:admin_category])

    respond_to do |format|
      if @admin_category.save
        format.html { redirect_to(@admin_category, :notice => 'Category was successfully created.') }
        format.xml  { render :xml => @admin_category, :status => :created, :location => @admin_category }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @admin_category.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /admin/categories/1
  # PUT /admin/categories/1.xml
  def update
    @admin_category = Admin::Category.find(params[:id])

    respond_to do |format|
      if @admin_category.update_attributes(params[:admin_category])
        format.html { redirect_to(@admin_category, :notice => 'Category was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @admin_category.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/categories/1
  # DELETE /admin/categories/1.xml
  def destroy
    @admin_category = Admin::Category.find(params[:id])
    @admin_category.destroy

    respond_to do |format|
      format.html { redirect_to(admin_categories_url) }
      format.xml  { head :ok }
    end
  end
end

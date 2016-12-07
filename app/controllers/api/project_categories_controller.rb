class Api::ProjectCategoriesController < ApiController

  def index
    render json: Project_categories.all
  end

  def show
    render json: @project_categories
  end

  def create
    project_categories = Project_categories.new(project_categories_params)
    if project_categories.save
      render json: project_categories
    else
      render json: {errors: project_categories.errors}, status: 401
    end
  end

  def update
    if @project_categories.update(project_categories_params)
      render json: @project_categories
    else
      render json: {errors: profile.errors}, status: 401
    end
  end

  def destroy
    @project_categories.destroy
    render json: {message: 'Destroyed!'}
  end

  private

  def project_categories_params
    params.require(:project_categories).permit(:music, :photography, :videography, :muralist, :painting, :drawing, :sculpture, :graphic_design, :performance, :literature, :hand_made, :profile_id)
  end

  def set_project
    @project = Project.find(params[:id])
  end

end

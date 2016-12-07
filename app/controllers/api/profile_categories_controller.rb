class Api::ProfileCategoriesController < ApiController


  # before_action :categories only:
  def index
    render json: Profile_categories.all
  end

  def show
    render json: @profile_categories
  end

  def create
    profile_categories = Profile_categories.new(profile_categories_params)
    if profile_categories.save_limit
      render json: profile_categories
    else
      render json: {errors: profile_categories.errors}, status: 401
    end
  end

  def update
    if @profile_categories.update(profile_categories_params)
      render json: @profile_categories
    else
      render json: {errors: profile_categories.errors}, status: 401
    end
  end

  def destroy
    @profile_categories.destroy
    render json: {message: 'Destroyed!'}
  end

  def add_image

  end
  private

  def profile_categories_params
    params.require(:profile_categories).permit(:music, :photography, :videography, :muralist, :painting, :drawing, :sculpture, :graphic_design, :performance, :literature, :hand_made, :profile_id)
  end

  def set_profile
    @profile = Profile.find(params[:id])
  end

  def set_profile_categories
    @profile_categories = @profile.profile_categories.find(params[:id])
  end

  # def categories
  #   @categories = Profile_categories.categories
  # end

end

describe ProjectsController do
  describe 'Actions' do
    context "Before actions" do
      before do
        set_profile
        except :all_projects
      end
      before do
        set_profile
        only :show, :update, :destroy
      end
    end
  describe 'Index' do
    context "index" do
      #should render all projects associated with this profile
      it { should }
    end
  end

  end
end

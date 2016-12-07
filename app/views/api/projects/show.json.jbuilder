json.project do
  json.id @project.id
  json.name @project.name
  json.description @project.description
  json.collab @project.collab
  json.active @project.active
  json.url api_profile_project_url(@profile, @project)
  json.categories do
    json.music @project.category.music
    json.photography @project.category.photography
    json.videography @project.category.videography
    json.muralist @project.category.muralist
    json.painting @project.category.painting
    json.drawing @project.category.drawing
    json.sculpture @project.category.sculpture
    json.graphic_design @project.category.graphic_design
    json.performance @project.category.performance
    json.literature @project.category.literature
    json.hand_made @project.category.hand_made
  end
end

json.user do
  user = @profile.user
  json.username user.username
  json.email user.email
  json.first_name user.first_name
  json.last_name user.last_name
end
